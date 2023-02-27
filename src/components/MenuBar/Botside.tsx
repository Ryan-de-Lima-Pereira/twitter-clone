const Botside = (props: React.PropsWithChildren) => {
    return(
        <div className="flex flex-row mt-5 items-center justify-center rounded-full hover:bg-gray hover:bg-opacity-20 lg:p-2 cursor-pointer">
            {props.children}
        </div>
    )
}

export default Botside