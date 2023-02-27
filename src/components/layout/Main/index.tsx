import { FC, ReactNode } from "react"
import "./style.scss"

type Props = {
    children: ReactNode
}


const Main: FC<Props> = ({children}) => {
    return (
        <main>
            {children}
        </main>
    )
}
export { Main }