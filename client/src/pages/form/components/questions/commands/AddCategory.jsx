import { FormControl, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { QuestionsContext } from '../../../../../hooks/contexts';
import Settings from '../../../../../Settings.json';

const AddCategory = ({ questionIndex }) => {
  const { section, setSections } = useContext(QuestionsContext);
  const categories = {};
  Settings.CATEGORY.forEach((category) => {
    categories[category] = category;
  });
  const [value, setValue] = useState(section.questions[questionIndex].category);
  const handleChange = (event) => setValue(event.target.value);

  useEffect(() => {
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions[questionIndex].category = value;
        return sec;
      })
    );

    return () => {
      setSections((prev) => prev);
    };
  }, [value]);

  return (
    <div className="flex-box-display">
      <FormControl fullWidth size="small">
        <Select value={value} onChange={handleChange}>
          {Object.keys(categories).map((key) => (
            <MenuItem value={key} key={key}>
              {categories[key]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

AddCategory.propTypes = {
  questionIndex: PropTypes.number.isRequired,
};
export default AddCategory;
