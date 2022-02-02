import { useState } from 'react';
import classnames from 'classnames';
import { FormGroup, Col, Container, Row, Modal } from 'react-bootstrap';
import styles from '../styles/EditorSettings.module.css';

const EditorSettings = (): JSX.Element => {
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

  const [fontSize, setFontSize] = useState(fontSizeOptions[4].toString());
  const [theme, setTheme] = useState(editorThemes[0]);
  const [keyboardHandler, setKeyboardHandler] = useState(keyboardHandlers[0]);
  const [enableBasicAutoComplete, setBasicAutoComplete] = useState('true');
  const [enableSnippets, setSnippets] = useState('true');
  const [isSettingsOpen, setSettingsOpen] = useState('true');

  localStorage.setItem('fontSize', fontSize.toString());
  localStorage.setItem('theme', theme);
  localStorage.setItem('keyboardHandler', keyboardHandler);
  localStorage.setItem(
    'enableBasicAutoComplete',
    enableBasicAutoComplete.toString(),
  );
  localStorage.setItem('enableSnippets', enableSnippets.toString());

  return (
    <Modal
      show={isSettingsOpen === 'true' ? true : false}
      centered
      className={classnames(styles.editorSettingsModal)}
      onHide={() => setSettingsOpen('false')}
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
                  onChange={e => setFontSize(e.target.value)}
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
                  onChange={e => setTheme(e.target.value)}
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
                  onChange={e => setKeyboardHandler(e.target.value)}
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
                  onChange={e => setBasicAutoComplete(e.target.value)}
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
                  onChange={e => setSnippets(e.target.value)}
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
