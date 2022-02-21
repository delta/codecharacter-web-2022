import { MapDesignerComponent } from '@codecharacter-2022/map-designer';
import { MapApi } from '@codecharacter-2022/client';
import Toast from 'react-hot-toast';
import { apiConfig, ApiError } from '../../api/ApiConfig';

const MapDesigner: React.FunctionComponent = () => {
  const saveMapCallback = (map: Array<Array<number>>) => {
    const mapAPI = new MapApi(apiConfig);
    mapAPI
      .updateLatestMap({
        map: JSON.stringify(map),
        lock: false,
      })
      .then(() => {
        Toast.success('Map Saved');
      })
      .catch(error => {
        if (error instanceof ApiError) {
          Toast.error(error.message);
        }
      });
  };
  return (
    <MapDesignerComponent saveMapCallback={saveMapCallback} readonly={false} />
  );
};

export default MapDesigner;
