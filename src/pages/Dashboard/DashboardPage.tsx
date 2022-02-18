import { useState, useRef, useEffect } from 'react';
import SplitPane from 'react-split-pane';
import Editor from '../../components/Editor/Editor';
import './DefaultSplitPane.css';
import styles from './Dashboard.module.css';
import { MapDesignerComponent } from '@codecharacter-2022/map-designer';
import { RendererComponent } from '@codecharacter-2022/renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  changeLanguage,
  initializeEditorStates,
  UserCode,
  UserLanguage,
} from '../../store/editor/code';
import { CodeApi, Language, MapApi } from '@codecharacter-2022/client';
import { apiConfig, ApiError } from '../../api/ApiConfig';
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
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  codeCommitIDChanged,
  codeCommitNameChanged,
  isSelfMatchModalOpened,
  mapCommitIDChanged,
  mapCommitNameChanged,
} from '../../store/selfMatchModal/selfMatchModal';

export default function Dashboard(): JSX.Element {
  const [forceRender, setForceRender] = useState(0);
  window.addEventListener('resize', () => {
    setForceRender(forceRender + 1);
  });
  const userLanguage = useAppSelector(UserLanguage);
  const userCode = useAppSelector(UserCode);
  const dispatch = useAppDispatch();

  const codeAPI = new CodeApi(apiConfig);
  const mapAPI = new MapApi(apiConfig);

  useEffect(() => {
    if (localStorage.getItem('firstTime') === null) {
      codeAPI
        .getLatestCode()
        .then(response => {
          dispatch(initializeEditorStates(response));
        })
        .catch(err => {
          if (err instanceof ApiError) console.log(err.message);
        })
        .finally(() => localStorage.setItem('firstTime', 'false'));
    }
  }, []);

  const languages: string[] = ['C++', 'Python', 'Java'];

  const slideInOutBtn = useRef<HTMLDivElement>(null);

  const [editorWidth, setEditorWidth] = useState(
    (window.innerWidth - 45) / 2 - 25,
  );

  const localStoreLanguageChose = localStorage.getItem('languageChose');
  const [languageChose, setLanguageChose] = useState(
    localStoreLanguageChose === null ? 'C++' : localStoreLanguageChose,
  );

  const [isCodeEditorOpen, setCodeEditorOpen] = useState(true);
  const [isRendererOpen, setRendererOpen] = useState(true);
  const [pane1Width, setpane1Width] = useState((window.innerWidth - 45) / 2);
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
      case 'Java':
        dispatch(changeLanguage('java'));
        setLanguageChose('Java');
        localStorage.setItem('languageChose', 'Java');
        break;
      default:
        dispatch(changeLanguage('c_cpp'));
    }
  }

  function handleSave() {
    let languageType: Language = Language.Cpp;
    if (userLanguage === 'c_cpp') languageType = Language.Cpp;
    else if (userLanguage === 'python') languageType = Language.Python;
    else if (userLanguage === 'java') languageType = Language.Java;

    codeAPI
      .updateLatestCode({
        code: userCode,
        lock: false,
        language: languageType,
      })
      .catch(err => {
        if (err instanceof ApiError) console.log(err.message);
      });
  }

  async function handleSimulate() {
    await codeAPI
      .getCodeRevisions()
      .then(response => {
        dispatch(codeCommitNameChanged(response[response.length - 1].message));
        dispatch(codeCommitIDChanged(undefined));
      })
      .catch(err => {
        if (err instanceof ApiError) console.log(err.message);
      });

    await mapAPI
      .getMapRevisions()
      .then(response => {
        dispatch(mapCommitNameChanged(response[response.length - 1].message));
        dispatch(mapCommitIDChanged(undefined));
      })
      .catch(err => {
        if (err instanceof ApiError) console.log(err.message);
      });

    dispatch(isSelfMatchModalOpened(true));
  }

  function handleCommitNameInput(e: React.ChangeEvent<HTMLInputElement>) {
    setCommitName(e.target.value);
  }

  function handleCommit() {
    let languageType: Language = Language.Cpp;
    if (userLanguage === 'c_cpp') languageType = Language.Cpp;
    else if (userLanguage === 'python') languageType = Language.Python;
    else if (userLanguage === 'java') languageType = Language.Java;

    codeAPI
      .createCodeRevision({
        code: userCode,
        message: commitName,
        language: languageType,
      })
      .catch(err => {
        if (err instanceof ApiError) console.log(err.message);
      });
  }

  function handleSubmit() {
    let languageType: Language = Language.Cpp;
    if (userLanguage === 'c_cpp') languageType = Language.Cpp;
    else if (userLanguage === 'python') languageType = Language.Python;
    else if (userLanguage === 'java') languageType = Language.Java;

    codeAPI
      .updateLatestCode({
        code: userCode,
        lock: true,
        language: languageType,
      })
      .catch(err => {
        if (err instanceof ApiError) console.log(err.message);
      });
  }

  function handleUpperSlideInOutBtn() {
    if (isRendererOpen === true) {
      setpane1Width(window.innerWidth - 60 - 1);
      setEditorWidth(window.innerWidth - 60 - 1 - 25);
      setRendererOpen(false);
    } else {
      setpane1Width((window.innerWidth - 65) / 2);
      setEditorWidth((window.innerWidth - 65) / 2 - 25);
      setRendererOpen(true);
    }
  }

  function handleLowerSlideInOutBtn() {
    if (isCodeEditorOpen === true) {
      setpane1Width(slideInOutBtn.current.clientWidth + 5);
      setCodeEditorOpen(false);
    } else {
      setpane1Width(editorWidth + slideInOutBtn.current.clientWidth + 5);
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
                className={styles.popOverInput}
                type={'text'}
                placeholder={'Commit Name'}
              ></input>
            </Col>
            <Col>
              <button className={styles.popOverBtn} onClick={handleCommit}>
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
        className={styles.btnBarAndEditor}
        xs="auto"
        sm="auto"
        md="auto"
        lg="auto"
        xl="auto"
        xxl="auto"
      >
        <Row className={styles.btnBarAboveEditor}>
          <Col className="text-center">
            <select
              value={languageChose}
              className={styles.languageDropdown}
              onChange={e => handleLanguageChange(e.target.value)}
            >
              {languages.map(language => (
                <option value={language} key={language}>
                  {language}
                </option>
              ))}
            </select>
          </Col>

          <Col xs={9} className={styles.btnsParent}>
            <Button className={styles.btnBarMembers} onClick={handleSave}>
              <FontAwesomeIcon icon={faSave as IconProp} />
              {`   Save`}
            </Button>

            <Button className={styles.btnBarMembers} onClick={handleSimulate}>
              <FontAwesomeIcon icon={faPlay as IconProp} />
              {`   Simulate`}
            </Button>

            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <Button className={styles.btnBarMembers}>
                <FontAwesomeIcon icon={faCodeBranch as IconProp} />
                {`   Commit`}
              </Button>
            </OverlayTrigger>

            <Button className={styles.btnBarMembers} onClick={handleSubmit}>
              <FontAwesomeIcon icon={faCloudUploadAlt as IconProp} />
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
    <div className={styles.splitPane}>
      <SplitPane
        split="vertical"
        minSize={window.innerWidth / 2.65}
        maxSize={window.innerWidth / 1.2}
        pane1Style={{ width: pane1Width }}
        style={{
          height: '100%',
          position: 'static',
          width: '100%',
        }}
        onChange={width => {
          if (isCodeEditorOpen === false) setCodeEditorOpen(true);
          setEditorWidth(width - slideInOutBtn.current.clientWidth - 5);
          setpane1Width(width);
        }}
      >
        <Container className={styles.dashboardMainContainer} fluid>
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
                  className={
                    isRendererOpen === true
                      ? styles.slideInOutBtn
                      : styles.slideInOutBtn2
                  }
                  onClick={handleUpperSlideInOutBtn}
                >
                  <FontAwesomeIcon
                    icon={
                      isRendererOpen === true
                        ? (faAngleRight as IconProp)
                        : (faAngleLeft as IconProp)
                    }
                    className="text-white fs-3"
                  />
                </div>
              )}

              {isRendererOpen && (
                <div
                  className={
                    isCodeEditorOpen === true
                      ? styles.slideInOutBtn
                      : styles.slideInOutBtn2
                  }
                  onClick={handleLowerSlideInOutBtn}
                >
                  <FontAwesomeIcon
                    icon={
                      isCodeEditorOpen === true
                        ? (faAngleLeft as IconProp)
                        : (faAngleRight as IconProp)
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
    </div>
  );
}
