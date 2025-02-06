import { HttpAdater } from "../../../config/http/http.adapter";
import { LoginResponse } from "../../../infraestructure/interfaces/loginResponse";
import { UserMapper } from "../../../infraestructure/mappers/user.mapper";
import { User } from "../../entities/user.entity";

interface Props {
  email: string;
  password: string;
}

export const LoginUserUseCases = async (
  credentials: Props,
  fetcher: HttpAdater
): Promise<User> => {
  const { email, password } = credentials;

  const response = await fetcher.post<LoginResponse>("/v1/user/login", {
    email: email,
    password: password,
  });

  return UserMapper.fromLoginResponseToEntity(response);
};
