import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getStoreTheme,
  setStoreTheme,
} from '../../../auth/services/AuthService';
import { changeTheme } from '../../../features/theme';
import useMode from '../../../hooks/useMode';
import StyledSwitch from '../../styles/StyledSwitch';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const systemTheme = useMode();
  const storeTheme = getStoreTheme();
  const [checked, setChecked] = useState(
    storeTheme ? storeTheme === 'dark' : systemTheme === 'dark'
  );

  const themeChange = () => {
    setChecked((previous) => {
      setStoreTheme(!previous ? 'dark' : 'light');
      return !previous;
    });
  };

  useEffect(() => {
    dispatch(changeTheme(checked ? 'dark' : 'light'));
  }, [checked]);

  return (
    <StyledSwitch
      checked={checked}
      onChange={themeChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};

export default ThemeSwitch;
