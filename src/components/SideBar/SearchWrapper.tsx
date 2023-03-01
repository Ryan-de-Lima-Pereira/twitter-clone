import { PropsWithChildren } from "react"

const SearchWrapper = (props: PropsWithChildren) => {
    return (
        <div className="py-2 px-6 w-[min(399px,100%)] fixed z-20 top-0 bg-primary max-h-14">
            {props.children}
        </div>
    )
}

export default SearchWrapper