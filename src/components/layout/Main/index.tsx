import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}


const Main: FC<Props> = ({children}) => {
    return (
        <main className="p-4">
            {children}
        </main>
    )
}
export { Main }