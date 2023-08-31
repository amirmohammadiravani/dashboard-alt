import {EndpointMethods} from "./endpoint-methods";

export class Endpoint {
  name!: string;
  url!: string;
  method!: EndpointMethods;
  permission?: string
  fakeSource!: string;
}
