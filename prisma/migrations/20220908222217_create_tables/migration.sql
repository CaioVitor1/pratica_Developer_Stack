-- CreateTable
CREATE TABLE "Perguntas" (
    "id" SERIAL NOT NULL,
    "askedBy" TEXT NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "Perguntas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "answeredBy" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "credentials_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Perguntas_askedBy_key" ON "Perguntas"("askedBy");

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Perguntas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
