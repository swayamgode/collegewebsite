import os
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings

os.environ["GOOGLE_API_KEY"] = "AIzaSyAAB9l3qyjX5EY8MD-Z-6suQ4xPvIrFzJM"

from langchain_community.vectorstores import FAISS
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

# LLM
llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0.7
)


# Embeddings
embeddings = GoogleGenerativeAIEmbeddings(
    model="models/gemini-embedding-001"
)



# Vector store
vectorstore = FAISS.from_texts(
    ["Start of conversation."],
    embedding=embeddings
)

retriever = vectorstore.as_retriever(search_kwargs={"k": 3})

prompt = ChatPromptTemplate.from_template("""
You are a helpful AI assistant.
Relevant past memory:
{history}

User: {input}
AI:
""")

chain = prompt | llm | StrOutputParser()

print("Memory Agent Started (type 'exit' to stop)\n")

while True:
    user_input = input("You: ")

    if user_input.lower() == "exit":
        break

    docs = retriever.invoke(user_input)
    history = "\n".join([doc.page_content for doc in docs])

    response = chain.invoke({
        "history": history,
        "input": user_input
    })

    print("AI:", response)

    vectorstore.add_texts([f"User: {user_input}\nAI: {response}"])