interface Props {
    outline: boolean,
    mod: string,
    children?: React.ReactNode
}

function Button(props: Props) {
    const outline: boolean = props.outline

    const style = {
        bg: outline ? 'bg-none' : 'bg-twitter',
        color: outline ? 'text-twitter' : 'text-white',
        border: outline ? 'border-solid border border-twitter' : 'border-none',
        hover: outline ? 'hover:bg-twitter-dark-hover' : 'hover:bg-twitter-light-hover',
        default: 'p-4 rounded-3xl font-bold text-base cursor-pointer',
        mod: props.mod
    }

    const getStyle:string = style.bg + ' ' + style.color + ' ' + style.border + ' ' + style.hover + ' ' + style.default + ' ' + style.mod;

    return (
        <button className={getStyle}>{props.children}</button>
    )
}

export default Button