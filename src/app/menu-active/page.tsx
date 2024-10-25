import { ActiveLink } from "@/components/active-link/Active-link";

export default function Page() {
    return (
        <>
            <menu className="flex flex-col text-slate-900 bg-slate-50 w-[40%] h-screen pl-4">
                <ActiveLink href="/sua-rota">Home</ActiveLink>
                <ActiveLink href="/sua-rota">Rotas privadas</ActiveLink>
            </menu>
        </>
    )
}