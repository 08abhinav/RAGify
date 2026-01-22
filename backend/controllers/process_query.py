from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama import ChatOllama

def process_query(query: str, chroma_results: dict):
    try:
        documents = chroma_results.get("documents", [[]])[0]

        if not documents:
            return {
                "answer": "I could not find that information in the provided document."
            }

        context = "\n\n".join(documents)

        llm = ChatOllama(
            model="tinyllama",
            temperature=0.3
        )

        prompt = ChatPromptTemplate.from_messages([
            ("system",
             "You are an expert assistant answering questions strictly based on the given context. "
             "Use only the context. If not found, say exactly: "
             "'I could not find that information in the provided document.'"),
            
            ("human",
             """--- CONTEXT START ---
                {context}
                --- CONTEXT END ---

                Question: {question}

                Answer concisely. End with a 1–2 line summary of the question."""
            )
        ])

        chain = prompt | llm

        response = chain.invoke({
            "context": context,
            "question": query
        })

        return {"answer": response.content}

    except Exception as e:
        return {"error": str(e)}
