import { useState } from 'react';
import { RendererUtils } from '@codecharacter-2022/renderer';
import ReactAnsi from 'react-ansi';

export default function Terminal(): JSX.Element {
  const [log, setLog] = useState('');

  RendererUtils.setUpdateLogCallback((log: string) => {
    setLog(log);
  });

  return (
    <ReactAnsi
      style={{
        height: '100%',
        width: '100%',
      }}
      log={log}
      bodyStyle={{ height: '100%' }}
      logStyle={{ height: '100%' }}
      autoScroll={true}
      virtual
    />
  );
}
