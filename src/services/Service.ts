import { HTTPClient } from "../http/HTTPClient";
import { IStorage } from "./storage/Storage";

export interface ServiceProps {
  HTTPClient?: HTTPClient;
  storage?: IStorage;
}

export class Service {
  private readonly _HTTPClient: HTTPClient | null;
  private readonly storage: IStorage | null;
  constructor(props: ServiceProps) {
    this._HTTPClient = props.HTTPClient || null;
    this.storage = props.storage || null;
  }

  get HTTPClient(): HTTPClient {
    if (this._HTTPClient === null) {
      throw new Error("HTTPClient is not initialized");
    }
    return this._HTTPClient;
  }
}
