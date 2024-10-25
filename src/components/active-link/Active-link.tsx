"use client"

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

type ActiveLinkProps = LinkProps & {
    children: React.ReactNode
}

export const ActiveLink = ({ href = "", children, ...rest }: ActiveLinkProps) => {
    const pathName = usePathname()
    const isActive = pathName === href.toString()

    return (
        <>
            <Link href={href} className={`${isActive ? "bg-slate-700" : ""} my-4 `} {...rest}>{children}</Link>
        </>
    )
}