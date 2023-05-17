import { Service, ServiceProps } from "../Service";
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

  async login(credentials: LoginCredentials): Promise<any> {
    try {
      const [error, data] = await this.HTTPClient.post<any>(
        "/signin",
        credentials
      );
      return [error, data];
    } catch (error) {
      return [error];
    }
  }

  async signup(credentials: SignupCredentials): Promise<void> {
    console.log(credentials);
    return;
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
