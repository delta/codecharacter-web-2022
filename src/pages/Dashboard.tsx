import { MapDesignerComponent } from '@codecharacter-2022/map-designer';
import { RendererComponent } from '@codecharacter-2022/renderer';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';

export default function Dashboard(): JSX.Element {
  // initialize the redux hook
  const dispatch = useAppDispatch();

  // dispatch our thunk when component first mounts
  useEffect(() => {
    dispatch(fetchBattleTv());
  }, [dispatch]);

  const saveMapCallback = (map: Array<Array<number>>) => {
    // TODO: Change
    console.log(map);
  };

  return (
    <main>
      <MapDesignerComponent saveMapCallback={saveMapCallback} />
      <RendererComponent />
    </main>
  );
}
