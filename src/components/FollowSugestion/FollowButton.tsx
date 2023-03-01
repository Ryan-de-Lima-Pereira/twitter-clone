
const FollowButton = (props: React.PropsWithChildren) => {
    return(
        <button className="py-2 px-4 bg-none text-twitter border-solid border border-twitter hover:bg-twitter-dark-hover rounded-3xl font-bold text-base cursor-pointer">
            {props.children}
        </button>
    )
}

export default FollowButton