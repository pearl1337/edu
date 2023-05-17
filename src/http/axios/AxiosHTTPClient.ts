import { AxiosInstance } from "axios";
import { HTTPClient } from "../HttpClient";
import { HTTPClientResponse } from "../HttpClient";

export class AxiosHTTPClient implements HTTPClient {
  constructor(private axiosInstance: AxiosInstance) {}

  public async get<T = unknown>(url: string): Promise<HTTPClientResponse<T>> {
    try {
      const { data, status } = await this.axiosInstance.get<T>(url);
      return [null, data, status];
    } catch (error) {
      console.error(error);
      return [error];
    }
  }

  public async post<T = unknown>(
    url: string,
    body: any
  ): Promise<HTTPClientResponse<T>> {
    try {
      const { data, status } = await this.axiosInstance.post(url, body);
      return [null, data, status];
    } catch (error) {
      console.error(error);
      return [error];
    }
  }

  public async delete<T = unknown>(
    url: string
  ): Promise<HTTPClientResponse<T>> {
    try {
      const { data, status } = await this.axiosInstance.delete(url);
      return [null, data, status];
    } catch (error) {
      console.error(error);
      return [error];
    }
  }

  public async put<T = unknown>(
    url: string,
    body: any
  ): Promise<HTTPClientResponse<T>> {
    try {
      const { data, status } = await this.axiosInstance.put(url, body);
      return [null, data, status];
    } catch (error) {
      console.error(error);
      return [error];
    }
  }

  public async patch<T = unknown>(
    url: string,
    body: any
  ): Promise<HTTPClientResponse<T>> {
    try {
      const { data, status } = await this.axiosInstance.patch(url, body);
      return [null, data, status];
    } catch (error) {
      console.error(error);
      return [error];
    }
  }
}
