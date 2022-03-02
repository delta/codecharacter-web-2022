import {
  MapDesignerComponent,
  MapDesignerUtils,
} from '@codecharacter-2022/map-designer';

interface MapViewBoxProps {
  mapCoordinates: Array<Array<number>>;
}

export default function MapView(props: MapViewBoxProps): JSX.Element {
  const saveMapCallback = (newMap: Array<Array<number>>) => {
    return newMap;
  };

  if (props.mapCoordinates.length > 0) {
    return (
      <MapDesignerComponent
        saveMapCallback={saveMapCallback}
        {...MapDesignerUtils.preloadMap(props.mapCoordinates)}
        readonly={true}
      ></MapDesignerComponent>
    );
  } else {
    return <></>;
  }
}
