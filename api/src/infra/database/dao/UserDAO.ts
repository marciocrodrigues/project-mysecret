import DAO from "@domain/dao/DAO";
import { UserModel } from "@domain/model";
import { DatabaseTableNames, KnexTypeAdapter } from "../KnexAdapter";

export default class UserDAO implements DAO<UserModel> {
    private readonly tableName: string = DatabaseTableNames.USERS;

    constructor(private readonly connection: KnexTypeAdapter) {}

    async create(data: UserModel): Promise<UserModel> {
        const [savedUser] = await this.connection<UserModel>(this.tableName).insert(data).returning('*');

        return savedUser;
    }
    findById(id: number): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }

}