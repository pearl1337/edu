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

class UserService extends Service {
  constructor(props: ServiceProps) {
    super(props);

    if (!this.HTTPClient) {
      throw new Error("HTTPClient is required for this service");
    }
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

export const userService = new UserService({
  HTTPClient: HTTPClientFactory.create(HTTPClientType.AXIOS, {
    url: {
      postfix: "user",
    },
  }),
  storage: new LocalStorage(),
});
