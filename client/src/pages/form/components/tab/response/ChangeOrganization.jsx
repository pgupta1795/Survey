import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Done, Settings } from '@mui/icons-material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const ChangeOrganization = ({
  organizations,
  organization,
  setOrganization,
}) => (
  <SpeedDial
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'fixed', bottom: 25, right: 25 }}
    icon={<SpeedDialIcon icon={<Settings />} />}
  >
    {organizations?.map((company) => {
      const name = Object.keys(company)[0];
      const current = Object.keys(organization)[0];
      return (
        <SpeedDialAction
          key={name}
          FabProps={{
            variant: 'extended',
          }}
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
          onClick={() => setOrganization(company)}
        />
      );
    })}
  </SpeedDial>
);

ChangeOrganization.propTypes = {
  organizations: PropTypes.array.isRequired,
  setOrganization: PropTypes.func.isRequired,
  organization: PropTypes.object.isRequired,
};
export default ChangeOrganization;
