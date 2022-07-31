import { Divider, Skeleton } from '@mui/material';
import React from 'react';

const BasicFormSkeleton = () => (
  <div className="create-question-loading-skeleton">
    <Skeleton variant="text" />
    <Skeleton variant="rectangular" height={230} />
    <Divider />
    <Skeleton variant="rectangular" height={150} />
    <Skeleton variant="rectangular" height={150} />
  </div>
);

export default BasicFormSkeleton;
