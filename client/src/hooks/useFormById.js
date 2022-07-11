import { useEffect, useState } from 'react';
import FormService from '../pages/form/services/FormService';

const useFormById = (formId) => {
  const [form, setForm] = useState();

  const fetchForm = async () => {
    const formData = await FormService.getFormById(formId);
    setForm(formData);
  };

  useEffect(() => {
    fetchForm();
    return () => {
      setForm();
    };
  }, [formId]);

  return form;
};

export default useFormById;
