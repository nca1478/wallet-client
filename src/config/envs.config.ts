import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  SOAP_BASE_URL: get("SOAP_BASE_URL").required().asUrlString(),
};
