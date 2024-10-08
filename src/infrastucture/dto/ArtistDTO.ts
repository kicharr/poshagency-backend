export interface IArtist {
    readonly _id: string
    _login: string
    _password: string
    _firstName: string
    _secondName: string
    _birthDate: Date
    readonly _registrationDate: Date
    _sex: string
    _avatarUrl: string
}

export interface ICommonFeatures {
    photo: string
    name: string
    dateBirth: string
    growth: number
    weight: number
    clothingSize: number
    shoeSize: number
    eyes: string
    vocal: string[] | null
    hairColor: string
    dance: string[]
    foreignLanguages: string[]
    voice: string | null
    type: string | null
    photos: Array<{ image: string, alt?: string }>
}

export interface IAdditionalInfo {
    nationality: string
    city: string
    driving: string
    externalFeatures: string | null
    moreInfo: string[] | null
    tvWork: string[] | null
    skills: string[] | null
    kinopoiskLink: string
    kinoteatrLink: string
}

export interface IMovie {
    name: string
    year: number
    type: string
}