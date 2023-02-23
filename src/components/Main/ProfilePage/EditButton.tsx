import Button from '../../Button/Button'

function EditButton(props: any) {
  const style: string = 'absolute top-[2vw] right-[7px] py-2 px-4 text-sm min-[320px]:top-[10px] min-[320px]:py-[10px] min-[320px]:px-[19px] min-[320px]:text-base'


  return (
    <Button outline={true} mod={style}>
        {props.children}
    </Button>
  )
}

export default EditButton