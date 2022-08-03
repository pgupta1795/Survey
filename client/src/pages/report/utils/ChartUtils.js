import toast from '../../../app/toast';
import ArrayUtils from '../../../common/utils/ArrayUtils';
import FieldTypes, { getKey } from '../../../helper/FieldTypes';
import Settings from '../../../Settings.json';

const validChartNames = Settings.SECTIONS.map(({ name }) => name);

/**
 * return {
 * SCOPE : [
 *    {USER1: [1,2,3]},
 *    {USER2: [1,2,3]},
 * ],
 * Information : [
 *    {USER1: [1,2,3]},
 *    {USER2: [1,2,3]},
 * ]
 * }
 * formtting all the user responses by section name
 * @param {responseData} responseData
 * @param {formData} formData
 * @return
 */
const formatAnswersBySection = (responseData, formData) => {
  const myRes = {};
  responseData?.forEach(({ userId, sections }) => {
    sections?.forEach((section) => {
      const sectionName = formData.sections.find(
        (sec) => sec._id === section._id
      )?.name;
      const allAnswers = section.response.map((question) => ({
        questionId: question.questionId,
        optionText: question.options[0].optionText,
      }));
      const existingVal = myRes[sectionName];
      myRes[sectionName] = existingVal
        ? [...existingVal, { [userId]: allAnswers }]
        : [{ [userId]: allAnswers }];
    });
  });
  console.log('Formatted Answers By Section : ', myRes);
  return myRes;
};

/**
 * takes average score of a given section of a particular user
 * @param {formattedResponse} formattedResponse
 * @param {Name of section} sectionName
 * @returns
 */
const getSectionAvgByUser = (formattedResponse, sectionName) => {
  const userResponses = formattedResponse[sectionName];
  const usersSecAvg = userResponses?.map((userResponse) => {
    const quesAnswers = userResponse[Object.keys(userResponse)[0]];
    const answers = quesAnswers.map((quesAns) => quesAns.optionText);
    if (!ArrayUtils.isNumberArray(answers)) return null;
    return ArrayUtils.getAverage(answers);
  });
  return usersSecAvg;
};

export default {
  getScoresSeries: (data) => {
    try {
      const series = [
        {
          name: 'Average Score',
          data: [],
        },
      ];
      const labels = [];
      if (!data || !data?.formData || !data?.responseData)
        return { series, labels };
      const { formData, responseData } = data;
      const formattedRes = formatAnswersBySection(responseData, formData);
      Object.keys(formattedRes)?.forEach((sectionName) => {
        if (!validChartNames.includes(sectionName)) return;
        const usersSecAvg = getSectionAvgByUser(formattedRes, sectionName);
        series[0].data.push(ArrayUtils.getAverage(usersSecAvg));
        labels.push(sectionName);
      });
      console.log('ScoresSeries : ', { series, labels });
      return { series, labels };
    } catch (error) {
      console.error(error);
      toast.error(error);
      throw error;
    }
  },

  getMaturitySeries: (data) => {
    try {
      const series = [
        {
          name: 'Average Score',
          data: [1.2, 1.3, 1.4, 1.5, 1.9],
        },
      ];
      const labels = ['1', '2', '3', '4', '5'];
      if (!data || !data?.formData || !data?.responseData)
        return { series, labels };

      const { formData, responseData } = data;
      console.log({ formData, responseData });
      return { series, labels };
    } catch (error) {
      console.error(error);
      toast.error(error);
      throw error;
    }
  },

  getQuestionAnswerSeries: (data) => {
    console.log({ data });
    const series = [
      {
        name: 'Answers',
        data: [],
      },
    ];
    const labels = [];
    if (!data || !data?.formData || !data?.responseData)
      return { series, labels };
    const { formData, responseData, activeQuestion, activeSection } = data;
    const formattedRes = formatAnswersBySection(responseData, formData);
    const answers = formattedRes[activeSection?.name]?.map((userRes) => {
      const quesAnswers = userRes[Object.keys(userRes)[0]];
      return quesAnswers.find(
        (quesAns) => quesAns.questionId === activeQuestion._id
      )?.optionText;
    });

    if (activeQuestion.type === getKey(FieldTypes, FieldTypes.TEXT_FIELD)) {
      answers?.forEach((ans) => {
        const count = ArrayUtils.getElementCount(answers, ans);
        series[0].data.push(count);
        labels.push(ans);
      });
      return { series, labels };
    }

    activeQuestion.options.forEach(({ text }) => {
      const count = ArrayUtils.getElementCount(answers, text);
      series[0].data.push(count);
      labels.push(text);
    });
    console.log(`For Question ${activeQuestion._id} : `, { series, labels });
    return { series, labels };
  },
};
