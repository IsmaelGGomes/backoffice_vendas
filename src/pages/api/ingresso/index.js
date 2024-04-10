import { createCategoria, getCategoria } from "@/repo/categoria_ingresso.repo.mjs";
export default async function handler(req, res) {
    console.log("api/auth/signup");
    const method = req.method
    switch (method) {
        case 'POST':
            let { nome } = req.body;
            let new_user = { nome };
            try {
                let created = await createCategoria(new_user);
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
    /* if (req.method === 'POST') {
        let { nome } = req.body;
        let new_user = { nome };
        try {
            let created = await createCategoria(new_user);
            // let { nome } = created;
            res.status(201).send("Sucess");
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: err.message });
            return;
        }
    } else {
        res.status(405).send({ message: 'Método não aceito' });
    }
    if (req.method === 'GET') {
        try {
            let data = await createCategoria(new_user);
            // let { nome } = created;
            res.status(200).send(data);
        } catch (err) {
            console.error(err);
            res.status(500).send({ message: err.message });
            return;
        }
    } */
}