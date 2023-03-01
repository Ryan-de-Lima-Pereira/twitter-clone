import { PropsWithChildren } from "react"

const Body = (props: PropsWithChildren) => {
    return(
        <div className="flex flex-col pt-14 px-6 pb-[200px] mt-1">
            {props.children}
        </div>
    )
}

export default Body