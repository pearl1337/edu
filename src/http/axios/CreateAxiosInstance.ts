import axios from "axios";
import { AxiosInstance, CreateAxiosDefaults } from "axios";
import { concatUrlParts } from "../../utils/concatUrlParts";

export function CreateAxiosInstance(
  postfix: string = "",
  baseURL: string = import.meta.env.VITE_API_URL
): AxiosInstance {
  const url = concatUrlParts(baseURL, postfix);
  const params: CreateAxiosDefaults = {
    baseURL: url,
  };

  const instance = axios.create(params);
  return instance;
}
