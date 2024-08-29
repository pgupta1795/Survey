import { useParams } from 'react-router-dom';
import ResponseService from '../pages/form/services/ResponseService';
import useFormById from './useFormById';

const useViewFormUrl = () => {
  const { formId } = useParams();
  const form = useFormById(formId);
  const url = ResponseService.getViewFormUrl(formId, form?.type);
  const fullURL = `${window.location.protocol}//${window.location.host}${url}`;
  return fullURL;
};

export default useViewFormUrl;
