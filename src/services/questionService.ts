import * as questionRepository from "../repositories/questionRepository"

export async function newQuestions(askedBy: string, question:string) {
const insertQuestion = await questionRepository.newQuestion(askedBy, question)
}

export async function lookingQuestions() {
     const questions = await questionRepository.questionsDb()
     const AllQuestions = {
        "questions": questions
     }
     return AllQuestions
}

export async function lookingUnicQuestion(id:number) {
    const answer = await questionRepository.unicQuestionDb(id)
    const question = await questionRepository.unicAnswerDb(id)
    const justAnswer = [
        {
            "answeredBy": answer[0].answeredBy,
            "answer": answer[0].answer
        }
    ]
    const justQuestion = {
        "id": answer[0].id,
        "askedBy": question[0].askedBy,
        "answers": justAnswer
    }
    return justQuestion
}