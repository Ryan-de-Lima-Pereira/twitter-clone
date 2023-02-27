
const Topside = (props: React.PropsWithChildren) => {
    return(
        <div className="flex flex-col items-center lg:items-start">
            {props.children}
        </div>
    )
}

export default Topside