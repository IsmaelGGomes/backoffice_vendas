import { createIngresso, getIngresso } from "@/repo/ingresso.repo.mjs";
export default async function handler(req, res) {
    console.log("api/auth/signup");
    const method = req.method
    switch (method) {
        case 'POST':
            let { qtd, lote_name, categoria_name, evento_name, valor } = req.body;
            let new_item = { qtd, lote_name, categoria_name, evento_name, valor };
            // console.log(new_item);
            try {
                let created = await createIngresso(new_item);
                // let { nome } = created;
                res.status(201).send("Sucess");
            } catch (error) {
                res.status(500).send("ERRO DA API");
            }
            break;
        case 'GET':
            try {
                let data = await getIngresso();
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