import { cipherApiFetcher } from "../../../config/cipher-api.adapter";
import * as UseCases from "../../../core/use-cases";

interface LoginProps {
  email: string;
  password: string;
}

export const useAuthStore = () => {
  const startLogin = async (credentials: LoginProps) => {
    const response = await UseCases.LoginUserUseCases(
      credentials,
      cipherApiFetcher
    );

    return response;
  };

  return {
    startLogin,
  };
};
