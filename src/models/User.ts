import { Model } from "./Model";
import { LocalStorage } from "../services/storage/Storage";
export enum Role {
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
}

export class User extends Model {
  constructor() {
    super();
  }
  public static isAuthenticated(): boolean {
    return Boolean(new LocalStorage().read("token"));
  }
}
