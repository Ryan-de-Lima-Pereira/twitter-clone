interface Props {
    children?: React.ReactNode[] | React.ReactNode
}

const Container = (props: Props) => {
    return(
        <div "className="flex flex-col bg-secondary rounded-xl>
            {props.children}
        </div>
    )
}

export default Container