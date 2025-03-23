import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
const generateContacts = async (number) => {
  const contList = await readContacts();

  const newList = Array(number).fill(0).map(createFakeContact);
  await writeContacts([...contList, ...newList]);
};

generateContacts(5);
