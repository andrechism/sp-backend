import { GetUserReposController } from "@modules/github/useCases/getRepos/GetUserReposController";
import { GetUserController } from "@modules/github/useCases/getUser/GetUserController";
import { ListUsersController } from "@modules/github/useCases/listUsers/ListUsersController";
import { Router } from "express";

const usersRoute = Router()

const getUserController = new GetUserController()
const getUserReposController = new GetUserReposController()
const listUsersController = new ListUsersController()

usersRoute.get('/:username/details', getUserController.handle)
usersRoute.get('/:username/repos', getUserReposController.handle)
usersRoute.get('/', listUsersController.handle)

export {
    usersRoute
}