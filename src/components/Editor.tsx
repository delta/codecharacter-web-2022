import { useState } from 'react';
import * as Editor from '../types/Editor';
import AceEditor from 'react-ace';

import 'brace/mode/c_cpp';
import 'brace/mode/python';

import 'brace/theme/monokai';
import 'brace/theme/github';
import 'brace/theme/tomorrow';
import 'brace/theme/kuroir';
import 'brace/theme/twilight';
import 'brace/theme/xcode';
import 'brace/theme/textmate';
import 'brace/theme/solarized_dark';
import 'brace/theme/solarized_light';
import 'brace/theme/terminal';
import 'brace/theme/chaos';
import 'brace/theme/chrome';
import 'brace/theme/eclipse';
import 'brace/theme/dracula';

import 'brace/keybinding/emacs';
import 'brace/keybinding/vim';

export default function CodeEditor(props: Editor.Props): JSX.Element {
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize'));
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const [keyboardHandler, setKeyboardHandler] = useState(
    localStorage.getItem('keyboardHandler'),
  );

  const [enableBasicAutoComplete, setBasicAutoComplete] = useState(
    localStorage.getItem('enableBasicAutoComplete'),
  );

  const [enableSnippets, setSnippets] = useState(
    localStorage.getItem('enableSnippets'),
  );

  window.addEventListener('storage', () => {
    setFontSize(localStorage.getItem('fontSize'));
    setTheme(localStorage.getItem('theme'));
    setKeyboardHandler(localStorage.getItem('keyboardHandler'));
    setBasicAutoComplete(localStorage.getItem('enableBasicAutoComplete'));
    setSnippets(localStorage.getItem('enableSnippets'));
  });

  const { editorWidth, language } = props;

  return (
    <AceEditor
      mode={language}
      theme={theme}
      name="codeEditor"
      fontSize={Number(fontSize)}
      wrapEnabled={false}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutoCompletion:
          enableBasicAutoComplete === 'true' ? true : false,
        enableSnippets: enableSnippets === 'true' ? true : false,
      }}
      keyboardHandler={keyboardHandler !== 'default' ? keyboardHandler : ''}
      editorProps={{ $blockScrolling: true }}
      width={editorWidth.toString() + 'px'}
      height={'90vh'} // button panel above editor is 10vh
      //value={code}
      //onChange={updateCode}
      // commands={[
      //   {
      //     bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
      //     exec: () => {
      //       save(code);
      //     },
      //     name: 'Save',
      //   },
      //  ]}
    />
  );
}
