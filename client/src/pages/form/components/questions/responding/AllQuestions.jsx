import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FlexStartBox from '../../../../../common/components/card/FlexStartBox';
import { topScroll } from '../../../../../common/components/layout/ScrollToTop';
import { UserRespondingContext } from '../../../../../hooks/contexts';
import useFormById from '../../../../../hooks/useFormById';
import useMobileStepper from '../../../../../hooks/useMobileStepper';
import ResponseService from '../../../services/ResponseService';
import BasicFormSkeleton from '../../basic/BasicFormSkeleton';
import SubmitResponse from '../../button/SubmitResponse';
import RespondingHeaderSection from '../../header/responding/RespondingHeaderSection';
import AllOptions from '../../options/responding/AllOptions';

const AllQuestions = () => {
  const [loading, setLoading] = useState(true);
  const { formId } = useParams();
  const formData = useFormById(formId);
  const [sectionData, setSectionData] = useState([]);
  const [pendingRes, setPendingRes] = useState();
  const { activeStep, BasicStepper, maxSteps, handleStepChange } =
    useMobileStepper(formData?.sections);

  const fetchPendingResponse = async () => {
    const pRes = await ResponseService.getPendingResponse();
    setPendingRes(pRes.find((res) => res.formId === formId));
    setLoading(false);
  };

  useEffect(() => {
    fetchPendingResponse();
    return () => {
      setPendingRes();
    };
  }, [activeStep]);

  useEffect(() => {
    const updateDots = (i) => {
      topScroll();
      handleStepChange(i);
    };
    const backBtn = document.getElementById('back-btn');
    const allDots = backBtn?.nextSibling?.childNodes;
    allDots?.forEach((dot, i) => {
      dot.classList.add('cursor-pointer');
      dot?.addEventListener('click', updateDots.bind(null, i));
    });

    return () => {
      allDots?.forEach((dot, i) => {
        dot.classList.remove('cursor-pointer');
        dot?.removeEventListener('click', updateDots.bind(null, i));
      });
    };
  }, [activeStep, BasicStepper, maxSteps]);

  return (
    <Grid
      sx={{ width: '100%' }}
      className="after:content-[''] after:w-full after:h-[2.10rem] after:block after:bg-responseFooter after:bg-no-repeat after:bg-[bottom_0rem_center]"
    >
      {loading ? (
        <BasicFormSkeleton />
      ) : (
        formData?.sections && (
          <Paper
            sx={{ borderRadius: 0 }}
            key={formData?.sections[activeStep]?._id}
            className="px-[3.44rem] py-[1.75rem]"
          >
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
              <RespondingHeaderSection
                name={formData?.sections[activeStep]?.name}
                description={formData?.sections[activeStep]?.description}
              />
              <Grid sx={{ width: '100%' }}>
                {formData?.sections[activeStep]?.questions?.map((ques, i) => (
                  <div className="px-1 my-2" key={`user-res-${ques._id}`}>
                    <FlexStartBox>
                      <AllOptions question={ques} questionIndex={i} />
                    </FlexStartBox>
                  </div>
                ))}
              </Grid>
            </UserRespondingContext.Provider>
            <div className="w-full inline-flex flex-col justify-center items-center">
              {BasicStepper}
              <SubmitResponse
                formData={formData}
                sectionData={sectionData}
                activeStep={activeStep}
                maxSteps={maxSteps}
              />
            </div>
          </Paper>
        )
      )}
    </Grid>
  );
};

export default AllQuestions;
