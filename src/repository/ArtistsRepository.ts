export interface ArtistsRepository {
    getArtists(): Promise<void>

    getArtistById(id: string): Promise<void>
}