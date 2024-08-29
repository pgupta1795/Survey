import { useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { stringToRandomColor } from '../../../../common/utils/CommonUtils';
import useFormById from '../../../../hooks/useFormById';
import CreateForm from '../../../form/components/button/CreateForm';
import FormsCardActions from './actions/FormsCardActions';

const FormsCard = ({ formId }) => {
  const form = formId ? useFormById(formId) : null;
  const theme = useTheme();
  const gradientTheme = `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.light})`;
  const gradientRandom = `linear-gradient(${stringToRandomColor()},${stringToRandomColor()})`;

  return (
    <Card
      className={form ? 'card border-2 border-white border-solid' : 'card'}
      sx={{ background: `${form ? gradientTheme : gradientRandom}` }}
    >
      {form ? (
        <>
          <Grid className="card-head card-ellipse">
            <Typography
              gutterBottom
              variant="body1"
              component="h2"
              sx={{ fontWeight: '500' }}
              className="tracking-wide"
            >
              {form?.name}
            </Typography>
          </Grid>
          <div className="card-content">
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="caption"
                component="p"
                className="card-ellipse"
                title={form?.description}
              >
                {form?.description}
              </Typography>
            </CardContent>
            <FormsCardActions formId={formId} />
          </div>
        </>
      ) : (
        <CreateForm />
      )}
    </Card>
  );
};

FormsCard.defaultProps = {
  formId: '',
};

FormsCard.propTypes = {
  formId: PropTypes.string,
};

export default FormsCard;
