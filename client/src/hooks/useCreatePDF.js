import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF as JSPdf } from 'jspdf';
import toast, { SUCCESS } from '../app/toast';
import Report from '../pages/report/Report';
import EmailService from '../pages/form/services/EmailService';

const useCreatePDF = (ID, sendEmail = false) => {
  const toastId = useRef(null);
  const documentId = `#${ID}`;
  const [reportSent, setReportSent] = useState(false);

  const createPDF = async () => {
    const data = await html2canvas(document.querySelector(documentId), {
      scale: 3,
      onclone: (clonedDoc) => {
        clonedDoc.querySelector(documentId).style.display = 'block';
      },
    });
    const img = data.toDataURL('image/png');

    const pdf = new JSPdf('l', 'mm', 'a4', true);
    const imageProps = pdf.getImageProperties(img);
    const width = pdf.internal.pageSize.getWidth();
    const height = (imageProps.height * width) / imageProps.width;

    pdf.text('TECHNIA', 100, 100);
    pdf.addPage();
    pdf.addImage(img, 'PNG', 0, 0, width, height, undefined, 'FAST');
    pdf.addPage();
    pdf.text('THANK YOU', 100, 100);
    console.log('PDF created for email/download');
    return pdf;
  };

  const savePDF = async () => {
    try {
      toastId.current = toast.info('Downloading');
      const pdf = await createPDF();
      pdf.save('TECHNIA-PLM_MATURITY_REPORT.pdf');
      toast.update(toastId.current, 'Downloaded', {
        type: SUCCESS,
      });
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
    if (!reportSent && sendEmail) {
      const send = () => {
        setTimeout(() => {
          sendPDF();
        }, 3000);
      };
      document.getElementById(ID).addEventListener('load', send());
    }
  }, []);

  return {
    savePDF,
    Report: (
      <div id={ID} style={{ display: 'none' }}>
        <Report />
      </div>
    ),
    sendPDF,
  };
};

export default useCreatePDF;
