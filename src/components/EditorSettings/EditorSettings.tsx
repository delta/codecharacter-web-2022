import { FormGroup, Col, Container, Row, Modal } from 'react-bootstrap';
import styles from './EditorSettings.module.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  isSettingsOpened,
  fontSizeChanged,
  themeChanged,
  keyboardHandlerChanged,
  enableBasicAutoCompleteChanged,
  enableSnippetsChanged,
  IsSettingsOpen,
  FontSize,
  Theme,
  KeyboardHandler,
  EnableBasicAutoComplete,
  EnableSnippets,
} from '../../store/EditorSettings/settings';

const EditorSettings = (): JSX.Element => {
  const isSettingsOpen = useAppSelector(IsSettingsOpen);
  const fontSize = useAppSelector(FontSize);
  const theme = useAppSelector(Theme);
  const keyboardHandler = useAppSelector(KeyboardHandler);
  const enableBasicAutoComplete = useAppSelector(EnableBasicAutoComplete);
  const enableSnippets = useAppSelector(EnableSnippets);

  const dispatch = useAppDispatch();

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
      onHide={() => dispatch(isSettingsOpened(false))}
    >
      <Modal.Header className={styles.editorSettingsHeader} closeButton>
        <Modal.Title className="fw-bold fs-3">Settings</Modal.Title>
      </Modal.Header>

      <Modal.Body className={styles.editorSettingsBody}>
        <Container fluid>
          <Row>
            <Col xs={12} className={styles.settingFormGroup}>
              <FormGroup controlId="fontSize">
                <div className={styles.settingLabel}>Font Size</div>
                <select
                  className={styles.settingDropdown}
                  value={fontSize}
                  onChange={e => handleFontSizeChange(Number(e.target.value))}
                >
                  {fontSizeOptions.map((font: number) => (
                    <option
                      value={font}
                      key={font}
                      className={styles.optionsDropdown}
                    >
                      {font}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>

            <Col xs={12} className={styles.settingFormGroup}>
              <FormGroup controlId="editorTheme">
                <div className={styles.settingLabel}>Editor Theme</div>
                <select
                  className={styles.settingDropdown}
                  value={theme}
                  onChange={e => handleThemeChange(e.target.value)}
                >
                  {editorThemes.map((themeValue: string) => (
                    <option
                      value={themeValue}
                      key={themeValue}
                      className={styles.optionsDropdown}
                    >
                      {themeValue}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>

            <Col xs={12} className={styles.settingFormGroup}>
              <FormGroup controlId="editorKeybinding">
                <div className={styles.settingLabel}>Editor Keybinding</div>
                <select
                  className={styles.settingDropdown}
                  value={keyboardHandler}
                  onChange={e => handleKeyboardHandlerChange(e.target.value)}
                >
                  {keyboardHandlers.map((keyboardHandlerValue: string) => (
                    <option
                      value={keyboardHandlerValue}
                      key={keyboardHandlerValue}
                      className={styles.optionsDropdown}
                    >
                      {keyboardHandlerValue}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>

            <Col xs={12} className={styles.settingFormGroup}>
              <FormGroup controlId="basicAutoCompletion">
                <div className={styles.settingLabel}>Basic Auto Completion</div>
                <select
                  className={styles.settingDropdown}
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
                    className={styles.optionsDropdown}
                  >
                    enable
                  </option>
                  <option
                    value={'disable'}
                    key={'disable'}
                    className={styles.optionsDropdown}
                  >
                    disable
                  </option>
                </select>
              </FormGroup>
            </Col>

            <Col xs={12} className={styles.settingFormGroup}>
              <FormGroup controlId="snippets">
                <div className={styles.settingLabel}>Snippets</div>
                <select
                  className={styles.settingDropdown}
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
                    className={styles.optionsDropdown}
                  >
                    enable
                  </option>
                  <option
                    value={'disable'}
                    key={'disable'}
                    className={styles.optionsDropdown}
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
