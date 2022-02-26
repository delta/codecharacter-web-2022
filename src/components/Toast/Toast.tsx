import { Toaster } from 'react-hot-toast';

const Toast: React.FunctionComponent = () => {
  return (
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
  );
};

export default Toast;
