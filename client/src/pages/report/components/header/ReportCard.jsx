import Card from '@mui/material/Card';
import React from 'react';
import footer from '../../../../assets/sections/layer-12.svg';
import Constants from '../../../../helper/Constants';
import SectionImage from '../basic/SectionImage';

const ReportCard = () => (
  <div className="flex justify-around text-center items-start w-full px-4 relative pb-6 overflow-hidden mt-4 bg-white">
    {Constants.SECTIONS?.map((section) => (
      <Card
        elevation={0}
        key={section.name}
        sx={{ width: '100%', height: 'auto', background: 'white' }}
      >
        <SectionImage name={section.name} />
        <div className="inline-flex flex-col p-1 gap-2 pb-6 text-black text-[10px]">
          <p className="m-0 text-[9px]">
            <b>{section.name}</b>
          </p>
          <p className="m-0 font-medium">{section.description}</p>
        </div>
      </Card>
    ))}
    <img
      className="absolute bottom-0 left-[7.5rem] w-[51.19rem] scale-150"
      alt="footer"
      src={footer}
    />
  </div>
);

export default ReportCard;
