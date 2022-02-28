import { Toaster } from 'react-hot-toast';
import { Websocket } from '../Websocket/Websocket';

const Toast: React.FunctionComponent = () => {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#242a3b',
            color: '#ffffff',
            fontFamily: 'Montserrat',
            borderRadius: '5px',
          },
        }}
      />
      <Websocket />
    </>
  );
};

export default Toast;
