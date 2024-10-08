import {ArtistsRepository} from "../../../repository/ArtistsRepository";

export class ArtistsRepositoryImpl implements ArtistsRepository {
    // @ts-ignore
    private readonly db = db;

    constructor(db: any) {
        this.db = db;
    }

    async getArtists(): Promise<void> {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    async getArtistById(id: string): Promise<void> {
        try {

        } catch (error) {
            console.log(error)
        }
    }
}