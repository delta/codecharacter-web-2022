import { Renderer } from './Renderer';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';

const RendererComponent = createComponent(React, 'cc-renderer', Renderer);

export { RendererComponent };
