import Contact from "../models/Contact.js";

export const createContactService = async (data) => {
    if(!data.email || !data.message){
        throw new Error("Dados invalidos");
    }

    const contact = await Contact.create(data);
    return contact;
}

export const getContactService = async () => {
    return await Contact.find().sort({createdAt: -1});
}