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
import styles from './History.module.css';

export default function History(): JSX.Element {
  const [BigButton, setBigButton] = useState('Code');
  const [completeCodeHistroy, setCodeHistory] = useState<CodeRevision[]>([]);
  const [completeMapHistory, setMapHistory] = useState<GameMapRevision[]>([]);
  const [currentCode, setCurrentCode] = useState<CodeRevision>();
  const [currentMap, setCurrentMap] = useState<GameMapRevision>();

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
    setCurrentCode(completeCodeHistroy.find(codeData => codeData.id === id));
    setCurrentMap(completeMapHistory.find(mapData => mapData.id === id));
  };

  return (
    <div>
      <div className={styles.historyMain}>
        <div className={styles.timeline}>
          <div></div>
          <div className={styles.completeTimeline}>
            {completeMapHistory &&
            completeCodeHistroy &&
            completeCodeHistroy.length > 0 &&
            completeMapHistory.length > 0 ? (
              <CommitHistory
                commitID={commitID}
                codeHistory={completeCodeHistroy}
                mapHistory={completeMapHistory}
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
          <div className={styles.codeMapBox}>
            {BigButton == 'Code' ? (
              <p style={{ color: 'white' }}>{currentCode?.code}</p>
            ) : (
              <p style={{ color: 'white' }}>{currentMap?.map}</p>
            )}
          </div>
          <div className={styles.select}>
            <Button className={styles.selectButton} variant="primary" size="lg">
              Select
            </Button>
          </div>
        </div>
        <div className={styles.dummy}></div>
      </div>
    </div>
  );
}
