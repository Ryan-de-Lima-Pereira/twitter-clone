function Container(props: any) {
  return (
    <div className="bg-primary">
        {props.children}
    </div>
  )
}

export default Container