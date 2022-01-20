import { MapDesignerComponent } from '@codecharacter-2022/map-designer';
import { RendererComponent } from '@codecharacter-2022/renderer';

export default function Dashboard(): JSX.Element {
  return (
    <main>
      <MapDesignerComponent />
      <RendererComponent />
    </main>
  );
}
