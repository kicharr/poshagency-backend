export interface IDbClient {
    host: string
    port: number;
    database: string
    user: string
    password: string
}

export const DBClient: IDbClient = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: '1234'
}