
const Info = (props: React.PropsWithChildren) => {
    return(
        <div className="flex flex-col ml-3 items-start">
            {props.children}
        </div>
    )
}

export default Info