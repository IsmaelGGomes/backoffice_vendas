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
        axios.get("/api/cliente")
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
                            <TableHead>Nome</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>CPF</TableHead>
                            <TableHead>Número</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow >
                                <TableCell key={item}>{item.nome}</TableCell>
                                <TableCell >{item.email}</TableCell>
                                <TableCell >{item.cpf}</TableCell>
                                <TableCell >{item.numero}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
} 