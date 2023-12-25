
const argv = require('yargs').argv;

const contacts = require("./contacts");

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "get":
            const contactByID = await contacts.getContactById(id);
            return console.log(contactByID);
        case "add":
            const newBook = await contacts.addContact({name, email, phone});
            return console.log(newBook);
       
        case "remove":
            const deleteContact = await contacts.removeContact(id);
            return console.log(deleteContact);
        default:
            console.warn('\x1B[31m Unknown action type!');   
    }
}

invokeAction(argv);


// invokeAction({action: "list"});
// invokeAction({action: "get", id: "qdggE76Jtbfd9eWJHrssH"});
// invokeAction({action: "remove", id: "tqLMsgUxDsHdMO6SWXJOd"});
// invokeAction({action: "add", name: "Kateryna Mala", email: "mala1234@gmail.com", phone:"(222) 000-1111"});


