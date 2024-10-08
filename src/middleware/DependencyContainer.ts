// @ts-ignore
import pgp from "pg-promise";

import {ArtistsRepository} from "../repository/ArtistsRepository";
import {ArtistsRepositoryImpl} from "../infrastucture/entity/impl/ArtistsRepositoryImpl";
import {DBClient, IDbClient} from "../infrastucture/dto/DbClient";

export class DependencyContainer {
    private dbClient: IDbClient
    static dependencyContainer: DependencyContainer = null

    constructor() {
        if (DependencyContainer.dependencyContainer) {
            console.log('Container exist');
            return;
        }

        try {
            this.dbClient = pgp()(DBClient);
        } catch (e) {
            console.log(e)
        }

        DependencyContainer.dependencyContainer = this
    }

    ArtistsRepository = (): ArtistsRepository => {
        return new ArtistsRepositoryImpl(this.dbClient)
    }
}