import { createLote, getLote } from "@/repo/lote_ingresso.repo.mjs";
export default async function handler(req, res) {
    const method = req.method
    switch (method) {
        case 'POST':
            let { nome_lote, qtdMax, qtdMin } = req.body;
            let new_item = { nome_lote, qtdMax, qtdMin };
            try {
                let created = await createLote(new_item);
                // let { nome } = created;
                res.status(201).send("Sucess");
            } catch (error) {
                res.status(500).send("ERRO DA API");
            }
            break;
        case 'GET':
            try {
                let data = await getLote();
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