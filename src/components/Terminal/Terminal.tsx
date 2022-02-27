import { useEffect, useRef, useState } from 'react';
import { RendererUtils } from '@codecharacter-2022/renderer';
import ReactAnsi from 'react-ansi';

export default function Terminal(): JSX.Element {
  const [log, setLog] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  RendererUtils.setUpdateLogCallback((log: string) => {
    setLog(log);
  });

  useEffect(() => {
    const element = document.querySelector('#log > div:nth-child(1) > div');
    if (
      element &&
      element?.scrollTop + element?.clientHeight + 50 > element?.scrollHeight
    ) {
      element?.scrollTo(0, element.scrollHeight);
    }
  }, [log]);

  return (
    <div
      ref={ref}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <ReactAnsi
        style={{
          height: '100%',
          width: '100%',
        }}
        log={log}
        bodyStyle={{ height: '100%', overflowY: 'auto' }}
        logStyle={{ height: '100%' }}
        autoScroll={true}
        virtual
      />
    </div>
  );
}
