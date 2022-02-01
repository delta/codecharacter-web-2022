import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CommitHistory from '../CommitTree/CommitHistroy';
import styles from './History.module.css';

export default function History(): JSX.Element {
  const [BigButton, setBigButton] = useState('Code');

  return (
    <div>
      <div className={styles.historyMain}>
        <div className={styles.timeline}>
          <div></div>
          <div className={styles.completeTimeline}>
            <CommitHistory />
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
              <h1 style={{ color: 'white' }}>Hello Code-Box</h1>
            ) : (
              <h1 style={{ color: 'white' }}>Hello Map-Box</h1>
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
