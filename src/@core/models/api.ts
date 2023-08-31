import {Endpoint} from "./endpoint";

export class API {
  name!: string;
  baseUrl!: string;
  devUrl!: string;
  isDev!: boolean;
  isFake!: boolean;
  endpoints!: Endpoint[];
}
