import Ansi from 'ansi-to-react';
import { useState } from 'react';
import { RendererUtils } from '@codecharacter-2022/renderer';

export default function Terminal(): JSX.Element {
  const [log, setLog] = useState('');

  RendererUtils.setUpdateLogCallback((log: string) => {
    setLog(log);
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
      }}
    >
      <Ansi>{log}</Ansi>
    </div>
  );
}
