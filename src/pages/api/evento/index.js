import { createEvento, getEvento } from "@/repo/evento.repo.mjs";
export default async function handler(req, res) {
    const method = req.method
    switch (method) {
        case 'POST':
            let { nome, data, local, descricao } = req.body;
            let new_item = { nome, data, local, descricao };
            try {
                let created = await createEvento(new_item);
                // let { nome } = created;
                res.status(201).send("Sucess");
            } catch (error) {
                res.status(500).send("ERRO DA API");
            }
            break;
        case 'GET':
            try {
                let data = await getEvento();
                // let { nome } = created;
                res.status(200).json(data);
            } catch (error) {
                res.status(500).send("ERRO DA API");
            }
        default:
            res.status(500).send("ERRO DA API");
            break;
    }
}