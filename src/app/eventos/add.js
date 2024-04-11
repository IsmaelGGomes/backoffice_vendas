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
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

export function Adicionar({ updateData, setUpdate }) {
    const RegisterSchema = yup.object().shape({
        nome: yup.string()
            .required("Nome do Evento obrigatório"),
        data: yup.date()
            .required("Data obrigatório"),
        local: yup.string()
            .required("Local do evento obrigatório"),
        descricao: yup.string()
            .required("Descrição obrigatório"),
    });

    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(RegisterSchema) });


    const onSubmit = async (data) => {
        axios.post('/api/evento', data)
            .then((response) => {
                toast.success('Evento cadastrado com sucesso!');
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
                            <DialogTitle>Adicionar Evento</DialogTitle>
                        </DialogHeader>
                        <div className="w-full max-w-sm mx-auto mt-6">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Nome</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("nome")}
                                        type="text"
                                        autoComplete="nome"
                                        placeholder="Nome do evento"
                                    />
                                </div>
                                {errors.nome && <p className="mt-2 text-sm text-red-600" id="nome-error">{errors.nome.message}</p>}
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Data</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("data")}
                                        type="date"
                                        autoComplete="data"
                                    />
                                </div>
                                {errors.data && <p className="mt-2 text-sm text-red-600" id="data-error">{errors.data.message}</p>}
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Local</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("local")}
                                        type="text"
                                        autoComplete="local"
                                        placeholder="Local do evento"
                                    />
                                </div>
                                {errors.local && <p className="mt-2 text-sm text-red-600" id="local-error">{errors.local.message}</p>}
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Descrição</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("descricao")}
                                        type="text"
                                        autoComplete="descricao"
                                        placeholder="Descrição do evento"
                                    />
                                </div>
                                {errors.descricao && <p className="mt-2 text-sm text-red-600" id="descricao-error">{errors.descricao.message}</p>}
                            </div>
                        </div>
                        <DialogFooter className="mt-4">
                            <DialogClose asChild>
                                <Button variant="outline" type="button" className="" >Cancelar</Button>
                            </DialogClose>
                            <Button type="submit">Salvar</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}