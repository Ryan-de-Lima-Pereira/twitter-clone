const ProfileData = (props: React.PropsWithChildren) => {
    return(
        <div className="hidden lg:flex lg:flex-col lg:ml-2 lg:text-base">
            {props.children}
        </div>
    )
}

export default ProfileData