import classnames from 'classnames';
import { FormGroup, Col, Container, Row, Modal } from 'react-bootstrap';
import styles from '../styles/EditorSettings.module.css';
import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  isSettingsOpened,
  fontSizeChanged,
  themeChanged,
  keyboardHandlerChanged,
  enableBasicAutoCompleteChanged,
  enableSnippetsChanged,
} from '../redux/settings';

const EditorSettings = (): JSX.Element => {
  const isSettingsOpen = useSelector(
    (state: RootState) => state.settingsState.isSettingsOpen,
  );

  const fontSize = useSelector(
    (state: RootState) => state.settingsState.fontSize,
  );

  const theme = useSelector((state: RootState) => state.settingsState.theme);

  const keyboardHandler = useSelector(
    (state: RootState) => state.settingsState.keyboardHandler,
  );

  const enableBasicAutoComplete = useSelector(
    (state: RootState) => state.settingsState.enableBasicAutoComplete,
  );

  const enableSnippets = useSelector(
    (state: RootState) => state.settingsState.enableSnippets,
  );

  const dispatch = useDispatch();

  const fontSizeOptions = [];
  for (let i = 8; i <= 40; i += 2) {
    fontSizeOptions.push(i);
  }

  const editorThemes = [
    'monokai',
    'github',
    'tomorrow',
    'kuroir',
    'twilight',
    'xcode',
    'textmate',
    'solarized_dark',
    'solarized_light',
    'terminal',
    'chaos',
    'chrome',
    'eclipse',
    'dracula',
  ];

  const keyboardHandlers = ['default', 'emacs', 'vim'];

  function handleFontSizeChange(newFontSize: number) {
    dispatch(fontSizeChanged(newFontSize));
  }

  function handleThemeChange(newTheme: string) {
    dispatch(themeChanged(newTheme));
  }

  function handleKeyboardHandlerChange(newKeyboardHandler: string) {
    dispatch(keyboardHandlerChanged(newKeyboardHandler));
  }

  function handleAutoCompleteToggle(toggle: boolean) {
    dispatch(enableBasicAutoCompleteChanged(toggle));
  }

  function handleSnippetsToggle(toggle: boolean) {
    dispatch(enableSnippetsChanged(toggle));
  }

  return (
    <Modal
      show={isSettingsOpen}
      centered
      className={classnames(styles.editorSettingsModal)}
      onHide={() => dispatch(isSettingsOpened(false))}
    >
      <Modal.Header
        className={classnames(styles.editorSettingsHeader)}
        closeButton
      >
        <Modal.Title className="fw-bold fs-3">Settings</Modal.Title>
      </Modal.Header>

      <Modal.Body className={classnames(styles.editorSettingsBody)}>
        <Container fluid>
          <Row>
            <Col xs={12} className={classnames(styles.settingFormGroup)}>
              <FormGroup controlId="fontSize">
                <div className={classnames(styles.settingLabel)}>Font Size</div>
                <select
                  className={classnames(styles.settingDropdown)}
                  value={fontSize}
                  onChange={e => handleFontSizeChange(Number(e.target.value))}
                >
                  {fontSizeOptions.map((font: number) => (
                    <option
                      value={font}
                      key={font}
                      className={classnames(styles.optionsDropdown)}
                    >
                      {font}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>

            <Col xs={12} className={classnames(styles.settingFormGroup)}>
              <FormGroup controlId="editorTheme">
                <div className={classnames(styles.settingLabel)}>
                  Editor Theme
                </div>
                <select
                  className={classnames(styles.settingDropdown)}
                  value={theme}
                  onChange={e => handleThemeChange(e.target.value)}
                >
                  {editorThemes.map((themeValue: string) => (
                    <option
                      value={themeValue}
                      key={themeValue}
                      className={classnames(styles.optionsDropdown)}
                    >
                      {themeValue}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>

            <Col xs={12} className={classnames(styles.settingFormGroup)}>
              <FormGroup controlId="editorKeybinding">
                <div className={classnames(styles.settingLabel)}>
                  Editor Keybinding
                </div>
                <select
                  className={classnames(styles.settingDropdown)}
                  value={keyboardHandler}
                  onChange={e => handleKeyboardHandlerChange(e.target.value)}
                >
                  {keyboardHandlers.map((keyboardHandlerValue: string) => (
                    <option
                      value={keyboardHandlerValue}
                      key={keyboardHandlerValue}
                      className={classnames(styles.optionsDropdown)}
                    >
                      {keyboardHandlerValue}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>

            <Col xs={12} className={classnames(styles.settingFormGroup)}>
              <FormGroup controlId="basicAutoCompletion">
                <div className={classnames(styles.settingLabel)}>
                  Basic Auto Completion
                </div>
                <select
                  className={classnames(styles.settingDropdown)}
                  value={enableBasicAutoComplete ? 'enable' : 'disable'}
                  onChange={e =>
                    handleAutoCompleteToggle(
                      e.target.value === 'enable' ? true : false,
                    )
                  }
                >
                  <option
                    value={'enable'}
                    key={'enable'}
                    className={classnames(styles.optionsDropdown)}
                  >
                    enable
                  </option>
                  <option
                    value={'disable'}
                    key={'disable'}
                    className={classnames(styles.optionsDropdown)}
                  >
                    disable
                  </option>
                </select>
              </FormGroup>
            </Col>

            <Col xs={12} className={classnames(styles.settingFormGroup)}>
              <FormGroup controlId="snippets">
                <div className={classnames(styles.settingLabel)}>Snippets</div>
                <select
                  className={classnames(styles.settingDropdown)}
                  value={enableSnippets ? 'enable' : 'disable'}
                  onChange={e =>
                    handleSnippetsToggle(
                      e.target.value === 'enable' ? true : false,
                    )
                  }
                >
                  <option
                    value={'enable'}
                    key={'enable'}
                    className={classnames(styles.optionsDropdown)}
                  >
                    enable
                  </option>
                  <option
                    value={'disable'}
                    key={'disable'}
                    className={classnames(styles.optionsDropdown)}
                  >
                    disable
                  </option>
                </select>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default EditorSettings;
