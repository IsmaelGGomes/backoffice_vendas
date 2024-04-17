'use client'
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
      <div className="py-10 px-10 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <Dashboard />
      </div>
    </>
  );
}
