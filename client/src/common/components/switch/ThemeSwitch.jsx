import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../../features/theme';
import useMode from '../../../hooks/useMode';
import StyledSwitch from '../../styles/StyledSwitch';

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(useMode() === 'dark');
  const dispatch = useDispatch();

  const themeChange = () => {
    setChecked((previous) => !previous);
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
