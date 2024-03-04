import type { ISelectGeneric } from "@/models/base/ISelected";

/**
 *
 * @param value
 * @returns
 */
const convertBoolToString = (value: boolean) => (value ? "Si" : "No");


/**
 *
 */
export type EnumNumberValues = { [key: string]: number };

/**
 *
 * @param enumObj
 * @returns
 */
const convertEnumToArray = (enumObj: EnumNumberValues): ISelectGeneric[] => {
  return Object.keys(enumObj)
    .filter(key => !isNaN(Number(enumObj[key])))
    .map(key => ({ id: enumObj[key].toString(), name: key }));
}

export { convertBoolToString, convertEnumToArray };
