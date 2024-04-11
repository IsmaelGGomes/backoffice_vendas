"use client"

import { useState } from "react";
// import axios from "axios";
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
            .required("Nome obrigatório"),
        email: yup.string()
            .required("E-mail Obrigatório")
            .email("E-mail inválido"),
        cpf: yup.string()
            .required("CPF obrigatório"),
        numero: yup.number()
            .required("Telefone obrigatório"),
    });

    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(RegisterSchema) });


    const onSubmit = async (data) => {
        axios.post('/api/cliente', data)
            .then((response) => {
                toast.success('Cliente cadastrado com sucesso!');
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
                            <DialogTitle>Adicionar Cliente</DialogTitle>
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
                                        placeholder="Nome do cliente"
                                    />
                                </div>
                                {errors.nome && <p className="mt-2 text-sm text-red-600" id="nome-error">{errors.nome.message}</p>}
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Email</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("email")}
                                        type="email"
                                        autoComplete="email"
                                        placeholder="Email do cliente"
                                    />
                                </div>
                                {errors.email && <p className="mt-2 text-sm text-red-600" id="email-error">{errors.email.message}</p>}
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">CPF</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("cpf")}
                                        type="text"
                                        autoComplete="cpf"
                                        placeholder="Nome do cliente"
                                    />
                                </div>
                                {errors.cpf && <p className="mt-2 text-sm text-red-600" id="cpf-error">{errors.cpf.message}</p>}
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Número</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("numero")}
                                        type="number"
                                        autoComplete="numero"
                                        placeholder="Nome do cliente"
                                    />
                                </div>
                                {errors.numero && <p className="mt-2 text-sm text-red-600" id="numero-error">{errors.numero.message}</p>}
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