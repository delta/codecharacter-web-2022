import { useEffect, useState } from 'react';
import styles from './SelfMatchModalStyle.module.css';
import { FormGroup, Col, Container, Row, Modal, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  isSelfMatchModalOpen,
  isSelfMatchModalOpened,
  codeCommitID,
  codeCommitIDChanged,
  mapCommitID,
  mapCommitIDChanged,
  mapCommitNameChanged,
  codeCommitName,
  mapCommitName,
  codeCommitNameChanged,
} from '../../store/SelfMatchMakeModal/SelfMatchModal';
import { apiConfig, ApiError } from '../../api/ApiConfig';
import {
  CodeApi,
  CodeRevision,
  GameMapRevision,
  MapApi,
  MatchApi,
  MatchMode,
} from '@codecharacter-2022/client';
import Toast from 'react-hot-toast';
import { isloggedIn } from '../../store/User/UserSlice';

const selfMatchModal = (): JSX.Element => {
  const IsSelfMatchModalOpen = useAppSelector(isSelfMatchModalOpen);
  const CodeCommitID = useAppSelector(codeCommitID);
  const MapCommitID = useAppSelector(mapCommitID);
  const CodeCommitName = useAppSelector(codeCommitName);
  const MapCommitName = useAppSelector(mapCommitName);
  const dispatch = useAppDispatch();
  const [completeCodeHistory, setCodeHistory] = useState<CodeRevision[]>([]);
  const [completeMapHistory, setMapHistory] = useState<GameMapRevision[]>([]);
  const isLogged = useAppSelector(isloggedIn);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const codeApi = new CodeApi(apiConfig);
      codeApi
        .getCodeRevisions()
        .then(codeResp => setCodeHistory(codeResp))
        .catch(error => {
          if (error instanceof ApiError) Toast.error(error.message);
        });

      const mapApi = new MapApi(apiConfig);
      mapApi
        .getMapRevisions()
        .then(mapResp => setMapHistory(mapResp))
        .catch(error => {
          if (error instanceof ApiError) Toast.error(error.message);
        });
    }
  }, [isLogged]);

  function handleCodeCommitChange(selectedValue: string) {
    if (selectedValue === 'Current Code') {
      dispatch(codeCommitNameChanged('Current Code'));
      dispatch(codeCommitIDChanged(null));
    } else {
      const newCommit = completeCodeHistory.filter(
        codeCommit => codeCommit.message === selectedValue,
      );
      dispatch(codeCommitNameChanged(newCommit[0].message));
      dispatch(codeCommitIDChanged(newCommit[0].id));
    }
  }

  function handleMapCommitChange(selectedValue: string) {
    if (selectedValue === 'Current Map') {
      dispatch(mapCommitNameChanged('Current Map'));
      dispatch(mapCommitIDChanged(null));
    } else {
      const newCommit = completeMapHistory.filter(
        mapCommit => mapCommit.message === selectedValue,
      );
      dispatch(mapCommitNameChanged(newCommit[0].message));
      dispatch(mapCommitIDChanged(newCommit[0].id));
    }
  }

  function handleSimulate() {
    const mapAPI = new MatchApi(apiConfig);
    mapAPI
      .createMatch({
        mode: MatchMode.Self,
        codeRevisionId: CodeCommitID,
        mapRevisionId: MapCommitID,
      })
      .catch(error => {
        if (error instanceof ApiError) Toast.error(error.message);
      });
  }

  return (
    <Modal
      show={IsSelfMatchModalOpen}
      centered
      onHide={() => dispatch(isSelfMatchModalOpened(false))}
    >
      <Modal.Header className={styles.selfMatchModalHeader} closeButton>
        <Modal.Title className="fw-bold fs-3">Self Match</Modal.Title>
      </Modal.Header>

      <Modal.Body className={styles.selfMatchModalBody}>
        <Container fluid>
          <Row>
            <Col xs={12} className={styles.selfMatchModalFormGroup}>
              <FormGroup controlId="codeCommitName">
                <div className={styles.selfMatchModalLabel}>
                  Code Commit Name
                </div>
                <select
                  className={styles.selfMatchModalDropdown}
                  value={CodeCommitName}
                  onChange={e => handleCodeCommitChange(e.target.value)}
                >
                  <option
                    value={'Current Code'}
                    key={'Current Code'}
                    className={styles.dropdownOptions}
                  >
                    Current Code
                  </option>
                  {completeCodeHistory.map(codeCommit => (
                    <option
                      value={codeCommit.message}
                      key={codeCommit.message}
                      className={styles.dropdownOptions}
                    >
                      {codeCommit.message}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>

            <Col xs={12} className={styles.selfMatchModalFormGroup}>
              <FormGroup controlId="mapCommitName">
                <div className={styles.selfMatchModalLabel}>
                  Map Commit Name
                </div>
                <select
                  className={styles.selfMatchModalDropdown}
                  value={MapCommitName}
                  onChange={e => handleMapCommitChange(e.target.value)}
                >
                  <option
                    value={'Current Map'}
                    key={'Current Map'}
                    className={styles.dropdownOptions}
                  >
                    Current Map
                  </option>
                  {completeMapHistory.map(mapCommit => (
                    <option
                      value={mapCommit.message}
                      key={mapCommit.message}
                      className={styles.dropdownOptions}
                    >
                      {mapCommit.message}
                    </option>
                  ))}
                </select>
              </FormGroup>
              <Button
                className={styles.selfMatchModalSimulateBtn}
                onClick={handleSimulate}
              >
                Simulate
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default selfMatchModal;
