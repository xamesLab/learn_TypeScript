import {FC, useState} from 'react'

const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_30m');

const WebSocketData:FC = () => {
    const [data, setData] = useState(0)
    let d;

    

    socket.onopen = function (){
        console.log('connect')
    }
    socket.onmessage = function (event) {
        d = JSON.parse(event.data)
        //console.log(d)
        let preData = d.k.c
        setData((Math.floor(preData*100))/100)
    }
    socket.onclose = function (){
        console.log('close')
    }
    function closeWs (){
        socket.close()
    }

    return(
        <div>
            {data}
            <button onClick={closeWs}>stop</button>
            <div className="fieldData" style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                position:'relative',
                width: '100px',
                height: '140px',
                backgroundColor: 'coral',
                padding:'10px'
            }}>
                <div style={{
                    position: 'absolute',
                    width:'100%',
                    borderBottom: "1px dashed green",
                    left: '0',
                    bottom:`${data%100+10}px`
                }}></div>
                <div className="candle" style={{backgroundColor:'green', height:`${data%100}px`, width:'13px'}}></div>
            </div>
        </div>
    )
}

export default WebSocketData