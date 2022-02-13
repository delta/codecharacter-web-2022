import { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import SplitPane from 'react-split-pane';
import Editor from '../components/Editor';
import '../styles/DefaultSplitPane.css';
import styles from '../styles/Dashboard.module.css';
import { MapDesignerComponent } from '@codecharacter-2022/map-designer';
import { RendererComponent } from '@codecharacter-2022/renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState } from '../redux/store';
import { changeLanguage, initializeEditorStates } from '../redux/code';
import { useSelector, useDispatch } from 'react-redux';
import { CodeApi, Language } from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../api/ApiConfig';
import {
  Container,
  Row,
  Col,
  Button,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap';
import {
  faCloudUploadAlt,
  faCodeBranch,
  faAngleRight,
  faAngleLeft,
  faSave,
} from '@fortawesome/free-solid-svg-icons';

export default function Dashboard(): JSX.Element {
  // Retreiving only needed info from global store
  const userLanguage = useSelector(
    (state: RootState) => state.editorState.language,
  );
  const userCode = useSelector(
    (state: RootState) => state.editorState.userCode,
  );
  const dispatch = useDispatch();
  const codeAPI = new CodeApi(apiConfig);

  useEffect(() => {
    if (localStorage.getItem('firstTime') === null) {
      codeAPI
        .getLatestCode()
        .then(response => {
          console.log(response);
          dispatch(initializeEditorStates(response));
        })
        .catch(err => {
          if (err instanceof ApiError) console.log(err.message);
        })
        .finally(() => localStorage.setItem('firstTime', 'false'));
    }
  }, []);

  const languages: string[] = ['C++', 'Python'];

  const slideInOutBtn = useRef(null);

  const [editorWidth, setEditorWidth] = useState(
    (window.innerWidth - 45) / 2 - 20,
  ); /* 45 is sidebar width and 20 is slidInOutBtn width */

  const localStoreLanguageChose = localStorage.getItem('languageChose');
  const [languageChose, setLanguageChose] = useState(
    localStoreLanguageChose === null ? 'C++' : localStoreLanguageChose,
  );

  const [isCodeEditorOpen, setCodeEditorOpen] = useState(true);
  const [isRendererOpen, setRendererOpen] = useState(true);
  // 45 is the width of sideBar + slideInOutBtn
  const [pane1Width, setpane1Width] = useState((window.innerWidth - 45) / 2);
  const [slideBtnDimensions, setSlideBtnDimensions] = useState('w-100 h-50');
  const [commitName, setCommitName] = useState('');

  function handleLanguageChange(language: string) {
    switch (language) {
      case 'C++':
        dispatch(changeLanguage('c_cpp'));
        setLanguageChose('C++');
        localStorage.setItem('languageChose', 'C++');
        break;
      case 'Python':
        dispatch(changeLanguage('python'));
        setLanguageChose('Python');
        localStorage.setItem('languageChose', 'Python');
        break;
      default:
        dispatch(changeLanguage('c_cpp'));
    }
  }

  function handleSave() {
    let languageType: Language;
    if (userLanguage === 'c_cpp') languageType = Language.Cpp;
    else if (userLanguage === 'python') languageType = Language.Python;

    codeAPI
      .updateLatestCode({
        code: userCode,
        lock: false,
        language: languageType,
      })
      .then()
      .catch(err => {
        if (err instanceof ApiError) console.log(err.message);
      });
  }

  function handleCommitNameInput(e: React.ChangeEvent<HTMLInputElement>) {
    setCommitName(e.target.value);
  }

  function handleCommit() {
    let languageType: Language;
    if (userLanguage === 'c_cpp') languageType = Language.Cpp;
    else if (userLanguage === 'python') languageType = Language.Python;

    codeAPI
      .createCodeRevision({
        code: userCode,
        message: commitName,
        language: languageType,
      })
      .then()
      .catch(err => {
        if (err instanceof ApiError) console.log(err.message);
      });
  }

  function handleUpperSlideInOutBtn() {
    if (isRendererOpen === true) {
      setSlideBtnDimensions('w-100 h-100');
      setpane1Width(window.innerWidth - 45 - 1); // width of sidebar is 45
      setEditorWidth(window.innerWidth - 45 - 21); // width of slideInOutBar is 20
      setRendererOpen(false);
    } else {
      setSlideBtnDimensions('w-100 h-50');
      setpane1Width((window.innerWidth - 45) / 2);
      setEditorWidth((window.innerWidth - 45) / 2 - 20);
      setRendererOpen(true);
    }
  }

  function handleLowerSlideInOutBtn() {
    if (isCodeEditorOpen === true) {
      setSlideBtnDimensions('w-100 h-100');
      setpane1Width(slideInOutBtn.current.clientWidth);
      setCodeEditorOpen(false);
    } else {
      setSlideBtnDimensions('w-100 h-50');
      setpane1Width(editorWidth + slideInOutBtn.current.clientWidth);
      setCodeEditorOpen(true);
    }
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Container className="h-100 m-0 p-0" fluid>
          <Row className="w-100 h-100 m-0 p-0 align-items-center">
            <Col>
              <input
                onChange={handleCommitNameInput}
                className={classnames(styles.popOverInput)}
                type={'text'}
                placeholder={'Commit Name'}
              ></input>
            </Col>
            <Col>
              <button
                className={classnames(styles.popOverBtn)}
                onClick={handleCommit}
              >
                {' '}
                Done{' '}
              </button>
            </Col>
          </Row>
        </Container>
      </Popover.Body>
    </Popover>
  );

  let codeEditorComponent;
  if (isCodeEditorOpen === true) {
    codeEditorComponent = (
      <Col
        className="p-0 m-0"
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
              value={languageChose}
              className={classnames(styles.languageDropdown, 'w-75 pt-1 pb-1')}
              onChange={e => handleLanguageChange(e.target.value)}
            >
              {languages.map(language => (
                <option value={language} key={language}>
                  {language}
                </option>
              ))}
            </select>
          </Col>

          <Col xs={7} className={classnames(styles.btnsParent)}>
            <Button
              className={classnames(styles.btnBarMembers)}
              onClick={handleSave}
            >
              <FontAwesomeIcon icon={faSave} />
              {`   Save`}
            </Button>

            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <Button className={classnames(styles.btnBarMembers)}>
                <FontAwesomeIcon icon={faCodeBranch} />
                {`   Commit`}
              </Button>
            </OverlayTrigger>

            <Button className={classnames(styles.btnBarMembers)}>
              <FontAwesomeIcon icon={faCloudUploadAlt} />
              {`   Submit`}
            </Button>
          </Col>
        </Row>
        <Row className="m-0 p-0">
          <Editor editorWidth={editorWidth} language={userLanguage}></Editor>
        </Row>
      </Col>
    );
  } else {
    codeEditorComponent = null;
  }

  let rendererComponent;
  if (isRendererOpen === true) {
    rendererComponent = (
      <SplitPane
        split="horizontal"
        minSize={window.innerHeight / 4}
        maxSize={window.innerHeight * (3 / 4)}
        defaultSize={(0.935 * window.innerHeight) / 2}
      >
        <MapDesignerComponent />
        <RendererComponent />
      </SplitPane>
    );
  } else {
    rendererComponent = null;
  }

  return (
    <>
      <SplitPane
        split="vertical"
        minSize={window.innerWidth / 2.65}
        maxSize={window.innerWidth / 1.2}
        pane1Style={{ width: pane1Width }}
        style={{ height: '93.5vh', position: 'static' }}
        onChange={width => {
          if (isCodeEditorOpen === false) setCodeEditorOpen(true);
          setEditorWidth(width - slideInOutBtn.current.clientWidth);
          setpane1Width(width);
        }}
      >
        <Container className={classnames(styles.dashboardMainContainer)} fluid>
          <Row className="h-100 w-100 m-0 p-0">
            {codeEditorComponent}
            <Col
              ref={slideInOutBtn}
              className="m-0 p-0 h-100"
              xs="auto"
              sm="auto"
              md="auto"
              lg="auto"
              xl="auto"
              xxl="auto"
            >
              {isCodeEditorOpen && (
                <div
                  className={classnames(
                    styles.slideInOutBtn,
                    slideBtnDimensions,
                  )}
                  onClick={handleUpperSlideInOutBtn}
                >
                  <FontAwesomeIcon
                    icon={isRendererOpen === true ? faAngleRight : faAngleLeft}
                    className="text-white fs-3"
                  />
                </div>
              )}

              {isRendererOpen && (
                <div
                  className={classnames(
                    styles.slideInOutBtn,
                    slideBtnDimensions,
                  )}
                  onClick={handleLowerSlideInOutBtn}
                >
                  <FontAwesomeIcon
                    icon={
                      isCodeEditorOpen === true ? faAngleLeft : faAngleRight
                    }
                    className="text-white fs-3"
                  />
                </div>
              )}
            </Col>
          </Row>
        </Container>
        {rendererComponent}
      </SplitPane>
    </>
  );
}
