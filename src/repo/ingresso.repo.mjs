import { PrismaClient } from '@prisma/client'

export async function createIngresso(req_ingresso) {
    let { qtd, lote_name, categoria_name, evento_name, cliente_name, valor } = req_ingresso;
    /* if (!nome_lote || !qtdMax || !qtdMin) {
        throw new Error('Campos obrigatorios não foram preenchidos')
    } */
    console.log(req_ingresso)

    const prisma = new PrismaClient()
    return await prisma.ingresso.create({
        data: {
            qtd,
            lote: {
                connect: {
                    id: lote_name
                }
            },
            categoria: {
                connect: {
                    id: categoria_name
                }
            },
            evento: {
                connect: {
                    id: evento_name
                }
            },
            clients: {
                connect: {
                    id: cliente_name
                }
            },
            valor
        }
    });
}

export async function getIngresso() {
    const prisma = new PrismaClient()
    return await prisma.ingresso.findMany({
        include: {
            lote: true,
            categoria: true,
            evento: true,
            clients: true
        }
    });
}

export async function getClientIngresso(id_cliente) {
    const prisma = new PrismaClient()
    const data =  await prisma.ingresso.findMany({
        where: id_cliente
    });
    return data
}