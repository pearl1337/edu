import { HTTPClient } from "../http/HTTPClient";
import { IStorage } from "./storage/Storage";

export interface ServiceProps {
  HTTPClient?: HTTPClient;
  storage?: IStorage;
}
export type ServiceErrorMessage = string;
export type ServiceResponse<T> = [ServiceErrorMessage] | [null, T];

export class Service {
  private readonly _HTTPClient: HTTPClient | null;
  private readonly _storage: IStorage | null;
  constructor(props: ServiceProps) {
    this._HTTPClient = props.HTTPClient || null;
    this._storage = props.storage || null;
  }

  get HTTPClient(): HTTPClient {
    if (this._HTTPClient === null) {
      throw new Error("HTTPClient is not initialized");
    }
    return this._HTTPClient;
  }

  get storage(): IStorage {
    if (this._storage === null) {
      throw new Error("Storage is not initialized");
    }
    return this._storage;
  }
}
