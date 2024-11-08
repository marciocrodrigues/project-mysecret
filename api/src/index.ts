import UUIDGenerator from "@domain/entity/UUIDGenerator";
import AnswerDAO from "@infra/database/dao/AnswerDAO";
import QuestionDAO from "@infra/database/dao/QuestionDAO";
import UserDAO from "@infra/database/dao/UserDAO";
import KnexAdapter from "@infra/database/KnexAdapter";
import LoadEnv from "@infra/helpers/LoadEnv";

LoadEnv.load();

try {
    const knexAdapter = new KnexAdapter();
    knexAdapter.connect();
const userDao = new AnswerDAO(knexAdapter.instance);
userDao.create({
    answerId: UUIDGenerator.generate(),
    answer: 'teste',
    createdAt: new Date(),
    questionId: '4067a030-233f-4026-8f08-fad1199a1e86',
    updatedAt: null,
    userId: 'e60d6067-aeaf-4b3c-8a62-dc62413dcaf5'
})
}
catch (error) {
    console.log(error);
}
