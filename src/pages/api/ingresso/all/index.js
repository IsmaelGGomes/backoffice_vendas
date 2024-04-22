import { getItem} from "@/repo/ingresso.repo.mjs";
export default async function handler(req, res) {
    const method = req.method
    switch (method) {
        case 'GET':
            try {
                let data = await getItem();
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