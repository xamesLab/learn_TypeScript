import React from 'react'

export enum CardVar{
    outlined='outlined',
    primary='primary'
}

interface CardProps {
    width: string,
    height: string,
    variant: CardVar,
    onClick: ()=>void
}

const Card:React.FC<CardProps> = ({width, height, children, variant, onClick})=>{
    return (
        <div style={{width, height, 
                        border: variant===CardVar.outlined? '1px solid red':'none',
                        background: variant===CardVar.primary? 'red':''}}>
            
            {children}
            <button onClick={onClick}>toggle</button>
        </div>
    )
}

export default Card

