import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import { CenteredGridBox, useOrganizations, BasicUserForm } from '../index';
import ChangeOrganization from './ChangeOrganization';
import OrganizationView from './OrganizationView';

const ResponseTab = () => {
  const { loading, organizations } = useOrganizations();
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    if (!loading) setOrganization(organizations[0]);
    return () => {
      setOrganization(null);
    };
  }, [loading]);

  return (
    <BasicUserForm>
      <CenteredGridBox>
        {!loading && organizations && organization ? (
          <>
            <OrganizationView organization={organization} />
            <ChangeOrganization
              organization={organization}
              organizations={organizations}
              setOrganization={setOrganization}
            />
          </>
        ) : (
          <CircularProgress />
        )}
      </CenteredGridBox>
    </BasicUserForm>
  );
};

export default ResponseTab;
