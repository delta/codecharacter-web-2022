import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CommitHistory from '../CommitTree/CommitHistroy';
import styles from './History.module.css';

export default function History(): JSX.Element {
  const [BigButton, setBigButton] = useState('Code');

  return (
    <div>
      <div className={styles.HistoryMain}>
        <div className={styles.Timeline}>
          <div></div>
          <div className={styles.CompleteTimeline}>
            <CommitHistory />
          </div>
          <div></div>
        </div>
        <div className={styles.CodeView}>
          <div className={styles.CodeMapButton}>
            <ButtonGroup>
              <Button
                className={
                  BigButton == 'Code' ? styles.LargeButton : styles.SmallButton
                }
                onClick={() => {
                  setBigButton('Code');
                }}
              >
                Code
              </Button>
              <Button
                className={
                  BigButton == 'Map' ? styles.LargeButton : styles.SmallButton
                }
                onClick={() => {
                  setBigButton('Map');
                }}
              >
                Map
              </Button>
            </ButtonGroup>
          </div>
          <div className={styles.CodeMapBox}>
            {BigButton == 'Code' ? (
              <h1 style={{ color: 'white' }}>Hello Code-Box</h1>
            ) : (
              <h1 style={{ color: 'white' }}>Hello Map-Box</h1>
            )}
          </div>
          <div className={styles.Select}>
            <Button className={styles.SelectButton} variant="primary" size="lg">
              Select
            </Button>
          </div>
        </div>
        <div className={styles.Dummy}></div>
      </div>
    </div>
  );
}
