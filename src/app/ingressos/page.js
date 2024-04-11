'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Adicionar } from "./add"
import { useEffect, useState } from "react";
import axios from "axios";

export default function CategoriaEvento() {
    const [data, setData] = useState([]);
    const [isAdd, setIsAdd] = useState(false);

    const updateData = (newValue) => {
        setIsAdd(newValue)
    }

    useEffect(() => {
        axios.get("/api/ingresso")
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                console.error("Erro na comunicacao com o Backend")
            })
    }, [isAdd]);
    return (
        <div className="">
            <div className="my-2 mb-4 flex justify-end">
                <Adicionar updateData={updateData} setUpdate={isAdd} />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Quantidade</TableHead>
                            <TableHead>Lote</TableHead>
                            <TableHead>Categoria</TableHead>
                            <TableHead>Evento</TableHead>
                            <TableHead>Valor</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow >
                                <TableCell key={item}>{item.qtd}</TableCell>
                                <TableCell >{item.lote}</TableCell>
                                <TableCell >{item.categoria}</TableCell>
                                <TableCell >{item.evento}</TableCell>
                                <TableCell >{item.valor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
} 