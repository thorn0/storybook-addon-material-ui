import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import AddonPanelComponent from './UI/AddonPanel';
import { ADDON_ID, PANEL_ID } from './config';

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.panel,
    title: 'Material-UI',
    render: ({ active, key }) => (
      <AddonPanel key={key} active={active}>
        <AddonPanelComponent api={api} />
      </AddonPanel>
    ),
  });
});
