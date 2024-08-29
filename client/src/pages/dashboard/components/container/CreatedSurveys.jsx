import { Container, Grid } from '@mui/material';

import React from 'react';
import { useSelector } from 'react-redux';
import { getAllFormIds, getError, getStatus } from '../../../../features/forms';
import FormsCard from '../card/FormsCard';
import CardHeader from '../header/CardHeader';

const CreatedSurveys = () => {
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const allFormIds = useSelector(getAllFormIds);

  if (status === 'loading') return <div>LOADING...</div>;

  if (status === 'failed') return <div>{error}</div>;

  return (
    <div className="mt-2 pt-[2.5rem_!important]">
      <CardHeader text="Created Surveys" />
      <Container sx={{ py: 2 }} maxWidth="md" className="card-container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <FormsCard />
          </Grid>
          {allFormIds?.map((form) => (
            <Grid item key={`${form}`} xs={12} sm={6} md={4}>
              <FormsCard formId={form} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CreatedSurveys;
