import { PrismaClient } from '@prisma/client'

export async function createIngresso(req_ingresso) {
    let { qtd, lote_name, categoria_name, evento_name, valor } = req_ingresso;
    /* if (!nome_lote || !qtdMax || !qtdMin) {
        throw new Error('Campos obrigatorios não foram preenchidos')
    } */
    // console.log(req_ingresso)

    const prisma = new PrismaClient()
    return await prisma.ingresso.create({
        data: {
            qtd,
            lote: {
                connect: {
                    nome_lote: lote_name
                }
            },
            categoria: {
                connect: {
                    nome: categoria_name
                }
            },
            evento: {
                connect: {
                    nome: evento_name
                }
            },
            valor
        }
    });
}

export async function getIngresso() {
    const prisma = new PrismaClient()
    return await prisma.ingresso.findMany();
}