"use client"

import { useState } from "react";
// import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export  function Adicionar() {
    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState("");
    const [pagina, setPagina] = useState("");
    const [autor, setAutor] = useState("");
    const [open, setOpen] = useState(false);
    // const router = useRouter();

    /* const salvar = async () => {
        const livro = { titulo, preco, pagina, autor };
        try {
            let res = await axios.post("/api/livros", livro);
            // router.push("/livros");
            setOpen(false)
            updateData(!setUpdate)
        } catch (err) {
            console.error("Erro na requisicao");
        }
    } */

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button ><PlusIcon className="mr-2" />Adicionar</Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Adicionar Categoria de Ingressos</DialogTitle>
                    </DialogHeader>
                    <div className="w-full max-w-sm mx-auto">
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <Label htmlFor="name">Categoria</Label>
                                <Input onChange={(e) => setTitulo(e.target.value)} id="name" placeholder="Ex: Vip, Meia, Inteira" />
                            </div>
                        </div>
                    </div>
                    <DialogFooter className="mt-4">
                        <DialogClose asChild>
                            <Button variant="outline" type="button" className="" >Cancelar</Button>
                        </DialogClose>
                        <Button onClick={() => salvar()}>Salvar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}