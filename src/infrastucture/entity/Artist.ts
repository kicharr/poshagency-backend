import {IAdditionalInfo, ICommonFeatures, IMovie} from "../dto/ArtistDTO";

export class Artist {
    private readonly _id: string;
    private _category: string;
    private _preview: string;
    private _isMainArtist: boolean;
    private _commonFeatures?: ICommonFeatures
    private _additionalInformation?: IAdditionalInfo
    private _filmography?: IMovie[]

    constructor() {
    }

    // Getters
    get id(): string {
        return this._id;
    }

    get category(): string {
        return this._category;
    }

    get preview(): string {
        return this._preview;
    }

    get isMainArtist(): boolean {
        return this._isMainArtist;
    }

    get commonFeatures(): ICommonFeatures {
        return this._commonFeatures;
    }

    get additionalInformation(): IAdditionalInfo {
        return this._additionalInformation;
    }

    get filmography(): IMovie[] {
        return this._filmography;
    }
}