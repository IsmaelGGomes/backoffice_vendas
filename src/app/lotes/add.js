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
        nome_lote: yup.string()
            .required("Nome do lote obrigatório"),
        qtdMin: yup.number()
            .required("QTD mínima obrigatório")
            .min(10,"Quantidade mínima deve ser maior que 10"),
        qtdMax: yup.number()
            .required("QTD máxima obrigatório")
            .max(100,"Quantidade máxima deve ser menor que 100"),
            /* .min(yup.ref('qtdMin'),"QTD Máxima menor que a Mínima") */
    });

    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(RegisterSchema) });


    const onSubmit = async (data) => {
        axios.post('/api/lote', data)
            .then((response) => {
                toast.success('Lote cadastrado com sucesso!');
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
                            <DialogTitle>Adicionar Lote do Ingressos</DialogTitle>
                        </DialogHeader>
                        <div className="w-full max-w-sm mx-auto mt-6">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Nome do Lote</Label>
                                    <Input
                                        {...register("nome_lote")}
                                        type="text"
                                        autoComplete="nome_lote"
                                        placeholder="Ex: Lote promocional, Lote para vender tudo"
                                    />
                                </div>
                                {errors.nome_lote && <p className="mt-2 text-sm text-red-600" id="nome_lote-error">{errors.nome_lote.message}</p>}
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Qtd. Máxima</Label>
                                    <Input
                                        {...register("qtdMax")}
                                        type="number"
                                        autoComplete="qtdMax"
                                        placeholder="Quantidade Máxima de ingressos"
                                        inputMode="numeric"
                                    />
                                </div>
                                {errors.qtdMax && <p className="mt-2 text-sm text-red-600" id="qtdMax-error">{errors.qtdMax.message}</p>}
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Qtd. Mínima</Label>
                                    <Input
                                        {...register("qtdMin")}
                                        type="number"
                                        autoComplete="qtdMin"
                                        placeholder="Quantidade Mínima de ingressos"
                                        inputMode="numeric"

                                    />
                                </div>
                                {errors.qtdMin && <p className="mt-2 text-sm text-red-600" id="qtdMin-error">{errors.qtdMin.message}</p>}
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