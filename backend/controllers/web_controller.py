import os
import asyncio
import nest_asyncio
import tempfile
from dotenv import load_dotenv
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain_community.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_community.document_loaders import WebBaseLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

nest_asyncio.apply()
try:
    asyncio.get_event_loop()
except RuntimeError:
    asyncio.set_event_loop(asyncio.new_event_loop())

load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

def process_web(url, query):
    try:
        document = WebBaseLoader(url).load()

        splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)
        text_splitter = splitter.split_documents(document)

        embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
        vectors = FAISS.from_documents(text_splitter, embeddings)    

        retriever = vectors.as_retriever(search_kwargs={"k": 5})

        llm = ChatGoogleGenerativeAI(
            model="gemini-2.5-pro",
            temperature=0.5
        )

        # custom prompt
        prompt_template = """
        You are a creative assistant that answers question based on the following context:
        {context}

        Question: {question}
        Give a clear, concise answer that will fullfil the user's requirements.
        """

        prompt = PromptTemplate(
            template=prompt_template,
            input_variables=["context", "question"]
        )

        # chain
        chain = RetrievalQA.from_chain_type( 
            llm=llm, 
            retriever=retriever,
            chain_type_kwargs={"prompt": prompt}
        )
            
        answer = chain.invoke({"query": query})

        return answer["result"]
    
    except Exception as e:
        return f"Error: {str(e)}"