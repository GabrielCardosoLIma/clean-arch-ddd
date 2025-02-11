import { QuestionsRepository } from "../repositories/questions-repository";
import { CreateQuestionUseCase } from "./create-question";

const fakeQuestionsRepository: QuestionsRepository = {
  create: async () => {},
};

test("create a question", async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository);

  const { question } = await createQuestion.execute({
    authorId: "1",
    title: "Nova pergunta",
    content: "Conateúdo da pergunta",
  });

  expect(question.id).toBeTruthy();
});
