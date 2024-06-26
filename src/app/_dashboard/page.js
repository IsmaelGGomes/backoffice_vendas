'use client'
import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DollarSign,
    Users,
} from "lucide-react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
export default function Dashboard({ children }) {
    const [ingresso, SetIngresso] = useState([])
    const [clientIngresso, SetClientIngresso] = useState([])

    useEffect(() => {
        axios.get("/api/ingresso")
            .then((res) => {
                SetIngresso(res.data);
            })
            .catch(() => {
                console.error("Erro na comunicacao com o Backend")
            })
        axios.get("/api/ingresso/all")
            .then((res) => {
                SetClientIngresso(res.data);
            })
            .catch(() => {
                console.error("Erro na comunicacao com o Backend")
            })
    }, []);

    console.log(clientIngresso)

    const total_valor = ingresso.reduce((sum, product) => sum + product.valor, 0);

    const contagem_ingresso = ingresso.reduce((sum, product) => sum + product.qtd, 0);

    return (
        <>
            <div className="flex flex-row items-center gap-1 text-center">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    <Card x-chunk="dashboard-01-chunk-0">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Valor Vendido
                            </CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$ {total_valor}</div>
                            <p className="text-xs text-muted-foreground">
                                Total de ingressos vendidos
                            </p>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-1">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Ingressos
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{contagem_ingresso}</div>
                            <p className="text-xs text-muted-foreground">
                                Qtd. Ingressos vendidos
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card x-chunk="dashboard-01-chunk-5">
                        <CardHeader>
                            <CardTitle className="text-xl">Clientes x Ingressos</CardTitle>
                            <CardDescription>Qtd de ingressos comprados por clientes</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-8">
                            {clientIngresso.map((item) => {
                                return (
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                            <AvatarFallback><Users className="h-4 w-4 text-muted-foreground" /></AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                {item.nome}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {item.email}
                                            </p>
                                        </div>
                                        <div className="ml-auto font-semibold">{item._count.Ingresso}</div>
                                    </div>
                                )
                            })}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
