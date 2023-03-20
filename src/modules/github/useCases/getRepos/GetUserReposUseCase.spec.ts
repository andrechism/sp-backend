import { GetUserReposUseCase } from "./GetUserReposUseCase"

let getUserReposUseCase: GetUserReposUseCase

describe("Get user repos", () => {
    beforeEach(() => {
        getUserReposUseCase = new GetUserReposUseCase()
    })

    it("should return the current user public repos", async () => {
        const repos = await getUserReposUseCase.execute({
            username: "andrechism"
        })

        expect(repos[0]).toHaveProperty("name")
        expect(repos[0].owner.login).toBe("andrechism")
    })
})