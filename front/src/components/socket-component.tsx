'use client'

import { useEffect } from "react";
import { io } from 'socket.io-client';

export default function SocketComponent() {

    useEffect(() => {
        const socket = io('http://localhost:8080');

        socket.on('init', (data: any) => {
            console.log('Datos de usuarios recibidos:', data);
            // Aquí puedes manejar la lógica para procesar los datos recibidos
        });

        return () => {
            socket.disconnect();
        };
    }, []);


    return (
        <div>socket-component</div>
    )
}
