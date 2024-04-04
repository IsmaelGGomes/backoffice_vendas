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

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon, TrashIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export  function CategoriaEvento() {
    return (
        <div className="rounded-md border">
            <Table>
                {/* <TableCaption>Listagem de Livros</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead>Titulo</TableHead>
                        <TableHead>Autor</TableHead>
                        <TableHead>Paginas</TableHead>
                        <TableHead className="text-right">Preço</TableHead>
                        <TableHead className="text-center">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow >
                        <TableCell>items adicionadors</TableCell>
                        <TableCell>items adicionadors</TableCell>
                        <TableCell className="">items adicionadors</TableCell>
                        <TableCell className="text-right">items adicionadors</TableCell>
                        <TableCell className="text-center items-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <DotsHorizontalIcon className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="flex flex-col">
                                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <AlertDialog>
                                        <AlertDialogTrigger>
                                            <DropdownMenuItem className="cursor-pointer" onSelect={(e) => e.preventDefault()}>
                                                <TrashIcon className="h-4 w-4 mr-2" />
                                                Excluir
                                            </DropdownMenuItem>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Deseja realmente excluir esse item?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    A ação tomada não poderá ser revertida
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                <AlertDialogAction >Continuar</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>

                                    <DropdownMenuItem
                                        className="cursor-pointer"
                                        /* onSelect={(e) => e.preventDefault()}
                                        onClick={() => { setModal(!list_modal) }} */
                                    >
                                        <EyeOpenIcon className="h-4 w-4 mr-2" />Visualizar
                                    </DropdownMenuItem>
                                    {/* {list_modal && (
                                        <Listagem
                                            data_id={item._id}
                                            open={list_modal}
                                            onOpenChange={setModal}
                                            updateData={updateData}
                                            setUpdate={isAdd}
                                        />
                                    )} */}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
} 