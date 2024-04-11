"use client"

import { useEffect, useState } from "react";
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

export function Adicionar({ updateData, setUpdate }) {
    const RegisterSchema = yup.object().shape({
        qtd: yup.number()
            .required("Campo obrigatório"),
        lote_name: yup.string()
            .required("Lote obrigatório"),
        categoria_name: yup.string()
            .required("Categoria obrigatório"),
        evento_name: yup.string()
            .required("Evento obrigatório"),
        valor: yup.number()
            .required("Valor obrigatório"),
    });

    const [open, setOpen] = useState(false);
    const [lote, setLote] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [evento, setEvento] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(RegisterSchema)
    });


    useEffect(() => {
        axios.get("/api/lote")
            .then((res) => {
                setLote(res.data);
            })
            .catch(() => {
                console.error("Erro na comunicacao com o Backend")
            })
    }, []);
    useEffect(() => {
        axios.get("/api/categoria")
            .then((res) => {
                setCategoria(res.data);
            })
            .catch(() => {
                console.error("Erro na comunicacao com o Backend")
            })
    }, []);
    useEffect(() => {
        axios.get("/api/evento")
            .then((res) => {
                setEvento(res.data);
            })
            .catch(() => {
                console.error("Erro na comunicacao com o Backend")
            })
    }, []);

    const onSubmit = async (data) => {
        console.log(data)
        axios.post('/api/ingresso', data)
            .then((response) => {
                toast.success('Ingresso cadastrado com sucesso!');
                setOpen(false)
                updateData(!setUpdate)
                // router.replace('/auth/signin');
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message || 'Erro ao cadastrar !');
            })
    };

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button ><PlusIcon className="mr-2" />Adicionar</Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>Adicionar Categoria de Ingressos</DialogTitle>
                        </DialogHeader>
                        <div className="w-full max-w-sm mx-auto mt-6">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Quantidade</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("qtd")}
                                        type="number"
                                        autoComplete="qtd"
                                        placeholder="Quantidade de ingressos"
                                    />
                                </div>
                                {errors.qtd && <p className="mt-2 text-sm text-red-600" id="qtd-error">{errors.qtd.message}</p>}
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto mt-6">
                            <div className="space-x-2 flex flex-row">
                                <div>
                                    <Label htmlFor="name">Lote</Label>
                                    <Select {...register("lote_name")}>

                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Selecione o lote" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {lote.map((item) => (
                                                    <SelectItem value={item.id}>{item.nome_lote}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.lote_name && <p className="mt-2 text-sm text-red-600" id="lote_name-error">{errors.lote_name.message}</p>}
                                </div>
                                <div className="">
                                    <Label htmlFor="name">Categoria</Label>
                                    <Select
                                        {...register("categoria_name")}>

                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Selecione a categoria" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectGroup>
                                                    {categoria.map((item) => (
                                                        <SelectItem value={item.id}>{item.nome}</SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.categoria_name && <p className="mt-2 text-sm text-red-600" id="categoria_name-error">{errors.categoria_name.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="w-full  space-x-1 mt-6 flex flex-row">
                            <div className="">
                                <div className="">
                                    <Label htmlFor="name">Valor</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("valor")}
                                        type="text"
                                        autoComplete="valor"
                                        placeholder="Quantidade de ingressos"
                                    />
                                </div>
                                {errors.valor && <p className="mt-2 text-sm text-red-600" id="valor-error">{errors.valor.message}</p>}
                            </div>
                            <div className="">
                                <Label htmlFor="name">Evento</Label>
                                <Select
                                    {...register("evento_name")}>

                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Selecione o evento" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectGroup>
                                                {evento.map((item) => (
                                                    <SelectItem value={item.id}>{item.nome}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {errors.evento_name && <p className="mt-2 text-sm text-red-600" id="evento_name-error">{errors.evento_name.message}</p>}
                            </div>
                        </div>
                        <DialogFooter className="mt-4">
                            <DialogClose asChild>
                                <Button variant="outline" type="button" className="">Cancelar</Button>
                            </DialogClose>
                            <Button type="submit">Salvar</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}