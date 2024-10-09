import { retrieveMongooseKeysArr } from './retrieveMongooseObj.js';

export const parseSortBy = async (sortBy) => {
  const sortList = await retrieveMongooseKeysArr();

  if (sortList.includes(sortBy)) {
    return sortBy;
  }
  return '_id';
};

/**
 * 1) Создать fn retrieveMongooseObj.js которая будет возвращать массив ключей ✅
 *      с Mongoose Model
 * 2) Написать fn parseSortBy, которая будет получать массив ✅
 *      ключей с retieveMongooseObj и проверять валидность переданного
 *      значения сортировки в эту функцию, и возвращать либо его либо значение по умолчанию
 * 3) Дописать validateQuery с помощью этих fn ✅
 * 4) Используя aggregate дописать getAllEvents controller and service
 */
