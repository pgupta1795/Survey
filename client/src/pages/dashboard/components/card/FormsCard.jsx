import { Button, Card, CardActions } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useFormById from '../../../../hooks/useFormById';
import { stringToRandomColor } from '../../../../common/utils/CommonUtils';
import FormCardContent from './FormCardContent';
import FormService from '../../../form/services/FormService';
import CreateForm from '../../../form/components/button/CreateForm';

const FormsCard = ({ formId }) => {
  const form = formId ? useFormById(formId) : null;
  const navigate = useNavigate();

  return (
    <Card
      className="card"
      sx={{
        minHeight: '25vh',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: stringToRandomColor(form?.name),
        borderRadius: '0.5em',
        boxShadow: `0 0 5em -1em black`,
        alignItems: `${form ? 'start' : 'center'}`,
        justifyContent: 'center',
      }}
    >
      {form ? (
        <>
          <FormCardContent form={form} />
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              color="inherit"
              onClick={() => {
                navigate(FormService.getFormUrl(formId));
              }}
            >
              <strong>View</strong>
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="inherit"
              onClick={() => {
                navigate(FormService.getFormUrl(formId));
              }}
            >
              <strong>Edit</strong>
            </Button>
          </CardActions>
        </>
      ) : (
        <CreateForm />
      )}
    </Card>
  );
};

FormsCard.defaultProps = {
  formId: () => null,
};

FormsCard.propTypes = {
  formId: PropTypes.string,
};

export default FormsCard;
