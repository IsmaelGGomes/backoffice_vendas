'use client'
import { HomeIcon, UsersIcon } from '@radix-ui/react-icons';
import { Home, LineChart, Package, ShoppingCart, Users } from 'lucide-react';
import {Badge} from "@/components/ui/badge";
import Link from 'next/link';
import React from 'react';

export function SideNav() {
    return (
        <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                    href="/"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                    <Home className="h-4 w-4" />
                    Dashboard
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                    <ShoppingCart className="h-4 w-4" />
                    Eventos
                    {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        6
                    </Badge> */}
                </Link>
                <Link
                    href="/categorias"
                    className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                >
                    <Package className="h-4 w-4" />
                    Categoria de Ingressos{" "}
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                    <Users className="h-4 w-4" />
                    Lotes de Ingresso
                </Link>
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                    <LineChart className="h-4 w-4" />
                    clientes
                </Link>
            </nav>
        </div>
    );
}
