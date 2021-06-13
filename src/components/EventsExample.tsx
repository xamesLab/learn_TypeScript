import React, {FC, useRef, useState} from 'react'

const EventsExample:FC = ()=>{
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e:React.DragEvent<HTMLDivElement>)=>{

    }

    const dragWithPreventHandler = (e:React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e:React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e:React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault()
        setIsDrag(false)
    }

    return(
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='управляемый'/>
            <input ref={inputRef} type="text" placeholder='неуправляемый'/>
            <button onClick={clickHandler}>to console</button>
            <div onDrag={dragHandler} draggable style={{background:'green', width:'100px', height:'100px', margin:'0.5rem' }}></div>
            <div 
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{background: isDrag?'blue':'green', width:'100px', height:'100px', margin:'0.5rem' }}></div>
        </div>
    )
}

export default EventsExample