export default {
  getAllQuestions: (formData) =>
    formData?.sections?.flatMap((section) =>
      section?.questions?.map((ques) => ques._id)
    ),

  getAllResponses: (sectionData) =>
    sectionData.flatMap((secData) => secData.response.map((res) => res)),

  hasIncompleteQuestion: (allQuestions, allResponses) => {
    let hasIncompleteQues = false;
    for (let i = 0; i < allQuestions?.length; i += 1) {
      const quesId = allQuestions[i];
      const quesData = allResponses.find((resQ) => resQ?.questionId === quesId);
      if (quesData?.options?.length === 0 || !quesData?.options) {
        hasIncompleteQues = true;
        break;
      }
    }
    return hasIncompleteQues;
  },

  findQuestionById: (formData, questionId, sectionName) =>
    formData.sections
      ?.find((section) => section.name === sectionName)
      ?.questions?.find((ques) => ques._id === questionId),
};
