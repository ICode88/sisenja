import { stringify, parse } from "querystring";

export interface LooseObject {
  [key: string]: any;
}

export const encodeFromObject = (object: LooseObject): string => {
  return stringify(object);
};

export const decodeFromUrl = (url: string): LooseObject => {
  const split = url.split("?");
  if (split.length !== 2) {
    return {};
  }

  return parse(split[1]);
};
