import { GetUserUseCase } from "./GetUserUseCase"

let getUserUseCase: GetUserUseCase

describe("Get user", () => {
    beforeEach(() => {
        getUserUseCase = new GetUserUseCase()
    })

    it("should return the selected user", async () => {
        const user = await getUserUseCase.execute({
            username: "andrechism"
        })

        expect(user.login).toBe("andrechism")
        expect(user.id).toBeDefined()
    })
})