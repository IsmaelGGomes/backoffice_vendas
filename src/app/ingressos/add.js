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
        qtd: yup.string()
            .required("Quantidade obrigatório"),
        lote_name: yup.string()
            .required("Quantidade obrigatório"),
        categoria_name: yup.string()
            .required("Quantidade obrigatório"),
        evento_name: yup.string()
            .required("Quantidade obrigatório"),
        valor: yup.number()
            .required("Quantidade obrigatório"),
    });

    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(RegisterSchema) });


    const onSubmit = async (data) => {
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
                                        type="text"
                                        autoComplete="qtd"
                                        placeholder="Quantidade de ingressos"
                                    />
                                </div>
                                {errors.qtd && <p className="mt-2 text-sm text-red-600" id="qtd-error">{errors.qtd.message}</p>}
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto mt-6">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Lote</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("lote_name")}
                                        type="text"
                                        autoComplete="lote_name"
                                        placeholder="Quantidade de ingressos"
                                    />
                                </div>
                                {errors.lote_name && <p className="mt-2 text-sm text-red-600" id="lote_name-error">{errors.lote_name.message}</p>}
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto mt-6">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Categoria do Ingresso</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("categoria_name")}
                                        type="text"
                                        autoComplete="categoria_name"
                                        placeholder="Quantidade de ingressos"
                                    />
                                </div>
                                {errors.categoria_name && <p className="mt-2 text-sm text-red-600" id="categoria_name-error">{errors.categoria_name.message}</p>}
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto mt-6">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Tipo de evento</Label>
                                    {/* <Input id="name" placeholder="Ex: Vip, Meia, Inteira" /> */}
                                    <Input
                                        {...register("evento_name")}
                                        type="text"
                                        autoComplete="evento_name"
                                        placeholder="Quantidade de ingressos"
                                    />
                                </div>
                                {errors.evento_name && <p className="mt-2 text-sm text-red-600" id="evento_name-error">{errors.evento_name.message}</p>}
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto mt-6">
                            <div className="space-y-6">
                                <div className="space-y-1">
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