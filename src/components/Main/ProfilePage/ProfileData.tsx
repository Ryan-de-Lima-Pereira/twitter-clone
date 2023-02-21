function ProfileData(props: any) {
  return (
    <div className="flex flex-col relative pt-[min(12vw,72px)] pb-0 px-4 text-start">{props.children}</div>
  )
}

export default ProfileData