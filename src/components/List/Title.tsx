import { PropsWithChildren } from "react"

const Title = (props: PropsWithChildren) => {
    return(
        <span className="font-bold text-lg">
            {props.children}
        </span>
    )
}

export default Title