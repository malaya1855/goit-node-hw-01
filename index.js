const argv = require("yargs").argv;
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "get":
      const contactByID = await contacts.getContactById(id);
      return console.table(contactByID);
    case "add":
      const newBook = await contacts.addContact({ name, email, phone });
      return console.table(newBook);

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.table(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
