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
        setData(d.k.c)
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
        </div>
    )
}

export default WebSocketData