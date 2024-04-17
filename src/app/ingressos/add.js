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
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

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
        cliente_name: yup.string()
            .required("Cliente obrigatório"),
    });

    const [open, setOpen] = useState(false);
    const [lote, setLote] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [evento, setEvento] = useState([]);
    const [cliente, setCliente] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
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
        axios.get("/api/evento")
            .then((res) => {
                setEvento(res.data);
            })
            .catch(() => {
                console.error("Erro na comunicacao com o Backend")
            })
        axios.get("/api/categoria")
            .then((res) => {
                setCategoria(res.data);
            })
            .catch(() => {
                console.error("Erro na comunicacao com o Backend")
            })
        axios.get("/api/cliente")
            .then((res) => {
                setCliente(res.data);
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
                console.error(error.message);
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
                            <DialogTitle>Adicionar Ingressos</DialogTitle>
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
                            <div className="space-x-4 flex flex-row">
                                <div className="flex flex-col">
                                    <Label htmlFor="name" className="mb-2">Lote</Label>
                                    <select
                                        className="border border-gray-300 rounded-lg block p-2 bg-white shadow w-[180px]"
                                        {...register("lote_name")}
                                    >
                                        <option selected disabled>Selecione um lote</option>
                                        {lote.map((item) => (
                                            <option value={item.id}>{item.nome_lote}</option>
                                        ))}
                                    </select>
                                    {errors.lote_name && <p className="mt-2 text-sm text-red-600" id="lote_name-error">{errors.lote_name.message}</p>}
                                </div>
                                <div className="flex flex-col">
                                    <Label htmlFor="name" className="mb-2">Categoria</Label>

                                    <select
                                        className="border border-gray-300 rounded-lg block p-2 bg-white shadow w-[180px]"
                                        {...register("categoria_name")}
                                    >
                                        <option selected disabled className="">Selecione uma Categoria</option>
                                        {categoria.map((item) => (
                                            <option value={item.id} className="text-black">{item.nome}</option>
                                        ))}
                                    </select>
                                    {errors.categoria_name && <p className="mt-2 text-sm text-red-600" id="categoria_name-error">{errors.categoria_name.message}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="w-full space-x-4 mt-6 flex flex-row">
                            <div className="flex flex-col">
                                <Label htmlFor="selectField" className="mb-2">Cliente</Label>
                                <select  {...register("cliente_name")} className="border border-gray-300 rounded-lg block p-2 bg-white shadow w-[180px] ">
                                    <option selected disabled >Selecione um Cliente</option>
                                    {cliente.map((item) => (
                                        <option value={item.id}>{item.nome}</option>
                                    ))}
                                </select>
                                {errors.cliente_name && <p className="mt-2 text-sm text-red-600" id="cliente_name-error">{errors.evento_name.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <Label htmlFor="selectField" className="mb-2">Evento</Label>
                                <select  {...register("evento_name")} className="border border-gray-300 rounded-lg block p-2 bg-white shadow w-[180px] ">
                                    <option selected disabled >Selecione um Evento</option>
                                    {evento.map((item) => (
                                        <option value={item.id}>{item.nome}</option>
                                    ))}
                                </select>
                                {errors.evento_name && <p className="mt-2 text-sm text-red-600" id="evento_name-error">{errors.evento_name.message}</p>}
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto mt-6">
                            <div className="">
                                <Label htmlFor="name">Valor</Label>
                                {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                <Input
                                    {...register("valor")}
                                    type="number"
                                    autoComplete="valor"
                                    placeholder="Quantidade de ingressos"
                                />
                            </div>
                            {errors.valor && <p className="mt-2 text-sm text-red-600" id="evento_name-error">{errors.valor.message}</p>}
                        </div>
                        <DialogFooter className="mt-8">
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