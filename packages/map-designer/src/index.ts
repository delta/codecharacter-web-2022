import { MapDesigner } from './MapDesigner';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';

const MapDesignerComponent = createComponent(
  React,
  'cc-map-designer',
  MapDesigner,
);

export { MapDesignerComponent };
