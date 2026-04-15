import { createContactService, getContactService } from "../services/contact.service.js";

export const createContact = async (req, res) => {
    try {
        const contact = await createContactService(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({error: "Erro ao salvar contato"});
    }
}

export const getContacts = async (req, res) => {
    try {
        const contacts = await getContactService();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar contatos"});
    }
}