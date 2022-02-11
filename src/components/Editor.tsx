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

import { RootState } from '../redux/store';
import { updateUserCode, CodeAndLanguage } from '../redux/code';
import { useSelector, useDispatch } from 'react-redux';

export default function CodeEditor(props: Editor.Props): JSX.Element {
  // Retreiving only needed info from global store

  const userCode = useSelector(
    (state: RootState) => state.editorState.userCode,
  );
  const dispatch = useDispatch();

  // All editor settings set at localStorage
  // They are retrieved here and stored in variables

  const localStoreFontSize = localStorage.getItem('fontSize');
  const [fontSize, setFontSize] = useState(
    localStoreFontSize === null ? '16' : localStorage.getItem('fontSize'),
  );

  const localStoreTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(
    localStoreTheme === null ? 'monokai' : localStorage.getItem('theme'),
  );

  const localStoreKeyboardHandler = localStorage.getItem('keyboardHandler');
  const [keyboardHandler, setKeyboardHandler] = useState(
    localStoreKeyboardHandler === null
      ? 'default'
      : localStorage.getItem('keyboardHandler'),
  );

  const localStoreBasicAutoComplete = localStorage.getItem(
    'enableBasicAutoComplete',
  );
  const [enableBasicAutoComplete, setBasicAutoComplete] = useState(
    localStoreBasicAutoComplete === null
      ? 'true'
      : localStorage.getItem('enableBasicAutoComplete'),
  );

  const localStoreEnableSnippets = localStorage.getItem('enableSnippets');
  const [enableSnippets, setSnippets] = useState(
    localStoreEnableSnippets === null
      ? 'true'
      : localStorage.getItem('enableSnippets'),
  );

  // When editor settings are changed
  // editor attributes are changed

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
      wrapEnabled={true}
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
      height={'87vh'} // button panel above editor is 6.5vh + 6.5vh NavBar
      value={userCode}
      onChange={value => {
        const codeNlanguage: CodeAndLanguage = {
          currentUserCode: value,
          currentUserLanguage: language,
        };
        dispatch(updateUserCode(codeNlanguage));
      }}
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
