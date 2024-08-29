import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchFormById, getFormDataById, getStatus } from '../features/forms';

const useFormById = (formId) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const form = useSelector((state) => getFormDataById(state, formId));
  const status = useSelector(getStatus);

  useEffect(() => {
    if (status === 'idle' || !form) {
      dispatch(fetchFormById({ formId }));
    }
  }, [formId, location.pathname, dispatch, status, navigate]);

  return form ? JSON.parse(JSON.stringify(form)) : {};
};

export default useFormById;
