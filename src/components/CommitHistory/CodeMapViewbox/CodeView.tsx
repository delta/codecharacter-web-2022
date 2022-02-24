import { CodeRevision } from '@codecharacter-2022/client';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import c from 'react-syntax-highlighter/dist/esm/languages/prism/c';
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('c', c);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('java', java);

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
