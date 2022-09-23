const fs = require('fs').promises;
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");

async function listContacts() {
  // ...твой код
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
}

async function getContactById(contactId) {
  // ...твой код
}

async function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  // ...твой код
}

const contacts = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};

module.exports = contacts;