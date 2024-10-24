import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>dashboard</h1>
            <Link href="/private-route">voltar</Link>
        </div>
    )
}