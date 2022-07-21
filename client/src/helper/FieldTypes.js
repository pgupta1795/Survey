import {
  ArrowDropDownCircle,
  CheckBox,
  LinearScale,
  RadioButtonChecked,
  Subject,
} from '@mui/icons-material';
import { ListItemIcon } from '@mui/material';
import React from 'react';

const FieldTypes = Object.freeze({
  RADIO: 'Multiple Choice',
  CHECKBOX: 'Checkbox',
  DROPDOWN: 'Drop-down',
  TEXT_FIELD: 'Paragraph',
  LINEAR: 'Linear Scale',
});

export const fieldIcons = {
  RADIO: (
    <ListItemIcon sx={{ mr: -2 }}>
      <RadioButtonChecked fontSize="small" color="primary" />
    </ListItemIcon>
  ),
  CHECKBOX: (
    <ListItemIcon sx={{ mr: -2 }}>
      <CheckBox fontSize="small" color="primary" />
    </ListItemIcon>
  ),
  DROPDOWN: (
    <ListItemIcon sx={{ mr: -2 }}>
      <ArrowDropDownCircle fontSize="small" color="primary" />
    </ListItemIcon>
  ),
  TEXT_FIELD: (
    <ListItemIcon sx={{ mr: -2 }}>
      <Subject fontSize="small" color="primary" />
    </ListItemIcon>
  ),
  LINEAR: (
    <ListItemIcon sx={{ mr: -2 }}>
      <LinearScale fontSize="small" color="primary" />
    </ListItemIcon>
  ),
};

export const getKey = (object, value) =>
  Object.keys(object).find((key) => object[key] === value);

export default FieldTypes;
