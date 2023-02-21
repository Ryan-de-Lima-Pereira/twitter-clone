import JosephBanner from '../../../img/JosephBanner.jpg'
 

function Banner(props: any) {
  return (
    <div className="shrink-0 w-full h-[min(33vw,200px)] bg-twitter relative">
      <img src={JosephBanner} alt="Banner" />
      {props.children}
      </div>
  )
}

export default Banner