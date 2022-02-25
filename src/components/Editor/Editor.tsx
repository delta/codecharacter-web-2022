import * as Editor from './EditorTypes';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';

import 'ace-builds/src-noconflict/ext-language_tools';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-kuroir';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/theme-chaos';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/theme-eclipse';
import 'ace-builds/src-noconflict/theme-dracula';

import 'ace-builds/src-noconflict/keybinding-emacs';
import 'ace-builds/src-noconflict/keybinding-vim';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  EnableBasicAutoComplete,
  EnableSnippets,
  FontSize,
  KeyboardHandler,
  Theme,
} from '../../store/EditorSettings/settings';
import {
  updateUserCode,
  CodeAndLanguage,
  UserCode,
} from '../../store/Editor/code';

export default function CodeEditor(props: Editor.Props): JSX.Element {
  const userCode = useAppSelector(UserCode);
  const fontSize = useAppSelector(FontSize);
  const theme = useAppSelector(Theme);
  const keyboardHandler = useAppSelector(KeyboardHandler);
  const enableBasicAutoComplete = useAppSelector(EnableBasicAutoComplete);
  const enableSnippets = useAppSelector(EnableSnippets);

  const dispatch = useAppDispatch();

  const { language } = props;

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
      enableBasicAutocompletion
      keyboardHandler={keyboardHandler !== 'default' ? keyboardHandler : ''}
      editorProps={{ $blockScrolling: true }}
      width={'100%'}
      height={'100%'}
      value={userCode}
      onChange={value => {
        const codeNlanguage: CodeAndLanguage = {
          currentUserCode: value,
          currentUserLanguage: language,
        };
        dispatch(updateUserCode(codeNlanguage));
      }}
    />
  );
}
