function Container(props: any) {
  return (
    <div className="bg-primary w-full">
        {props.children}
    </div>
  )
}

export default Container