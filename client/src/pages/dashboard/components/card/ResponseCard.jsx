import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../../common/utils/CommonUtils';
import { getFormDataById } from '../../../../features/forms';
import ResponseService from '../../../form/services/ResponseService';
import { Constants } from '../../../signup';

const importAll = (r) => r.keys().map(r);

const importedImages = importAll(
  require.context(
    '../../../../assets/images/survey',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const ResponseCard = ({ formId, status, responseId, completedDate }) => {
  const form = useSelector((state) => getFormDataById(state, formId));

  const getTextColor = () => {
    if (status === Constants.COMPLETED) return 'text-blue';
    if (status === Constants.PENDING) return 'text-red-700';
    return 'text-green-900';
  };

  const getBGColor = () => {
    if (status === Constants.COMPLETED) return 'bg-aliceblue';
    if (status === Constants.PENDING) return 'bg-red-300';
    return 'bg-green-300';
  };

  return (
    <Link
      className="drop-shadow-md hover:drop-shadow-xl w-full h-[13.44rem] my-2 text-inherit"
      to={`${ResponseService.getViewFormUrl(formId, form?.type, responseId)}`}
    >
      <div className="relative w-full h-[13.44rem] flex flex-col font-medium">
        <img
          className="w-full h-[13.41rem] object-cover"
          alt="response"
          src={
            importedImages[Math.floor(importedImages.length * Math.random())]
          }
        />
        <div className="absolute top-[0rem] rounded-t-10xs rounded-b-none bg-blue w-full h-[0.44rem]" />
        <div className="flex justify-between bg-white w-full absolute bottom-0 gap-2 px-2 pt-1">
          <div className="flex flex-col gap-y-2 text-xs">
            <span className="tracking-wide">{form?.name}</span>
            <span
              className={`self-start inline-flex flex-auto rounded-sm px-1 ${getBGColor()} text-[0.65rem] font-extrabold ${getTextColor()}`}
            >
              {status?.toUpperCase()}
            </span>
          </div>
          <div className="text-[0.65rem] self-end">{completedDate}</div>
        </div>
      </div>
    </Link>
  );
};

ResponseCard.defaultProps = {
  status: Constants.TO_DO,
  responseId: null,
  completedDate: formatDate(),
};

ResponseCard.propTypes = {
  formId: PropTypes.string.isRequired,
  status: PropTypes.string,
  responseId: PropTypes.string,
  completedDate: PropTypes.string,
};

export default ResponseCard;
