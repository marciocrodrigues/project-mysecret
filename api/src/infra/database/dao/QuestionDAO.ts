import DAO from "@domain/dao/DAO";
import QuestionEntity from "@domain/entity/QuestionEntity";

export default class QuestionDAO implements DAO<QuestionEntity> {
    create(data: QuestionEntity): Promise<QuestionEntity> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<QuestionEntity> {
        throw new Error("Method not implemented.");
    }

}