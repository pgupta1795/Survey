import Done from '@mui/icons-material/Done';
import Settings from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { topScroll } from '../../../../common/components/layout/ScrollToTop';
import {
  getCurrentOrganization,
  getError,
  getOrganizations,
  getStatus,
  setCurrentOrganization,
} from '../../../../features/users';

const ChangeOrganization = () => {
  const dispatch = useDispatch();
  const organizations = useSelector(getOrganizations);
  const organization = useSelector(getCurrentOrganization);
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  if (status === 'loading') return <div>LOADING...</div>;
  if (status === 'failed') return <div>{error}</div>;

  return (
    <SpeedDial
      ariaLabel="Change Organization"
      sx={{ position: 'fixed', left: 10, bottom: '5rem' }}
      icon={<SpeedDialIcon icon={<Settings />} />}
    >
      {organizations
        ? organizations?.map((company) => {
            const name = Object.keys(company)[0];
            const current = Object.keys(organization)[0];
            return (
              <SpeedDialAction
                key={name}
                FabProps={{ variant: 'extended' }}
                icon={
                  <Button
                    startIcon={current === name ? <Done /> : null}
                    variant="text"
                    component="div"
                  >
                    {name}
                  </Button>
                }
                tooltipTitle={name}
                onClick={() => {
                  dispatch(setCurrentOrganization(company));
                  topScroll();
                }}
              />
            );
          })
        : null}
    </SpeedDial>
  );
};

export default ChangeOrganization;
