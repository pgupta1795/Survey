import { getCurrentUser } from '../../../auth/services/AuthService';
import FieldTypes from '../../../helper/FieldTypes';
import { Constants } from '../../signup';
import ResponseService from '../services/ResponseService';

export const getInitialData = (sec, id, question) => {
  const { _id: secId, response } = sec;
  if (secId !== id) return null;
  const data = {};
  response.forEach(({ questionId, options }) => {
    if (questionId !== question._id) return;
    data.questionId = questionId;
    data.options = options;
  });
  return data;
};

export const getSectionResponse = (
  sectionData,
  sIndex,
  data,
  type,
  isChecked
) => {
  const { questionId, options } = data;
  const sqIndex = [...sectionData][sIndex].response.findIndex(
    (resData) => resData.questionId === questionId
  );
  let newSectionResponse = [...sectionData][sIndex].response;
  if (sqIndex === -1) {
    newSectionResponse.push(data);
    return newSectionResponse;
  }
  newSectionResponse = newSectionResponse.map((questionOptionData) => {
    const { questionId: qId, options: opts } = questionOptionData;
    if (qId !== questionId) return questionOptionData;
    let newOptions = options;
    if (FieldTypes.CHECKBOX === type) {
      if (!isChecked) {
        newOptions = opts.filter((opt) => opt.optionId !== options[0].optionId);
      } else {
        newOptions = [...opts, ...options];
      }
    }
    return { questionId, options: newOptions };
  });
  return newSectionResponse;
};

export const getNewSectiondata = (sectionData, id, data, type, isChecked) => {
  const sIndex = [...sectionData]?.findIndex((secData) => secData._id === id);
  if (sIndex === -1) {
    return [
      ...sectionData,
      {
        _id: id,
        response: [data],
      },
    ];
  }
  const newSectionResponse = getSectionResponse(
    sectionData,
    sIndex,
    data,
    type,
    isChecked
  );
  const newSectionData = [...sectionData].map((sec) => {
    if (sec._id !== id) return sec;
    sec.response = newSectionResponse;
    return sec;
  });
  return newSectionData;
};

/**
 * Saves the reponse in database and not submit so that next time user logs-in ,
 * the same incompleted form can be displayed
 * @param {formData} formData
 * @param {sectionData} sectionData
 * @returns
 */
export const saveResponse = async (formData, sectionData) => {
  const userResponseData = {
    formId: formData._id,
    userId: getCurrentUser()?.id,
    sections: sectionData,
    completed: false,
  };
  const data = await ResponseService.submitResponse(userResponseData);
  if (!data) throw new Error(Constants.ERROR_SAVE_FORM);
  return data;
};

/**
 * Creates the reponse in the database
 * @param {formData} formData
 * @param {sectionData} sectionData
 * @returns
 */
export const submitResponse = async (formData, sectionData) => {
  const userResponseData = {
    formId: formData._id,
    userId: getCurrentUser()?.id,
    sections: sectionData,
    completed: true,
  };
  const data = await ResponseService.submitResponse(userResponseData);
  if (!data) throw new Error(Constants.ERROR_SUBMIT_FORM);
  return data;
};
