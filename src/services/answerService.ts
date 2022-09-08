import * as answerRepository from "../repositories/answerRepository"
export async function newAnswer(answeredBy:string, answer:string, id:number){
const insertAnswer = await answerRepository.insetingAnswer(answeredBy, answer, id)
}