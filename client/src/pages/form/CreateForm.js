import React, { lazy, Suspense, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import FormToolbar from './components/toolbar/FormToolbar';
import TabPanel from './components/tab/TabPanel';
import SpaceBetweenBox from '../../common/components/card/SpaceBetweenBox';
import BasicUserForm from '../../common/components/form/BasicUserForm';
import './styles/Form.css';

const QuestionsTab = lazy(() => import('./components/tab/QuestionsTab'));
const ResponseTab = lazy(() => import('./components/tab/ResponseTab'));

const CreateForm = () => {
  const [tab, setTab] = useState(0);

  return (
    <BasicUserForm key="create-form">
      <Suspense>
        <SpaceBetweenBox>
          <Tabs
            value={tab}
            onChange={(e, newValue) => setTab(newValue)}
            indicatorColor="primary"
            textColor="primary"
            sx={{
              flexGrow: 1,
            }}
          >
            <Tab label="Questions" />
            <Tab label="Responses" />
          </Tabs>
          <Box sx={{ flexGrow: 1 }} />
          <FormToolbar />
        </SpaceBetweenBox>
        <div>
          <TabPanel value={tab} index={0}>
            <QuestionsTab />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <ResponseTab />
          </TabPanel>
        </div>
      </Suspense>
    </BasicUserForm>
  );
};

export default CreateForm;
