function Header(props: any) {
  return (
    <div className="flex items-center z-10 sticky w-full top-0 bg-primary text-left pt-2 pr-0 pb-[9px] pl-[13px] border-b-outline border-b border-solid">
      {props.children}
    </div>
  )
}

export default Header