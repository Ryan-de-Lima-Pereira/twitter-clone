
const Item = (props: React.PropsWithChildren) => {
    return(
        <div className="py-3 px-4 first:pt-3 last:pb-4 first:hover:bg-secondary first:hover:rounded-t-full first:cursor-default hover:bg-gray hover:bg-opacity-20 cursor-pointer first:text-start last:text-start">
            {props.children}
        </div>
    )
}

export default Item