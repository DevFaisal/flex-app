import { v4 as uuidv4 } from 'uuid';
/**
 * Generates a random number between min and max using UUID.
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive).
 * @returns {number} A random number between min and max.
 */

const getRandomNumberFromUUID = (min = 5000, max = 12000) => {
  const uuid = uuidv4().replace(/-/g, '');
  const hexPart = uuid.slice(0, 8);
  const intValue = parseInt(hexPart, 16);
  const range = max - min + 1;
  return min + (intValue % range);
};

export default getRandomNumberFromUUID;
