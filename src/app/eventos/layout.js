import { Title } from "@/components/layout/title";

export default function categoriaLayout({ children }) {
    return (
        <>
            <Title>Eventos</Title>
            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                <div className="flex flex-col items-center gap-1 text-center">
                    {children}
                </div>
            </div>
        </>
    );
}