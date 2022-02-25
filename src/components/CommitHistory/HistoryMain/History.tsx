import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CommitHistory from '../CommitTree/CommitHistroy';
import { apiConfig, ApiError } from '../../../api/ApiConfig';
import {
  CodeApi,
  CodeRevision,
  GameMapRevision,
  MapApi,
} from '@codecharacter-2022/client';
import {
  changeHistoryEditorMap,
  changeHistoryEditorCode,
} from '../../../store/historyEditor/historyEditorSlice';
import { useAppDispatch } from '../../../store/hooks';
import styles from './History.module.css';
import CodeView from '../CodeMapViewbox/CodeView';
import MapView from '../CodeMapViewbox/MapView';

export default function History(): JSX.Element {
  const [BigButton, setBigButton] = useState('Code');
  const [completeCodeHistroy, setCodeHistory] = useState<CodeRevision[]>([]);
  const [completeMapHistory, setMapHistory] = useState<GameMapRevision[]>([]);
  const [currentCode, setCurrentCode] = useState('');
  const [codeLanguage, setCodeLanguage] = useState('');
  const [currentMap, setCurrentMap] = useState<Array<Array<number>>>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const codeApi = new CodeApi(apiConfig);
    codeApi
      .getCodeRevisions()
      .then(codeResp => {
        setCodeHistory(codeResp);
      })
      .catch(codeError => {
        if (codeError instanceof ApiError) {
          console.log(codeError);
        }
      });

    const mapApi = new MapApi(apiConfig);
    mapApi
      .getMapRevisions()
      .then(mapResp => {
        setMapHistory(mapResp);
      })
      .catch(mapError => {
        if (mapError instanceof ApiError) {
          console.log(mapError);
        }
      });
  }, []);

  const commitID = (id: string) => {
    completeCodeHistroy.forEach(codeData => {
      if (codeData.id == id) {
        setCurrentCode(codeData.code);
        setCodeLanguage(codeData.language.toLowerCase());
      }
    });
    completeMapHistory.forEach(mapData => {
      if (mapData.id == id) {
        setCurrentMap(JSON.parse(mapData.map));
      }
    });
  };

  const changesEditorDetails = () => {
    if (BigButton == 'Code' && currentCode != '') {
      dispatch(changeHistoryEditorCode(currentCode));
    } else if (BigButton == 'Map' && currentMap != []) {
      dispatch(changeHistoryEditorMap(currentMap));
    }
  };

  return (
    <div>
      <div className={styles.historyMain}>
        <div className={styles.timeline}>
          <div></div>
          <div className={styles.completeTimeline}>
            {completeMapHistory && completeCodeHistroy ? (
              <CommitHistory
                commitID={commitID}
                commitHistoryDetails={
                  BigButton == 'Code' ? completeCodeHistroy : completeMapHistory
                }
              />
            ) : (
              <h1 className={styles.noCommitDataHeader}>Loading...</h1>
            )}
          </div>
          <div></div>
        </div>
        <div className={styles.codeView}>
          <div className={styles.codeMapButton}>
            <ButtonGroup>
              <Button
                className={
                  BigButton == 'Code' ? styles.largeButton : styles.smallButton
                }
                onClick={() => {
                  setBigButton('Code');
                }}
              >
                Code
              </Button>
              <Button
                className={
                  BigButton == 'Map' ? styles.largeButton : styles.smallButton
                }
                onClick={() => {
                  setBigButton('Map');
                }}
              >
                Map
              </Button>
            </ButtonGroup>
          </div>
          <div className={BigButton == 'Code' ? styles.codeBox : styles.mapBox}>
            {BigButton == 'Code' ? (
              <CodeView code={currentCode} codeLang={codeLanguage} />
            ) : (
              <MapView mapCoordinates={currentMap} />
            )}
          </div>
          <div className={styles.select}>
            <Button
              className={styles.selectButton}
              variant="primary"
              size="lg"
              onClick={changesEditorDetails}
            >
              Select
            </Button>
          </div>
        </div>
        <div className={styles.dummy}></div>
      </div>
    </div>
  );
}
