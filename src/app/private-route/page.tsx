import Link from "next/link";
import { login, logout } from "./action";

export default function Page() {
    return (
        <div className="flex justify-center items-center mt-12">
            <button onClick={login} className="bg-green-500 rounded-md py-2 px-4 mx-4" >login</button>
            <button onClick={logout} className="bg-red-500 rounded-md py-2 px-4 mx-4">logout</button>
            <Link href="/private-route/dashboard" className="mx-4">dashboard</Link>
            <Link href="/private-route/settings" className="mx-4">settings</Link>
        </div>
    )
}