from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI

def process_query(query: str, vectorstore):
    try:
        retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

        llm = ChatGoogleGenerativeAI(
            model="gemini-2.5-pro",
            temperature=0.3
        )

        prompt = PromptTemplate(
            input_variables=["context", "question"],
            template="""
                You are an expert assistant answering questions strictly based on the given context from a document. 

                --- CONTEXT START ---
                {context}
                --- CONTEXT END ---

                Question: {question}

                Guidelines:
                1. Use only the facts from the context. Do not add extra assumptions.
                2. If numerical or factual data is provided, state it exactly as in the source.
                3. If there are multiple possible answers, list them briefly.
                4. Keep the tone professional and easy to read.
                5. If the answer is not in the context, respond: "I could not find that information in the provided document."

                After giving the answer, add a short 1-2 line summary of what the user asked.
            """
        )

        qa_chain = RetrievalQA.from_chain_type(
            llm=llm,
            retriever=retriever,
            chain_type="stuff",
            chain_type_kwargs={"prompt": prompt}
        )

        result = qa_chain.invoke(query)
        return {"answer": result["result"]}
    except Exception as e:
        return {"error": str(e)}
