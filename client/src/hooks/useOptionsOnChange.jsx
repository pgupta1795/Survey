import { useContext } from 'react';
import { QuestionsContext } from './contexts';

const useOptionsOnChange = () => {
  const { section, setSections } = useContext(QuestionsContext);
  const handle = (text, i, j) =>
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions[i].options[j].text = text;
        return sec;
      })
    );

  return handle;
};

export default useOptionsOnChange;
