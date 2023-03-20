import { ListUsersUseCase } from "./ListUsersUseCase"

let listUsersUseCase: ListUsersUseCase

describe("List users", () => {
    
    beforeEach(() => {
        listUsersUseCase = new ListUsersUseCase()
    })

    it("should list 30 users and have a next page url", async () => {
        const { users, nextPage } = await listUsersUseCase.execute({
            since: "50"
        })

        expect(nextPage).toContain("?since=")
        expect(users).toHaveLength(30)
    })

    it("should list 30 users and have a next page url even with no 'since' param", async () => {
        const { users, nextPage } = await listUsersUseCase.execute({})

        expect(nextPage).toContain("?since=")
        expect(users).toHaveLength(30)
    })

})