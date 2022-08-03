import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Constants from '../helper/Constants';
import { UserFormContext } from './contexts';

const useFormSections = (setLoading) => {
  const formData = useContext(UserFormContext);
  const [sections, setSections] = useState([
    {
      _id: uuidv4(),
      ...Constants.DEFAULT_SECTION,
      questions: [
        {
          _id: uuidv4(),
          ...Constants.DEFAULT_QUESTION,
          options: [
            { _id: uuidv4(), ...Constants.DEFAULT_OPTION_1 },
            { _id: uuidv4(), ...Constants.DEFAULT_OPTION_2 },
          ],
        },
      ],
    },
  ]);

  const [openUploadImagePop, setOpenUploadImagePop] = useState(false);
  const [imageContextData, setImageContextData] = useState({
    question: null,
    option: null,
  });

  useEffect(() => {
    if (!formData?.sections) return;
    if (formData.sections.length !== 0) setSections(formData.sections);
    setLoading(false);
  }, [formData]);

  const expandCloseAll = () => {
    const newSections = [...sections].map((sec) => {
      for (let j = 0; j < sec.questions.length; j += 1) {
        sec.questions[j].open = false;
      }
      return sec;
    });
    setSections(newSections);
  };

  const uploadImage = (i, j) => {
    setImageContextData({
      question: i,
      option: j,
    });
    setOpenUploadImagePop(true);
  };

  return [
    sections,
    setSections,
    expandCloseAll,
    uploadImage,
    imageContextData,
    openUploadImagePop,
    setOpenUploadImagePop,
  ];
};

export default useFormSections;
