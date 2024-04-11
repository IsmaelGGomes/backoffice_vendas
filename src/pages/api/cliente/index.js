import { createCliente, getCliente } from "@/repo/cliente.repo.mjs";
export default async function handler(req, res) {
    const method = req.method
    switch (method) {
        case 'POST':
            let { nome, email, cpf, numero } = req.body;
            let new_item = { nome, email, cpf, numero };
            try {
                let created = await createCliente(new_item);
                // let { nome } = created;
                res.status(201).send("Sucess");
            } catch (error) {
                res.status(500).send("ERRO DA API");
            }
            break;
        case 'GET':
            try {
                let data = await getCliente();
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