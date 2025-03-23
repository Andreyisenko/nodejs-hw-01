import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  const contList = await readContacts();
  contList.pop();
  await writeContacts(contList);
};

removeLastContact();
