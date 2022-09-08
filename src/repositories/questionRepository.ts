import client from "../config/database"

export async function newQuestion(askedBy: string, question:string) {
    return await client.perguntas.create({
        data: {
            askedBy: askedBy,
            question: question
        }
    })
}

export async function questionsDb(){
    return await client.perguntas.findMany()
}

export async function unicQuestionDb(id: number){
    return await client.questions.findMany({
        where: {
            questionId: id
        }
    })
}

export async function unicAnswerDb(id: number){
    return await client.perguntas.findMany({
        where: {
            id: id
        }
    })
}
