import client from "../config/database";

export async function insetingAnswer(answeredBy:string, answer:string, id: number){
return await client.questions.create({
    data: {
        answeredBy: answeredBy,
        answer: answer,
        questionId: id
    }
})
}

