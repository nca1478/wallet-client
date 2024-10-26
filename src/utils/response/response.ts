import { instanceToPlain } from "class-transformer";

/**
 * Summary
 *
 * This file handle the response of HTTP requests.
 * Standard used: JSON API https://jsonapi.org/
 *
 * Object response
 *  {
 *      success: Boolean,
 *      meta: Object,
 *      data: Object|Array,
 *      errrors: Array
 *  }
 *
 */

/**
 * Return response object when is a GET resquest
 * @param   {Object}  meta    Metadata of response
 * @param   {Object}  data    Body of response
 * @return  {Object}
 */
export const responseGET = (meta: any, data: any): object => {
  return {
    success: true,
    data: instanceToPlain(data),
    meta,
    errors: null,
  };
};

/**
 * Return response object when found an error
 * @param   {Array}   errors    Array of errors
 * @return  {Object}
 */
export const responseError = (errors: any): object => {
  return {
    success: false,
    data: null,
    meta: null,
    errors,
  };
};

/**
 * Return response object when resource has been created
 * @param   {Object}    data    Data of new resource
 * @return  {Object}
 */
export const responsePOST = (data: any): object => {
  return {
    success: true,
    data: instanceToPlain(data),
    meta: null,
    errors: null,
  };
};
