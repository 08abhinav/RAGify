from langchain_core.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_classic.chains.combine_documents.stuff import create_stuff_documents_chain
from langchain_classic.chains.retrieval_qa.base import RetrievalQA

def process_query(query: str, vectorstore):
    try:
        retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

        llm = ChatGoogleGenerativeAI(
            model="gemini-2.5-pro",
            temperature=0.3
        )

        prompt = PromptTemplate(
            input_variables=["context", "input"],
            template="""
                You are an expert assistant answering questions strictly based on the given context.

                --- CONTEXT START ---
                {context}
                --- CONTEXT END ---

                Question: {input}

                Rules:
                - Use only the context
                - If numerical or factual data is provided, state it exactly as in the source.
                - If there are multiple possible answers, list them briefly.
                - After giving the answer, add a short 1-2 line summary of what the user asked.
                - If not found, say: "I could not find that information in the provided document."
            """
        )

        document_chain = create_stuff_documents_chain(
            llm=llm,
            prompt=prompt
        )

        retrieval_chain = RetrievalQA.from_chain_type(
            llm=llm,
            chain_type="stuff",
            retriever=retriever,
            chain_type_kwargs={"prompt": prompt}
        )

        result = retrieval_chain.run(query)
        return {"answer": result}

    except Exception as e:
        return {"error": str(e)}
