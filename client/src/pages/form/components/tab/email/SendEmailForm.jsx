import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Constants } from '..';
import toast, { SUCCESS } from '../../../../../app/toast';
import useValidateFormField from '../../../../../hooks/useValidateFormField';
import useViewFormUrl from '../../../../../hooks/useViewFormUrl';
import { SubmitButton } from '../../../../login/components/form';
import EmailService from '../../../services/EmailService';
import EmailField from './EmailField';

const SendEmailForm = ({ onClose }) => {
  const toastId = useRef(null);
  const fullURL = useViewFormUrl();
  const { errorFields, helperText, hasError } = useValidateFormField();

  const validateField = (data) => {
    const toHasError = hasError(data, Constants.TO);
    const subHasError = hasError(data, Constants.SUBJECT);
    const messageHasError = hasError(data, Constants.MESSAGE);
    return toHasError || subHasError || messageHasError;
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      toastId.current = toast.info(Constants.SENDING);
      let data = new FormData(event.target);
      if (!data) return;
      data = Object.fromEntries(data);
      data.formUrl = fullURL;
      if (validateField(data)) return;
      console.log(data);
      const response = await EmailService.sendForm(data);
      if (!response) {
        toast.error(Constants.ERROR_SEND_FORM);
        return;
      }
      toast.update(toastId.current, Constants.MAIL_SENT, {
        type: SUCCESS,
      });
      onClose();
    } catch (err) {
      console.error(err);
      toast.error(err);
      onClose();
    }
  };

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="question">Mail</Typography>
      <Stack
        direction="column"
        spacing={4}
        component="form"
        noValidate
        onSubmit={(e) => handleSubmit(e)}
      >
        <EmailField
          name={Constants.TO}
          error={errorFields.includes(Constants.TO)}
          helperText={errorFields.includes(Constants.TO) ? helperText : ''}
        />
        <EmailField
          name={Constants.SUBJECT}
          error={errorFields.includes(Constants.SUBJECT)}
          helperText={errorFields.includes(Constants.SUBJECT) ? helperText : ''}
          defaultValue={`TECHNIA : ${Constants.DEFAULT_FORM.name}`}
        />
        <EmailField
          name={Constants.MESSAGE}
          error={errorFields.includes(Constants.MESSAGE)}
          helperText={errorFields.includes(Constants.MESSAGE) ? helperText : ''}
          defaultValue={Constants.DEFAULT_MESSAGE}
        />
        <SubmitButton variant="outlined">
          <Typography noWrap variant="button">
            Send
          </Typography>
        </SubmitButton>
      </Stack>
    </Stack>
  );
};

SendEmailForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SendEmailForm;
