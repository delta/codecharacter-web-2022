import { useEffect, useState } from 'react';
import { MapDesignerComponent } from '@codecharacter-2022/map-designer';
import { MapApi } from '@codecharacter-2022/client';
import Toast from 'react-hot-toast';
import styles from './MapDesigner.module.css';
import { apiConfig, ApiError } from '../../api/ApiConfig';
import { Modal, Container, Row } from 'react-bootstrap';

const MapDesigner: React.FunctionComponent = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [commitModalShow, setCommitModalShow] = useState<boolean>(false);
  const [commitName, setCommitName] = useState<string>('');
  const [commitModalError, setCommitModalError] = useState<string>('');
  const [stagedMap, setStagedMap] = useState<Array<Array<number>>>();

  type ButtonType = 'save' | 'submit' | 'commit';
  const mapAPI = new MapApi(apiConfig);
  useEffect(() => {
    mapAPI.getLatestMap().then(mp => {
      setStagedMap(JSON.parse(mp.map));
    });
  }, []);

  const closeModal = () => setModalShow(false);
  const closeCommitModal = () => {
    setCommitModalError('');
    setCommitName('');
    setCommitModalShow(false);
  };
  const openCommitModal = () => {
    closeModal();
    setCommitModalShow(true);
  };
  const handleCommitName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommitName(e.target.value);
  };
  const handleButtonClick = (button: ButtonType) => {
    if (!stagedMap) return;
    switch (button) {
      case 'save':
        closeModal();
        mapAPI
          .updateLatestMap({
            map: JSON.stringify(stagedMap),
            lock: false,
          })
          .then(() => {
            Toast.success('Map Saved');
          })
          .catch(error => {
            if (error instanceof ApiError) {
              Toast.error(error.message);
            }
          });
        break;
      case 'submit':
        closeModal();
        mapAPI
          .updateLatestMap({
            map: JSON.stringify(stagedMap),
            lock: true,
          })
          .then(() => {
            Toast.success('Map Submitted');
          })
          .catch(error => {
            if (error instanceof ApiError) {
              Toast.error(error.message);
            }
          });
        break;
      case 'commit':
        if (!commitName) {
          setCommitModalError('Commit name cannot be empty!');
          return;
        }
        closeCommitModal();
        mapAPI
          .createMapRevision({
            map: JSON.stringify(stagedMap),
            message: commitName,
          })
          .then(() => {
            Toast.success('Map Commit Created');
          })
          .catch(error => {
            if (error instanceof ApiError) {
              Toast.error(error.message);
            }
          });
        break;
    }
    setStagedMap(undefined);
    closeModal();
  };

  const saveMapCallback = (map: Array<Array<number>>) => {
    setModalShow(true);
    setStagedMap(map);
  };
  return (
    <>
      <div className={styles.mapDesignerContainer}>
        <MapDesignerComponent
          saveMapCallback={saveMapCallback}
          readonly={false}
        />
      </div>
      <Modal
        show={modalShow}
        centered
        className={styles.mapSubmitModal}
        onHide={closeModal}
      >
        <Modal.Header className={styles.modalHeader} closeButton>
          <Modal.Title className="fw-bold fs-3">Save Map?</Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles.modalContent}>
          <Container fluid>
            <Row>
              <p className={styles.contentP}>
                <span>SAVE</span> : Save map only.
              </p>
            </Row>
            <Row>
              <p className={styles.contentP}>
                <span>SUBMIT</span> : Save map and submit to Leaderboard.
              </p>
            </Row>
            <Row>
              <p className={styles.contentP}>
                <span>COMMIT</span> : Create a commit revision with the current
                map.
              </p>
            </Row>
          </Container>
          <Container fluid className={styles.buttonRow}>
            <button
              className={styles.modalButton}
              onClick={() => {
                handleButtonClick('save');
              }}
            >
              Save
            </button>
            <button
              className={styles.modalButton}
              onClick={() => {
                handleButtonClick('submit');
              }}
            >
              Submit
            </button>
            <button className={styles.modalButton} onClick={openCommitModal}>
              Commit
            </button>
          </Container>
        </Modal.Body>
      </Modal>
      <Modal
        show={commitModalShow}
        centered
        className={styles.mapSubmitModal}
        onHide={closeCommitModal}
      >
        <Modal.Header className={styles.modalHeader} closeButton>
          <Modal.Title className="fw-bold fs-2">Commit Name</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalContent}>
          <Row>
            <input
              className={styles.commitNameInput}
              onChange={handleCommitName}
            ></input>
          </Row>
          <p className={styles.commitModalError}>{commitModalError}</p>
          <div className={styles.buttonRow}>
            <button
              className={styles.modalButton}
              onClick={() => {
                handleButtonClick('commit');
              }}
            >
              Create Map Commit
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MapDesigner;
