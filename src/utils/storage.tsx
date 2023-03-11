import { AES, enc } from 'crypto-js';
import { toString } from 'lodash';
import localforage from 'localforage';
const config = { secretKey: 'mybooks', userInfo: 'user' };

localforage.config({
  driver: [localforage.LOCALSTORAGE], // Force WebSQL; same as using setDriver()
  name: config.secretKey,
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
});

const StorageService = localforage;

/**
 * use to encrypt data
 * @method bsEncrypt
 */
export function bsEncrypt(data) {
  const newString = JSON.stringify(data);
  return AES.encrypt(newString, config.secretKey).toString();
}

/**
 * use to decrypt data
 * @method bsDecrypt
 */
export function bsDecrypt(data) {
  if (!data) {
    return data;
  }
  const newString = AES.decrypt(data, config.secretKey);
  return newString.toString(enc.Utf8);
}

/**
 * Set value in local storage
 * @method set
 */
export function setItem(key, value) {
  value = bsEncrypt(value);
  StorageService.setItem(key, value);
}

/**
 * Get value form local storage
 * @method get
 */

export const getItem = key => {
  const item = window.localStorage.getItem(key);
  if (item) {
    const loggedInUserData = bsDecrypt(JSON.parse(toString(item)));

    return loggedInUserData;
  }
};

/**
 * clear local storage
 * @method flush
 */
export function removeItem(key) {
  if (key != null && key !== undefined) {
    StorageService.removeItem(key);
  } else {
    StorageService.clear();
  }
}

/*
 *
 * clear all storage data
 * */
export function clear() {
  StorageService.clear();
}

const allMethods = { getItem, removeItem, setItem, clear };

export default allMethods;
