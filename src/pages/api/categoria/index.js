import { createCategoria, getCategoria } from "@/repo/categoria_ingresso.repo.mjs";
export default async function handler(req, res) {
    console.log("api/auth/signup");
    const method = req.method
    switch (method) {
        case 'POST':
            let { nome } = req.body;
            let new_item = { nome };
            try {
                let created = await createCategoria(new_item);
                // let { nome } = created;
                res.status(201).send("Sucess");
            } catch (error) {
                res.status(500).send("ERRO DA API");
            }
            break;
        case 'GET':
            try {
                let data = await getCategoria();
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