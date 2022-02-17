import { MapDesignerComponent } from '@codecharacter-2022/map-designer';
import { RendererComponent } from '@codecharacter-2022/renderer';

export default function Dashboard(): JSX.Element {
  const saveMapCallback = (map: Array<Array<number>>) => {
    // TODO: Change
    console.log(map);
  };

  return (
    <main>
      <MapDesignerComponent saveMapCallback={saveMapCallback} readonly={true} />
      <RendererComponent />
    </main>
  );
}
