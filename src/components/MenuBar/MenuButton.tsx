
const MenuButton = (props: React.PropsWithChildren) => {
    return(
        <button className="flex flex-row [&_span]:hidden [&_span]:ml-5 [&_span]:text-xl [&_span]:lg:inline p-2 [&+button]:mt-4 [&+button:last-child]:mt-8  [&+button:last-child]:w-10 [&+button:last-child]:h-10 [&+button:last-child_span]:hidden [&+button:last-child_span]:lg:inline [&+button:last-child]:lg:w-full [&+button:last-child]:lg:h-auto rounded-full hover:bg-gray hover:bg-opacity-20 lg:pr-4 [&_svg]:active:fill-white font-bold">
            {props.children}
        </button>
    )
}

export default MenuButton