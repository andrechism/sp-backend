const statusLibrary = {
    BADREQUEST: 400,
    FORBIDDEN: 403
} as const

export class AppError {
    public readonly message: string

    public readonly statusCode: number

    public static statusLibrary = statusLibrary

    constructor(message: string, statusCode: number = statusLibrary.BADREQUEST) {
        this.message = message
        this.statusCode = statusCode
    }
}