import {
  faArrowsAlt,
  faEraser,
  faSave,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import TowerConfig from './config/TowerConfig';
import { events, MapDesignerEvents } from './events/EventEmitter';
import { MapDesigner } from './MapDesigner';

const MapDesignerLayer = createComponent(React, 'cc-map-designer', MapDesigner);

interface MapDesignerComponentProps {
  saveMapCallback: (map: Array<Array<number>>) => void;
  readonly: boolean;
}

const CoinsRemainingText = () => {
  const [coins, setCoins] = React.useState(0);

  React.useEffect(() => {
    const onCoinsUpdated = (coins: number) => {
      setCoins(coins);
      events.removeAllListeners(MapDesignerEvents.COINS_CHANGED);
      events.once(MapDesignerEvents.COINS_CHANGED, onCoinsUpdated);
    };
    events.once(MapDesignerEvents.COINS_CHANGED, onCoinsUpdated);

    return function cleanup() {
      events.removeAllListeners(MapDesignerEvents.COINS_CHANGED);
    };
  }, [coins]);

  return (
    <p
      style={{
        textAlign: 'center',
        margin: '0',
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: '1.5rem',
        padding: '1rem 1rem 0',
      }}
    >
      Coins remaining <br /> {coins}
    </p>
  );
};

export default function MapDesignerComponent(
  props: MapDesignerComponentProps,
): JSX.Element {
  const [mapData, setMapData] = React.useState<Array<Array<number>>>([]);

  React.useEffect(() => {
    const onMapDataUpdated = (map: Array<Array<number>>) => {
      setMapData(map);
      events.removeAllListeners(MapDesignerEvents.MAP_DATA_CHANGED);
      events.once(MapDesignerEvents.MAP_DATA_CHANGED, onMapDataUpdated);
    };
    events.once(MapDesignerEvents.MAP_DATA_CHANGED, onMapDataUpdated);

    return function cleanup() {
      events.removeAllListeners(MapDesignerEvents.MAP_DATA_CHANGED);
    };
  }, [mapData]);

  return !props.readonly ? (
    <>
      <ButtonToolbar
        className="justify-content-evenly"
        style={{
          position: 'absolute',
          padding: '0rem 2rem',
          width: '100%',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <ButtonGroup style={{ pointerEvents: 'auto', padding: '1rem 1rem 0' }}>
          {TowerConfig.towers.map(tower => (
            <OverlayTrigger
              key={`${tower.name}-overlay`}
              placement="bottom"
              delay={{ show: 50, hide: 100 }}
              overlay={props => (
                <Tooltip id={`${tower.name}-tooltip`} {...props}>
                  Name: {tower.name} <br /> Price: {tower.price}
                </Tooltip>
              )}
            >
              <Button
                key={tower.name}
                variant="outline-light"
                onClick={() => {
                  events.emit(MapDesignerEvents.TOWER_SELECTED, tower);
                }}
              >
                <img src={`/assets/${tower.thumbnailAsset}`} alt={tower.name} />
                <br />
                <span>{tower.name}</span>
              </Button>
            </OverlayTrigger>
          ))}
        </ButtonGroup>
        <ButtonGroup style={{ pointerEvents: 'auto', padding: '1rem 1rem 0' }}>
          <Button
            key="move"
            variant="outline-light"
            onClick={() => {
              events.emit(MapDesignerEvents.MOVE_SELECTED);
            }}
          >
            <FontAwesomeIcon size={'2x'} icon={faArrowsAlt} />
            <br />
            <span>Move</span>
          </Button>
          <Button
            key="clear"
            variant="outline-light"
            onClick={() => {
              events.emit(MapDesignerEvents.CLEAR_MAP);
            }}
          >
            <FontAwesomeIcon size={'2x'} icon={faTimesCircle} />
            <br />
            <span>Clear</span>
          </Button>
          <Button
            key="erase"
            variant="outline-light"
            onClick={() => {
              events.emit(MapDesignerEvents.ERASER_SELECTED);
            }}
          >
            <FontAwesomeIcon size={'2x'} icon={faEraser} />
            <br />
            <span>Erase</span>
          </Button>
          <Button
            key="save"
            variant="outline-light"
            onClick={() => props.saveMapCallback(mapData)}
          >
            <FontAwesomeIcon size={'2x'} icon={faSave} />
            <br />
            <span>Save</span>
          </Button>
        </ButtonGroup>
        <CoinsRemainingText />
      </ButtonToolbar>
      <MapDesignerLayer />
    </>
  ) : (
    <div style={{ pointerEvents: 'none' }}>
      <MapDesignerLayer />
    </div>
  );
}
