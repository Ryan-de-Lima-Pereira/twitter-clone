import Item from './Item'
import Title from './Title'
import React from 'react'

interface Props {
    title: string,
    elements: React.ReactNode[],
}


const List = (props: Props) => {
    return(
        <div className='flex flex-col bg-secondary rounded-xl mb-4'>
            <Item>
                <Title>{props.title}</Title>
            </Item>

            {props.elements.map((element, index) => {
                return <Item key={index}> {element} </Item>
            })}

        </div>
    )
}

export default List