import { IUser } from "./IUser"

interface IRepository {
    id: number
    name: string
    full_name: string
    private: boolean
    owner: IUser
    html_url: string
    description: string
}

export {
    IRepository
}