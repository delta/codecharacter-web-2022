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

  const [fontSize, setFontSize] = useState(fontSizeOptions[5].toString());
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
      onHide={() => setSettingsOpen('false')}
    >
      <Modal.Header
        className={classnames(styles.editorSettingsHeader)}
        closeButton
      >
        <Modal.Title className="fw-bold fs-3">Settings</Modal.Title>
      </Modal.Header>

      <Modal.Body className={classnames(styles.editorSettingsBody, 'rounded')}>
        <Container>
          <Row>
            <Col xs={12}>
              <FormGroup controlId="fontSize">
                <div className={classnames(styles.settingLabel)}>
                  <b>Font Size</b>
                </div>
                <select
                  className={classnames(styles.settingDropdown)}
                  value={fontSize}
                  onChange={e => setFontSize(e.target.value)}
                >
                  {fontSizeOptions.map((font: number) => (
                    <option value={font} key={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>

            <Col xs={12}>
              <FormGroup controlId="editorTheme">
                <div className={classnames(styles.settingLabel)}>
                  <b>Editor Theme</b>
                </div>
                <select
                  className={classnames(styles.settingDropdown)}
                  value={theme}
                  onChange={e => setTheme(e.target.value)}
                >
                  {editorThemes.map((themeValue: string) => (
                    <option value={themeValue} key={themeValue}>
                      {themeValue}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>

            <Col xs={12}>
              <FormGroup controlId="editorKeybinding">
                <div className={classnames(styles.settingLabel)}>
                  <b>Editor Keybinding</b>
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
                    >
                      {keyboardHandlerValue}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>

            <Col xs={12}>
              <FormGroup controlId="basicAutoCompletion">
                <div className={classnames(styles.settingLabel)}>
                  <b>Basic Auto Completion</b>
                </div>
                <select
                  className={classnames(styles.settingDropdown)}
                  value={enableBasicAutoComplete ? 'enable' : 'disable'}
                  onChange={e => setBasicAutoComplete(e.target.value)}
                >
                  <option value={'enable'} key={'enable'}>
                    enable
                  </option>
                  <option value={'disable'} key={'disable'}>
                    disable
                  </option>
                </select>
              </FormGroup>
            </Col>

            <Col xs={12}>
              <FormGroup controlId="snippets">
                <div className={classnames(styles.settingLabel)}>
                  <b>Snippets</b>
                </div>
                <select
                  className={classnames(styles.settingDropdown)}
                  value={enableSnippets ? 'enable' : 'disable'}
                  onChange={e => setSnippets(e.target.value)}
                >
                  <option value={'enable'} key={'enable'}>
                    enable
                  </option>
                  <option value={'disable'} key={'disable'}>
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
