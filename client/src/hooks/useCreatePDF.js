import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF as JSPdf } from 'jspdf';
import toast, { SUCCESS } from '../app/toast';
import EmailService from '../pages/form/services/EmailService';
import Report from '../pages/report/Report';
import Constants from '../helper/Constants';

const TYPE = 'PNG';
const PROC = 'FAST';
const UN = undefined;

const useCreatePDF = (sendEmail = false) => {
  const toastId = useRef(null);
  const [reportSent, setReportSent] = useState(false);

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
    return [width, height];
  };

  const createPDF = async () => {
    const pdf = new JSPdf('p', 'mm', 'a4', true);
    // 1st page
    pdf.text('TECHNIA', 100, 100);
    // 2nd page
    const header = await getImage('#report-header');
    const chart1 = await getImage('#report-chart-1', 4);
    const chart2 = await getImage('#report-chart-2', 4);
    const footer = await getImage('#report-footer');
    const [wh, hh] = getDimension(pdf, header);
    const [wf, hf] = getDimension(pdf, footer);
    pdf.addPage();
    pdf.addImage(header, TYPE, 0, 0, wh, hh, UN, PROC);
    pdf.addImage(chart1, TYPE, 0, hh, wh / 2 - 5, hh + 10, UN, PROC);
    pdf.addImage(chart2, TYPE, wh / 2, hh, wh / 2 - 5, hh + 10, UN, PROC);
    pdf.addImage(footer, TYPE, 0, hh + hh + 10, wf, hf, UN, PROC);
    // 3rd page
    pdf.addPage();
    pdf.text('THANK YOU', 100, 100);
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
    if (!reportSent && sendEmail) {
      const send = () => {
        setTimeout(() => {
          sendPDF();
        }, 3000);
      };
      document
        .getElementById('generate-report')
        .addEventListener('load', send());
    }
  }, []);

  return {
    savePDF,
    Report: (
      <div id="generate-report">
        <Report display="none" />
      </div>
    ),
    sendPDF,
  };
};

export default useCreatePDF;
