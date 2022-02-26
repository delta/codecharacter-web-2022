import { Client } from '@stomp/stompjs';

const url = 'ws://localhost:8000/ws';
const wsClient = new Client();
wsClient.brokerURL = url;
console.log('Connecting...');
const handleConnect = () => {
  console.log('Connected');
  wsClient.subscribe(
    '/notifs',
    message => {
      console.log(message.body);
    },
    { ack: 'client' },
  );
};

wsClient.onConnect = handleConnect;

export default wsClient;
