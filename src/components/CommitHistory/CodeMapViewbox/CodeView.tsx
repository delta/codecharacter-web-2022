import { CodeRevision } from '@codecharacter-2022/client';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type PropsType = {
  code: CodeRevision['code'];
  codeLang: string;
};

export default function CodeView(props: PropsType): JSX.Element {
  return (
    <SyntaxHighlighter
      language={props.codeLang}
      style={atomDark}
      showLineNumbers={props.code != '' ? true : false}
    >
      {props.code}
    </SyntaxHighlighter>
  );
}
