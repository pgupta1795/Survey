import { Container, Grid } from '@mui/material';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { formatDate } from '../../../../common/utils/CommonUtils';
import {
  getAllFormIds,
  getError as getFormsError,
  getStatus as getFormsStatus,
} from '../../../../features/forms';
import {
  fetchResponseByUserId,
  getError,
  getResponsesByUser,
  getStatus,
} from '../../../../features/userResponse';
import { Constants } from '../../../signup';
import ResponseCard from '../card/ResponseCard';
import CardHeader from '../header/CardHeader';

const MySurveys = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const formsStatus = useSelector(getFormsStatus);
  const formsError = useSelector(getFormsError);
  const userResponses = useSelector(getResponsesByUser);
  const allFormIds = useSelector(getAllFormIds);

  useEffect(() => {
    dispatch(fetchResponseByUserId());
  }, [location.pathname]);

  if (status === 'loading' || formsStatus === 'loading')
    return <div>LOADING...</div>;

  if (status === 'failed') return <div>{error}</div>;

  if (formsStatus === 'failed') return <div>{formsError}</div>;

  return (
    <div className="mt-2 pt-[2.5rem_!important]">
      <CardHeader text="My Surveys" />
      <Container sx={{ py: 2 }} maxWidth="md" className="card-container">
        <Grid container spacing={4}>
          {userResponses?.map(({ formId, _id, completed, updatedAt }) => {
            if (!allFormIds?.find((id) => id === formId)) return null;
            return (
              <Grid item xs={12} sm={6} md={4} key={_id}>
                <ResponseCard
                  formId={formId}
                  responseId={_id}
                  status={completed ? Constants.COMPLETED : Constants.PENDING}
                  completedDate={`${formatDate(updatedAt)}`}
                />
              </Grid>
            );
          })}
          {allFormIds
            .filter(
              (fId) =>
                ![
                  ...new Set(userResponses?.map(({ formId }) => formId)),
                ].includes(fId)
            )
            ?.map((fId) => (
              <Grid item xs={12} sm={6} md={4} key={fId}>
                <ResponseCard formId={fId} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MySurveys;
