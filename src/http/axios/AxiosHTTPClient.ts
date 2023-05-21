import { AxiosInstance, AxiosError } from "axios";
import { Client } from "../Client";
import { HTTPClient } from "../HttpClient";
import { HTTPClientResponse } from "../HttpClient";

export class AxiosHTTPClient extends Client implements HTTPClient {
  constructor(private axiosInstance: AxiosInstance) {
    super();
  }

  public async get<T = unknown>(
    url: string,
    query?: object
  ): Promise<HTTPClientResponse<T>> {
    try {
      const { data, status } = await this.axiosInstance.get<T>(url, {
        params: { ...(query || {}) },
      });
      return [null, data, status];
    } catch (error) {
      return [this.parseHTTPError(error)];
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
      return [this.parseHTTPError(error)];
    }
  }

  public async delete<T = unknown>(
    url: string
  ): Promise<HTTPClientResponse<T>> {
    try {
      const { data, status } = await this.axiosInstance.delete(url);
      return [null, data, status];
    } catch (error) {
      return [this.parseHTTPError(error)];
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
      return [this.parseHTTPError(error)];
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
      return [this.parseHTTPError(error)];
    }
  }
}
