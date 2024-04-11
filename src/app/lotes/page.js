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
        axios.get("/api/lote")
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
                            <TableHead>Nome Lote</TableHead>
                            <TableHead>QTD Máxima</TableHead>
                            <TableHead>QTD Mínima</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow >
                                <TableCell key={item}>{item.nome_lote}</TableCell>
                                <TableCell >{item.qtdMax}</TableCell>
                                <TableCell >{item.qtdMin}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
} 