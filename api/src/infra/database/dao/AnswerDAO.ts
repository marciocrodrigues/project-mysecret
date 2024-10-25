import DAO from "@domain/dao/DAO";
import AnswerEntity from "@domain/entity/AnswerEntity";

export default class AnswerDAO implements DAO<AnswerEntity> {
    create(data: AnswerEntity): Promise<AnswerEntity> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<AnswerEntity> {
        throw new Error("Method not implemented.");
    }

}