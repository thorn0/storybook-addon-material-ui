import React from 'react';
import Button from '@mui/material/Button';
import { muiTheme } from '../src';
import { overridings as theme1 } from './.themes/customTheme1';
import { overridings as theme2 } from './.themes/customTheme2';
import { overridings as theme3 } from './.themes/customTheme3';
import { overridings as theme4 } from './.themes/customTheme4';
import { overridings as theme5 } from './.themes/customTheme5';

const buttonStyle = {
  margin: 16,
};

export default {
  title: 'Material Custom theme',
  decorators: [muiTheme([theme1, theme2, theme3, theme4, theme5])],
  parameters: {
    backgrounds: [
      { name: 'init', value: '#FFFFFF' },
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' },
    ],
  },
};

const Template = (args) => (
  <div>
    <Button variant="contained" color="primary" style={buttonStyle}>
      Raised primary
    </Button>
    <Button variant="contained" color="secondary" style={buttonStyle}>
      Raised secondary
    </Button>
    <Button variant="contained" style={buttonStyle}>
      Raised default
    </Button>
  </div>
);

export const RaisedButtons = Template.bind({});
RaisedButtons.args = {};

const OutlinedTemplate = (args) => (
  <div>
    <Button variant="outlined" color="primary" style={buttonStyle}>
      Outlined primary
    </Button>
    <Button variant="outlined" color="secondary" style={buttonStyle}>
      Outlined secondary
    </Button>
    <Button variant="outlined" style={buttonStyle}>
      Outlined default
    </Button>
  </div>
);

export const OutlinedButtons = OutlinedTemplate.bind({});
OutlinedButtons.args = {};

const FlatTemplate = (args) => (
  <div>
    <Button variant="text" color="primary" style={buttonStyle}>
      Flat primary
    </Button>
    <Button variant="text" color="secondary" style={buttonStyle}>
      Flat secondary
    </Button>
    <Button variant="text" style={buttonStyle}>
      Flat default
    </Button>
  </div>
);

export const FlatButtons = FlatTemplate.bind({});
FlatButtons.args = {};

export const CloneCustomTheme = (args) => (
  <div>
    <Button variant="contained" color="primary" style={buttonStyle}>
      Raised primary
    </Button>
    <Button variant="contained" color="secondary" style={buttonStyle}>
      Raised secondary
    </Button>
    <Button variant="contained" style={buttonStyle}>
      Raised default
    </Button>
  </div>
);
CloneCustomTheme.args = {};
