import { HTTPClient, HTTPClientType } from "./HTTPClient";
import { AxiosHTTPClient } from "./axios/AxiosHTTPClient";
import { CreateAxiosInstance } from "./axios/CreateAxiosInstance";
interface HTTPClientProps {
  url?: {
    base?: string;
    postfix?: string;
  };
}

export class HTTPClientFactory {
  public static create(
    type: HTTPClientType,
    props: HTTPClientProps
  ): HTTPClient {
    switch (type) {
      case HTTPClientType.AXIOS:
        return new AxiosHTTPClient(
          CreateAxiosInstance(props.url?.postfix, props.url?.base)
        );
    }
  }
}
