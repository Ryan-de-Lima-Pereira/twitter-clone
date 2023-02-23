function Warpper(props: any) {
  return (
    <div className="flex justify-center h-full max-w-7xl my-0 mx-auto">
        {props.children}
    </div>
  )
}

export default Warpper