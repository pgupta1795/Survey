import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import toast from '../../app/toast';
import { getCurrentUser } from '../../auth/services/AuthService';
import SubmitButton from '../../common/components/button/SubmitButton';
import { ImageUploadModal } from '../form/components/tab';
import Email from '../login/components/fields/Email';
import Organization from '../login/components/fields/Organization';
import Username from '../login/components/fields/Username';
import UserService from '../login/services/UserService';

const Profile = () => {
  const user = getCurrentUser();
  const [loading, setLoading] = useState(false);

  const [openUploadImagePop, setOpenUploadImagePop] = useState(false);
  const [imageData, setImageData] = useState(user.image || '');
  const updateImageLink = (link) => {
    link = link.replace('server', window.location.hostname);
    console.log(link);
    setImageData(link);
  };

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      let data = new FormData(event.target);
      if (!data) return;
      data = { ...Object.fromEntries(data), image: imageData };
      await UserService.updateDetails(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  return (
    <main className="App">
      <Container maxWidth="xs" component={Paper} sx={{ mt: 5 }}>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            mt: 1,
            pt: 5,
            gap: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              maxWidth: 'xs',
              // bgcolor: 'divider',
              height: 200,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            elevation={0}
          >
            <CardActionArea
              onClick={() => {
                setOpenUploadImagePop(true);
              }}
              sx={{ width: '400' }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {imageData ? (
                  <CardMedia
                    component="img"
                    height="140"
                    image={imageData}
                    alt="Upload Company Image"
                    sx={{ width: '400' }}
                  />
                ) : (
                  <Avatar sx={{ width: 140, height: 140 }} />
                )}
                <Button size="large" component="div">
                  Upload Company Image
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Organization defaultValue={user.organization} />
          <Username defaultValue={user.name} />
          <Email defaultValue={user.email} />
          <SubmitButton variant="outlined">
            {loading ? <CircularProgress /> : 'EDIT DETAILS'}
          </SubmitButton>
        </Box>
        <ImageUploadModal
          handleImagePopOpen={openUploadImagePop}
          handleImagePopClose={() => setOpenUploadImagePop(false)}
          contextData={imageData}
          updateImageLink={updateImageLink}
        />
      </Container>
    </main>
  );
};

export default Profile;
