import { Service, ServiceProps, ServiceResponse } from "../Service";
import { HTTPClientFactory } from "../../http/HTTPClientFactory";
import { HTTPClientType } from "../../http/HTTPClient";
import { LocalStorage } from "../storage/Storage";

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupCredentials {
  email: string;
  password: string;
}

class AuthService extends Service {
  constructor(props: ServiceProps) {
    super(props);
  }

  public async login(credentials: LoginCredentials): Promise<any> {
    try {
      const [error, response] = await this.HTTPClient.post<any>(
        "/signin",
        credentials
      );

      if (error) {
        return [error];
      }

      this.storage.write("token", response.access_token);
      this.storage.write("userData", response.payload);

      return [null, true];
    } catch (error) {
      return [error];
    }
  }

  public async signup(
    credentials: SignupCredentials
  ): Promise<ServiceResponse<boolean>> {
    {
      const [error, isEmailExists] = await this.isEmailUsed(credentials.email);
      if (error) {
        return [error];
      }
      if (isEmailExists === true) {
        return ["Email already exists"];
      }
    }

    const [error, key] = await this.HTTPClient.post<string>(
      "/singup",
      credentials
    );

    if (error) {
      return [error];
    }

    const [verifyError, response] = await this.HTTPClient.get<{
      access_token: string;
      payload: object;
    }>(`/verify/${key}`);

    if (typeof verifyError === "string") {
      return [verifyError];
    }

    this.storage.write("token", response.access_token);
    this.storage.write("userData", response.payload);

    return [null, true];
  }

  private async isEmailUsed(email: string): Promise<ServiceResponse<boolean>> {
    const [error, data] = await this.HTTPClient.get<{ isExists: boolean }>(
      "/exists",
      { email }
    );
    if (typeof error === "string") {
      return [error];
    }
    return [null, data.isExists];
  }
}
export const authService = new AuthService({
  HTTPClient: HTTPClientFactory.create(HTTPClientType.AXIOS, {
    url: {
      postfix: "auth",
    },
  }),
  storage: new LocalStorage(),
});
