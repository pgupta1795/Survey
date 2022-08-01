import { Grid } from '@mui/material';
import React from 'react';

const text =
  'Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. Versions of the Lorem ipsum text have been used intypesetting at least since the 1960s, when it was popularized byadvertisements for Letraset transfer sheets.[1] Lorem ipsum was introducedto the digital world in the mid-1980s, when Aldus employed it in graphicand word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.[6]';

const ReportFooter = ({ ...props }) => {
  console.log('');
  return <Grid {...props}>{text}</Grid>;
};

export default ReportFooter;
