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

import { RootState } from '../store/store';
import { updateUserCode, CodeAndLanguage } from '../store/editor/code';
import { useSelector, useDispatch } from 'react-redux';

export default function CodeEditor(props: Editor.Props): JSX.Element {
  // Retreiving only needed info from global store

  const userCode = useSelector(
    (state: RootState) => state.persistReducer.editorState.userCode,
  );

  const fontSize = useSelector(
    (state: RootState) => state.persistReducer.settingsState.fontSize,
  );

  const theme = useSelector(
    (state: RootState) => state.persistReducer.settingsState.theme,
  );

  const keyboardHandler = useSelector(
    (state: RootState) => state.persistReducer.settingsState.keyboardHandler,
  );

  const enableBasicAutoComplete = useSelector(
    (state: RootState) =>
      state.persistReducer.settingsState.enableBasicAutoComplete,
  );

  const enableSnippets = useSelector(
    (state: RootState) => state.persistReducer.settingsState.enableSnippets,
  );

  const dispatch = useDispatch();

  const { editorWidth, language } = props;

  return (
    <AceEditor
      mode={language}
      theme={theme}
      name="codeEditor"
      fontSize={fontSize}
      wrapEnabled={true}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutoCompletion: enableBasicAutoComplete,
        enableSnippets: enableSnippets,
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
