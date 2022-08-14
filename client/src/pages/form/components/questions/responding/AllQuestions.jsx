import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FlexStartBox from '../../../../../common/components/card/FlexStartBox';
import { UserRespondingContext } from '../../../../../hooks/contexts';
import useFormById from '../../../../../hooks/useFormById';
import useMobileStepper from '../../../../../hooks/useMobileStepper';
import ResponseService from '../../../services/ResponseService';
import BasicFormSkeleton from '../../basic/BasicFormSkeleton';
import BasicSectionBox from '../../basic/BasicSectionBox';
import SubmitResponse from '../../button/SubmitResponse';
import RespondingHeaderSection from '../../header/responding/RespondingHeaderSection';
import AllOptions from '../../options/responding/AllOptions';
import QuestionImageView from '../noneditable/QuestionImageView';

const AllQuestions = () => {
  const [loading, setLoading] = useState(true);
  const { formId } = useParams();
  const formData = useFormById(formId);
  const [sectionData, setSectionData] = useState([]);

  const { activeStep, BasicStepper, maxSteps } = useMobileStepper(
    formData?.sections
  );

  const [pendingRes, setPendingRes] = useState();
  const fetchPendingResponse = async () => {
    const pRes = await ResponseService.getPendingResponse();
    setPendingRes(pRes);
    setLoading(false);
  };
  useEffect(() => {
    fetchPendingResponse();
    return () => {
      setPendingRes();
    };
  }, [activeStep]);

  return (
    <Grid sx={{ width: '100%' }}>
      {loading ? (
        <BasicFormSkeleton />
      ) : (
        formData?.sections && (
          <Paper key={formData?.sections[activeStep]?._id}>
            <UserRespondingContext.Provider
              value={{
                section: formData?.sections[activeStep],
                formData,
                sectionData,
                setSectionData,
                pendingRes,
                activeStep,
              }}
            >
              <BasicSectionBox
                section={formData?.sections[activeStep]}
                sections={formData?.sections}
              >
                <Paper
                  sx={{
                    width: '100%',
                    display: 'flex',
                  }}
                  elevation={0}
                >
                  <RespondingHeaderSection
                    sx={{
                      mb: 4,
                    }}
                    name={formData?.sections[activeStep]?.name}
                    description={formData?.sections[activeStep]?.description}
                  />
                </Paper>
              </BasicSectionBox>
              <Grid
                sx={{
                  width: '100%',
                }}
              >
                {formData?.sections[activeStep]?.questions?.map((ques, i) => (
                  <Paper
                    key={`user-res-${ques._id}`}
                    sx={{
                      my: 5,
                      px: 1,
                    }}
                    elevation={0}
                  >
                    <FlexStartBox>
                      <Typography
                        component="div"
                        variant="question"
                        sx={{ mx: 1 }}
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
        )
      )}
      {BasicStepper}
      {activeStep === maxSteps - 1 ? (
        <SubmitResponse formData={formData} sectionData={sectionData} />
      ) : null}
    </Grid>
  );
};

export default AllQuestions;
