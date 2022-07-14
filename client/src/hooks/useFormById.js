import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormService from '../pages/form/services/FormService';

const useFormById = (formId) => {
  const [form, setForm] = useState();
  const location = useLocation();

  const fetchForm = async () => {
    const formData = await FormService.getFormById(formId);
    setForm(formData);
  };

  useEffect(() => {
    fetchForm();
    return () => {
      setForm();
    };
  }, [formId, location.pathname]);

  return form;
};

export default useFormById;
