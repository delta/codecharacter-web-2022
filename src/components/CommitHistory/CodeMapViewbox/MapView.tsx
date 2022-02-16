import {
  MapDesignerComponent,
  MapDesignerUtils,
} from '@codecharacter-2022/map-designer';

interface MapViewBoxProps {
  mapCoordinates: Array<Array<number>>;
}

export default function MapView(props: MapViewBoxProps): JSX.Element {
  return (
    <MapDesignerComponent
      {...MapDesignerUtils.loadMap(props.mapCoordinates)}
    ></MapDesignerComponent>
  );
}
