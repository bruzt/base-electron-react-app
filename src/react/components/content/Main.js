import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ipcRenderer } from 'electron';

export default function main() {

    const [messageState, setMessage] = useState('');

    useEffect(() => {

        init();

    }, []);

    function init(){

        ipcRenderer.on('mainSignal', (event, data) => {

            setMessage(data);
        });
    }

    function sendIpc(){

        ipcRenderer.send('rendererSignal', 'IPC funcionou');
    }

    return (
        <Container>

            <button type='button' onClick={sendIpc}>Testar IPC</button>
            <h5>{messageState}</h5>

        </Container>
    );
}

const Container = styled.div`
    display: flex;
    height: 500px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button: {
        padding: 5px;
    }

    h5: {
        margin-top: 10px;
    }
`;
