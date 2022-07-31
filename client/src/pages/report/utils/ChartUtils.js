import toast from '../../../app/toast';
import ArrayUtils from '../../../common/utils/ArrayUtils';

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
      const allAnswers = section.response.map(
        (question) => question.options[0].optionText
      );
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
    const answers = userResponse[Object.keys(userResponse)[0]];
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
      const { formData, responseData } = data;
      const formattedRes = formatAnswersBySection(responseData, formData);
      const labels = Object.keys(formattedRes)?.map((sectionName) => {
        const usersSecAvg = getSectionAvgByUser(formattedRes, sectionName);
        series[0].data.push(ArrayUtils.getAverage(usersSecAvg));
        return sectionName;
      });
      // labels = [
      //   // ...labels,
      //   'Strategy and Policy',
      //   'Management and Control',
      //   'Organization and Process',
      //   'People and Culture',
      //   'Information and Technoloy',
      // ];
      console.log({ series, labels });
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
      const { formData, responseData } = data;
      console.log({ formData, responseData });
      // const formattedRes = formatAnswersBySection(responseData, formData);
      // let labels = Object.keys(formattedRes)?.map((sectionName) => {
      //   const usersSecAvg = getSectionAvgByUser(formattedRes, sectionName);
      //   series[0].data.push(ArrayUtils.getAverage(usersSecAvg));
      //   return sectionName;
      // });
      const labels = [
        // ...labels,
        '1',
        '2',
        '3',
        '4',
        '5',
      ];
      console.log({ series, labels });
      return { series, labels };
    } catch (error) {
      console.error(error);
      toast.error(error);
      throw error;
    }
  },
};
