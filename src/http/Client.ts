import { AxiosError } from "axios";

export class Client {
  protected parseHTTPError(error: Error | unknown, log = false): string {
    if (log) {
      console.error(error);
    }
    if (error instanceof AxiosError) {
      return error.response?.data.message;
    }
    return "Unexpected error";
  }
}
