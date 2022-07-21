import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { UserRespondingContext } from '../../../../../hooks/contexts';
import QuestionImageView from '../noneditable/QuestionImageView';
import AllOptions from '../../options/responding/AllOptions';
import FlexStartBox from '../../../../../common/components/card/FlexStartBox';
import SubmitResponse from '../../button/SubmitResponse';
import RespondingHeaderSection from '../../header/responding/RespondingHeaderSection';
import { useFormById } from '../../responding';
import BasicSectionBox from '../../basic/BasicSectionBox';
import ResponseService from '../../../services/ResponseService';

const AllQuestions = ({ setIsSubmitted }) => {
  const { formId } = useParams();
  const formData = useFormById(formId);
  const [sectionData, setSectionData] = useState([]);
  const [pendingRes, setPendingRes] = useState();

  const fetchPendingResponse = async () => {
    const pRes = await ResponseService.getPendingResponse();
    setPendingRes(pRes);
  };

  useEffect(() => {
    fetchPendingResponse();
    return () => {
      setPendingRes();
    };
  }, []);

  return (
    <Grid sx={{ width: '100%' }}>
      {formData?.sections?.map((section) => (
        <Paper key={section?._id} sx={{ mb: 10 }}>
          <UserRespondingContext.Provider
            value={{
              section,
              formData,
              sectionData,
              setSectionData,
              pendingRes,
            }}
          >
            <BasicSectionBox section={section} sections={formData?.sections}>
              <Paper sx={{ width: '100%' }}>
                <RespondingHeaderSection
                  sx={{
                    mb: 4,
                  }}
                  name={section?.name}
                  description={section?.description}
                />
              </Paper>
            </BasicSectionBox>
            <Grid sx={{ width: '100%' }}>
              {section?.questions?.map((ques, i) => (
                <Paper
                  key={`user-res-${ques._id}`}
                  sx={{ my: 5, px: 1 }}
                  elevation={1}
                >
                  <FlexStartBox>
                    <Typography
                      component="div"
                      variant="subtitle1"
                      sx={{ ml: '10px' }}
                    >
                      {i + 1}. {ques.text}
                    </Typography>
                    <QuestionImageView question={ques} />
                    <AllOptions question={ques} questionIndex={i} />
                  </FlexStartBox>
                </Paper>
              ))}
            </Grid>
          </UserRespondingContext.Provider>
        </Paper>
      ))}
      <SubmitResponse
        formData={formData}
        setIsSubmitted={setIsSubmitted}
        sectionData={sectionData}
      />
    </Grid>
  );
};

AllQuestions.propTypes = {
  setIsSubmitted: PropTypes.func.isRequired,
};
export default AllQuestions;
