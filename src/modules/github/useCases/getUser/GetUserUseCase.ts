import { IGetUserDTO } from "@modules/github/dtos/IGetUserDTO";
import { IUser } from "@modules/github/interfaces/IUser";
import { axiosClient } from "@vendor/axios";

interface IRequest extends IGetUserDTO {}

interface IResponse extends IUser {}

class GetUserUseCase {
  async execute({ username }: IRequest): Promise<IResponse> {
    const { data } = await axiosClient.get<IResponse>(
      `https://api.github.com/users/${username}`
    );
    return data;
  }
}

export { GetUserUseCase };
