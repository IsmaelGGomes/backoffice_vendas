'use client'
import { Bell, Package2 } from "lucide-react";
import Dashboard from "./_dashboard/page"
import { SideNav } from "@/components/layout/side-nav";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Title } from "@/components/layout/title";


export default function Home() {
  return (
    <>
      <Title>Dashboard</Title>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          novo
        </div>
      </div>
    </>
  );
}
