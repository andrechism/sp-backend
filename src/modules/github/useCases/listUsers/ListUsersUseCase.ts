import { IListUsersDTO } from "@modules/github/dtos/IListUsersDTO";
import { IUser } from "@modules/github/interfaces/IUser";
import { axiosClient } from "@vendor/axios";
import parseLinkHeader from "parse-link-header";

interface IRequest extends IListUsersDTO {}

interface IResponse {
  users: IUser[];
  nextPage: string;
}

class ListUsersUseCase {
  async execute({ since }: IRequest): Promise<IResponse> {
    const url = new URL("https://api.github.com/users");

    if (since) {
      url.searchParams.append("since", since);
    }

    const { headers, data } = await axiosClient.get<IUser[]>(url.toString());

    const linkHeader = parseLinkHeader(headers.link);
    const nextUrl = new URL(linkHeader.next.url);
    const formattedNextUrl = `${
      process.env.API_URL || "http://localhost:3333"
    }${nextUrl.pathname}${nextUrl.search}`;

    return {
      users: data,
      nextPage: formattedNextUrl,
    } satisfies IResponse;
  }
}

export { ListUsersUseCase };
