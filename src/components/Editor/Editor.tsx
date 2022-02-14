import * as Editor from './EditorTypes';
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
  // const userCode = useSelector(
  //   (state: RootState) => state.codeEditorReducer.editorState.userCode,
  // );

  // const fontSize = useSelector(
  //   (state: RootState) => state.codeEditorReducer.settingsState.fontSize,
  // );

  // const theme = useSelector(
  //   (state: RootState) => state.codeEditorReducer.settingsState.theme,
  // );

  // const keyboardHandler = useSelector(
  //   (state: RootState) => state.codeEditorReducer.settingsState.keyboardHandler,
  // );

  // const enableBasicAutoComplete = useSelector(
  //   (state: RootState) =>
  //     state.codeEditorReducer.settingsState.enableBasicAutoComplete,
  // );

  // const enableSnippets = useSelector(
  //   (state: RootState) => state.codeEditorReducer.settingsState.enableSnippets,
  // );

  // const dispatch = useDispatch();
  const userCode = useAppSelector(UserCode);
  const fontSize = useAppSelector(FontSize);
  const theme = useAppSelector(Theme);
  const keyboardHandler = useAppSelector(KeyboardHandler);
  const enableBasicAutoComplete = useAppSelector(EnableBasicAutoComplete);
  const enableSnippets = useAppSelector(EnableSnippets);

  const dispatch = useAppDispatch();

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
      height={'87vh'}
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
