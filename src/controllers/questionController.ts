import { Request, Response } from 'express';
import * as questionService from "../services/questionService"
import * as answerService from "../services/answerService"

export async function createQuestion(req: Request, res: Response) {
  const {askedBy, question} : {askedBy: string, question:string} = req.body
  await questionService.newQuestions(askedBy, question)
  return res.status(201).send("Nova questão inserida")
}

export async function createAnswer(req: Request, res: Response) {
const {answeredBy, answer} : {answeredBy:string, answer:string} = req.body
const {id} = req.params
await answerService.newAnswer(answeredBy, answer, Number(id))
return res.status(201).send("nova resposta adicionada")
}

export async function get(req: Request, res: Response) {
  const everyQuestions = await questionService.lookingQuestions();
  return res.send(everyQuestions) 
}

export async function getById(req: Request, res: Response) {
  const {id} = req.params
  const unicQuestion = await questionService.lookingUnicQuestion(Number(id))
  return res.send(unicQuestion)
}
