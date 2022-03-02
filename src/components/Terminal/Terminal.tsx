import { useState } from 'react';
import { RendererUtils } from '@codecharacter-2022/renderer';
import { LazyLog, ScrollFollow } from 'react-lazylog';

export default function Terminal(): JSX.Element {
  const [log, setLog] = useState(
    'No log available. Please run a game to see the log.',
  );

  RendererUtils.setUpdateLogCallback((log: string) => {
    setLog(log.replace(/\u001b\[K/g, ''));
  });

  return (
    <ScrollFollow
      startFollowing={true}
      render={({ follow, onScroll }) => (
        <LazyLog
          text={log}
          selectableLines
          follow={follow}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onScroll={onScroll}
          style={{
            backgroundColor: '#002b36',
          }}
          stream
        />
      )}
    />
  );
}
