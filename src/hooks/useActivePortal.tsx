import { createContext, useContext, useEffect, useState } from "react"

type Falsy = null | undefined

const ActivePortalContext = createContext<ReturnType<typeof useState<string | Falsy>> | Falsy>(null)

interface Props {
    children?: React.ReactNode
}

export const ActivePortalProvider = ({ ...props }: Props) => {
    const activePortal = useState<string | Falsy>(null)

    const [ _, setActivePortal ] = activePortal
    const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setActivePortal(null)
        }
    }

    useEffect(() => {
        window.addEventListener("keyup", handleEscapeKey)

        return () => window.removeEventListener("keyup", handleEscapeKey)
    }, [])

    return (
        <ActivePortalContext.Provider value={activePortal}>
            {props.children}
        </ActivePortalContext.Provider>
    )
}

export default function useActivePortal() {
    const ctx = useContext(ActivePortalContext)

    if (!ctx) throw new Error("No context found for useActivePortal")

    return ctx
}