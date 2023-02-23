function Container(props: any) {
  return (
    <div className="flex flex-col max-h-full overflow-y-visible">{props.children}</div>
  )
}

export default Container