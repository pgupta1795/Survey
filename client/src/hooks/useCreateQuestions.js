import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Constants from '../helper/Constants';
import { UserFormContext } from './contexts';

const useCreateQuestions = () => {
  const formData = useContext(UserFormContext);
  const [questions, setQuestions] = useState([
    {
      _id: uuidv4(),
      ...Constants.DEFAULT_QUESTION,
      options: [
        { _id: uuidv4(), ...Constants.DEFAULT_OPTION_1 },
        { _id: uuidv4(), ...Constants.DEFAULT_OPTION_2 },
      ],
    },
  ]);
  const [openUploadImagePop, setOpenUploadImagePop] = useState(false);
  const [imageContextData, setImageContextData] = useState({
    question: null,
    option: null,
  });

  useEffect(() => {
    if (!formData.questions) return;
    if (formData.questions.length !== 0) setQuestions(formData.questions);
  }, [formData]);

  const expandCloseAll = () => {
    const qs = [...questions];
    for (let j = 0; j < qs.length; j += 1) {
      qs[j].open = false;
    }
    setQuestions(qs);
  };

  const uploadImage = (i, j) => {
    setImageContextData({
      question: i,
      option: j,
    });
    setOpenUploadImagePop(true);
  };

  return [
    questions,
    setQuestions,
    expandCloseAll,
    uploadImage,
    imageContextData,
    openUploadImagePop,
    setOpenUploadImagePop,
  ];
};

export default useCreateQuestions;
