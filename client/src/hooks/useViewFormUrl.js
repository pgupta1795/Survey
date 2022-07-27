import { useParams } from 'react-router-dom';
import ResponseService from '../pages/form/services/ResponseService';

const useViewFormUrl = () => {
  const { formId } = useParams();
  const url = ResponseService.getViewFormUrl(formId);
  const fullURL = `${window.location.protocol}//${window.location.host}${url}`;
  return fullURL;
};

export default useViewFormUrl;
