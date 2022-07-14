import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import FormToolbar from './components/toolbar/FormToolbar';
import TabPanel from './components/tab/TabPanel';
import QuestionsTab from './components/tab/QuestionsTab';
import ResponseTab from './components/tab/ResponseTab';
import SpaceBetweenBox from '../../common/components/card/SpaceBetweenBox';
import BasicUserForm from '../../common/components/form/BasicUserForm';
import './styles/Form.css';

const CreateForm = () => {
  const [tab, setTab] = useState(0);

  return (
    <BasicUserForm key="create-form">
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
    </BasicUserForm>
  );
};

export default CreateForm;
