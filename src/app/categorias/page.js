'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Adicionar } from "./add"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon, TrashIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CategoriaEvento() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("/api/ingresso")
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                console.error("Erro na comunicacao com o Backend")
            })
    }, []);
    return (
        <div className="px-[560px] py-10">
            <div className="my-2 mb-4 flex justify-end">
                <Adicionar />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Nome Categoria</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow >
                                <TableCell key={item}>{item.id}</TableCell>
                                <TableCell >{item.nome}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
} 