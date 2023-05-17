import { Service, ServiceProps } from "../Service";
import { HTTPClientFactory } from "../../http/HTTPClientFactory";
import { HTTPClientType } from "../../http/HTTPClient";
import { LocalStorage } from "../storage/Storage";

interface LoginCredentials {
  name: string;
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

  async login(credentials: LoginCredentials): Promise<void> {
    try {
      console.log(credentials);
      return;
    } catch (error) {
      console.error(error);
    }
  }

  async signup(credentials: SignupCredentials): Promise<void> {
    console.log(credentials);
    return;
  }
}

export const userService = new AuthService({
  HTTPClient: HTTPClientFactory.create(HTTPClientType.AXIOS, {
    url: {
      postfix: "auth",
    },
  }),
  storage: new LocalStorage(),
});
