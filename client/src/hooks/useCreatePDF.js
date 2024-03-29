import html2canvas from 'html2canvas';
import { jsPDF as JSPdf } from 'jspdf';
import React, { useEffect, useRef, useState } from 'react';
import toast, { SUCCESS } from '../app/toast';
import Back from '../assets/images/report/BACK.jpg';
import Front from '../assets/images/report/FRONT.jpg';
import Constants from '../helper/Constants';
import EmailService from '../pages/form/services/EmailService';
import Report from '../pages/report/Report';

const TYPE = 'PNG';
const PROC = 'FAST';

const useCreatePDF = (sendEmail, pUserId = null) => {
  const toastId = useRef(null);
  const [reportSent, setReportSent] = useState(false);
  const [view, setView] = useState();

  const getImage = async (id, scale = 3) => {
    const data = await html2canvas(document.querySelector(id), {
      scale,
      onclone(clonedDoc) {
        clonedDoc.querySelector(id).style.display = 'block';
      },
    });
    const img = data.toDataURL('image/png');
    return img;
  };

  const getDimension = (pdf, image) => {
    const imageProps = pdf.getImageProperties(image);
    const width = pdf.internal.pageSize.getWidth();
    const height = (imageProps.height * width) / imageProps.width;
    // const height = pdf.internal.pageSize.getHeight();
    console.log(width, height);
    return [width, height];
  };

  const createPDF = async () => {
    const pdf = new JSPdf({
      orientation: 'p',
      unit: 'mm',
      format: [297, 210],
      putOnlyUsedFonts: true,
    });
    // 1st page

    // 2nd page
    const header = await getImage('#report');
    const [wh, hh] = getDimension(pdf, header);
    pdf.addImage(Front, TYPE, 0, 0, wh, hh, undefined, PROC);
    pdf.addPage();
    pdf.addImage(header, TYPE, 0, 0, wh, hh, undefined, PROC);
    // 3rd page
    pdf.addPage();
    pdf.addImage(Back, TYPE, 0, 0, wh, hh, undefined, PROC);
    console.log(Constants.PDF_CREATED);
    return pdf;
  };

  const savePDF = async () => {
    try {
      toastId.current = toast.info('Downloading');
      setTimeout(async () => {
        const pdf = await createPDF();
        pdf.save('TECHNIA-PLM_MATURITY_REPORT.pdf');
        toast.update(toastId.current, 'Downloaded', {
          type: SUCCESS,
        });
      }, 0);
    } catch (error) {
      toast.error(error);
      console.error(error);
      throw error;
    }
  };

  const sendPDF = async () => {
    try {
      const pdf = await createPDF();
      const response = await EmailService.sendPDFEmail(pdf);
      console.log('PDF UPLOADED and SENT via email', response);
      setReportSent(true);
      toast.success('Report Sent via email');
    } catch (error) {
      toast.error(error);
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    setView(
      <div id="generate-report">
        <Report pUserId={pUserId} display="none" />
      </div>
    );
  }, [pUserId]);

  useEffect(() => {
    if (!reportSent && sendEmail) {
      const send = () => {
        setTimeout(() => {
          sendPDF();
        }, 3000);
      };
      document
        .getElementById('generate-report')
        ?.addEventListener('load', send());
    }
  }, [view]);

  return {
    savePDF,
    Report: view,
    sendPDF,
  };
};

export default useCreatePDF;
