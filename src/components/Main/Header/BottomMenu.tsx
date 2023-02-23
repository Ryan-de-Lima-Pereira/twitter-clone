function BottomMenu(props: any) {
  return (
    <div className="flex flex-row justify-between z-50 fixed bottom-0 left-0 w-full bg-primary border-t border-solid border-outline py-2 
    px-[min(46px,max(10vw,10px))] min-[500px]:hidden">
        {props.children}
    </div>
  )
}

export default BottomMenu