export interface HTTPClient {
  get<T = unknown>(
    url: string,
    query?: object,
    headers?: Record<string, string>
  ): Promise<HTTPClientResponse<T>>;
  post<T = unknown>(
    url: string,
    body: any,
    headers?: Record<string, string>
  ): Promise<HTTPClientResponse<T>>;
  put<T = unknown>(
    url: string,
    data: any,
    headers?: Record<string, string>
  ): Promise<HTTPClientResponse<T>>;
  patch<T = unknown>(
    url: string,
    data: any,
    headers?: Record<string, string>
  ): Promise<HTTPClientResponse<T>>;
  delete<T = unknown>(
    url: string,
    headers?: Record<string, string>
  ): Promise<HTTPClientResponse<T>>;
}

export enum HTTPClientType {
  AXIOS = "axios",
}

export type HTTPClientResponse<T> = [null, T, number?] | [string];
