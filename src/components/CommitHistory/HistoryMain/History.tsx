import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CommitHistory from '../CommitTree/CommitHistroy';
import './History.css';

export default function History(): JSX.Element {
  const [BigButton, setBigButton] = useState('Code');

  return (
    <div>
      <div className="HistoryMain">
        <div className="timeline">
          <div></div>
          <div className="completeTimeline">
            <CommitHistory />
          </div>
          <div></div>
        </div>
        <div className="codeview">
          <div className="CodeMapButton">
            <ButtonGroup>
              <Button
                className={BigButton == 'Code' ? 'LargeButton' : 'SmallButton'}
                onClick={() => {
                  setBigButton('Code');
                }}
              >
                Code
              </Button>
              <Button
                className={BigButton == 'Map' ? 'LargeButton' : 'SmallButton'}
                onClick={() => {
                  setBigButton('Map');
                }}
              >
                Map
              </Button>
            </ButtonGroup>
          </div>
          <div className="CodeMapBox">
            {BigButton == 'Code' ? (
              <h1 style={{ color: 'white' }}>Hello Code-Box</h1>
            ) : (
              <h1 style={{ color: 'white' }}>Hello Map-Box</h1>
            )}
          </div>
          <div className="Select">
            <Button className="SelectButton" variant="primary" size="lg">
              Select
            </Button>
          </div>
        </div>
        <div className="dummy"></div>
      </div>
    </div>
  );
}
