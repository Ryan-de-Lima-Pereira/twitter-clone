function Container(props: any) {
  return (
    <div className="flex flex-col max-h-full overflow-y-auto scroll-bar">{props.children}</div>
  )
}

export default Container