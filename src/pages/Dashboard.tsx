import { useState, useRef } from 'react';
import classnames from 'classnames';
import { MapDesignerComponent } from '@codecharacter-2022/map-designer';
import { RendererComponent } from '@codecharacter-2022/renderer';
import SplitPane from 'react-split-pane';
import Editor from '../components/Editor';
import '../styles/DefaultSplitPane.css';
import styles from '../styles/Dashboard.module.css';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faUpRightFromSquare,
  faCodeBranch,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function Dashboard(): JSX.Element {
  const languages = ['c_cpp', 'python'];

  const sideBar = useRef(null);
  const slideInOutBtn = useRef(null);

  const [editorWidth, setEditorWidth] = useState(window.innerWidth / 2);
  const [language, setLanguage] = useState(languages[0]);
  const [isCodeEditorOpen, setCodeEditorOpen] = useState(true);
  const [pane1Width, setpane1Width] = useState(window.innerWidth / 2 + 70); // 70 is the width of sideBar + slideInOutBtn

  let codeEditorComponent;
  if (isCodeEditorOpen === true) {
    codeEditorComponent = (
      <Col
        className="p-0 m-0 vh-100"
        xs="auto"
        sm="auto"
        md="auto"
        lg="auto"
        xl="auto"
        xxl="auto"
      >
        <Row
          className={classnames(
            styles.btnBarAboveEditor,
            'align-items-center justify-content-center w-100 m-0',
          )}
        >
          <Col className="text-center">
            <select
              className={classnames(styles.languageDropdown, 'w-75 pt-1 pb-1')}
              onChange={e => setLanguage(e.target.value)}
            >
              {languages.map(language => (
                <option value={language} key={language}>
                  {language}
                </option>
              ))}
            </select>
          </Col>

          <Col xs={3}>
            <Button className={classnames(styles.btnBarMembers, '')}>
              <FontAwesomeIcon icon={faCodeBranch} />
              {` Commit`}
            </Button>
          </Col>

          <Col xs={3}>
            <Button className={classnames(styles.btnBarMembers)}>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
              {` Submit`}
            </Button>
          </Col>
        </Row>

        <Row className="m-0 p-0">
          <Editor editorWidth={editorWidth} language={language}></Editor>
        </Row>
      </Col>
    );
  } else {
    codeEditorComponent = null;
  }
  console.log('injs');
  return (
    <SplitPane
      split="vertical"
      minSize={window.innerWidth / 2.4}
      pane1Style={{ width: pane1Width }}
      maxSize={window.innerWidth / 1.2}
      onChange={width => {
        if (isCodeEditorOpen === false) setCodeEditorOpen(true);
        setEditorWidth(
          width -
            sideBar.current.clientWidth -
            slideInOutBtn.current.clientWidth,
        );
        setpane1Width(width);
      }}
    >
      <Container className="vh-100 m-0 p-0" fluid>
        <Row className="h-100 w-99 m-0 p-0">
          <Col
            ref={sideBar}
            className={classnames(styles.sideBar, 'p-0 m-0 h-100 bg-secondary')}
            xs="auto"
            sm="auto"
            md="auto"
            lg="auto"
            xl="auto"
            xxl="auto"
          >
            NavBar
          </Col>

          {codeEditorComponent}

          <Col
            ref={slideInOutBtn}
            className="m-0 p-0"
            xs="auto"
            sm="auto"
            md="auto"
            lg="auto"
            xl="auto"
            xxl="auto"
            onClick={() => {
              if (isCodeEditorOpen === true) {
                setpane1Width(
                  sideBar.current.clientWidth +
                    slideInOutBtn.current.clientWidth,
                );
                setCodeEditorOpen(false);
              } else {
                setpane1Width(
                  editorWidth +
                    sideBar.current.clientWidth +
                    slideInOutBtn.current.clientWidth,
                );
                setCodeEditorOpen(true);
              }
            }}
          >
            <div className={classnames(styles.slideInOutBtn, 'w-100 h-100')}>
              <FontAwesomeIcon
                icon={isCodeEditorOpen === true ? faAngleLeft : faAngleRight}
                className="text-white fs-3"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <SplitPane split="horizontal" defaultSize={window.innerHeight / 2}>
        <MapDesignerComponent />
        <RendererComponent />
      </SplitPane>
    </SplitPane>
  );
}
