const contacts = require("./contacts");
// const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.table(allContacts)
            break;
        case "get":

            break;
        case "add":

            break;
        case "remove":

            break;
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction({action: "list"})