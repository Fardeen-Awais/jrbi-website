"use client"
import React from 'react';
import jsPDF from 'jspdf';

const generatePDF = (values) => {
    const doc = new jsPDF();
    const { name, email, Service } = values;
  
    
  
    doc.setFontSize(14);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Study: ${Service}`, 10, 40);
  
    doc.setFontSize(14);
    doc.text(`Additional Information:`, 10, 50);


    doc.setTextColor('black')
    doc.setFontSize(12);
    const additionalText = `
  Phase 1 of this study will involve a 60-minute group-audio interview that will take
  place via the Zoom platform. With your consent, interviews will be audio-recorded. Once
  the recording has been transcribed (and verified), the audio recording will be destroyed.
  You should not use your names at any time during the interview. We Care will be taken to 
  protect your identity; you will be given an identification code to use throughout the interview. 
  Additionally, all responses will be anonymized, and you will also be allowed to request that 
  certain responses not be included in the final project.
  
  This study may involve some emotional risks for some of you as you will be required to do some 
  reflection that might trigger certain reasons that contribute to your current engagement in any 
  of the seven forms of risky behaviors. You will have the right to end your participation in the study 
  at any time, for any reason. If you choose to withdraw, all the information you have provided
  will be destroyed.

   1. I confirm that I have read Part A: Invitation to Participate in Research (Phase 1)
      and Part B: About The Study (Participation Information Leaflet) and that I understand
      all of the information stated for the above study. I have had the opportunity to consider
      the information, asked the researcher questions and have had these answered
      satisfactorily. 
   2. I understand that my participation is voluntary and that I have the right to withdraw
      from the study at any time. 
   3. I understand that data collected during the study will be kept anonymized and may
      be looked at by the research team and by individuals from regulatory authorities. I give
      my permission for these individuals to have access to my records. 
   4. I understand that all interviews will be audio-recorded and transcribed, but that
      these will not contain my name or any other identifiable information. I give permission
      for interviews to be recorded. 
   5. I understand that some comments I make during the Zoom-interview may be
      included in a report on the study, but these will not make any of my identity
      identifiable. 
   6. I have read all the information on this informed consent sheet and I provide my
      consent to take part in the above study. 
   7. By submitting this form, I provide my consent to participate in this study. 
  
  Concerns or complaints about the research
  If you have any concerns about any aspect of this study, you may contact me, the primary researcher of this study, at joyceshan@oum.edu.my. I will do my best to answer your questions. If you remain unhappy and wish to complain formally, you can do this by contacting the main supervisor of this research:
  Prof. Dr. Tajudin (Main supervisor): tajudin@oum.edu.my
  
  Thank you for taking the time to read this information sheet and your consideration in participation.
  
  Sincerely,
  Joyce Yong Jia Shan
  1st-year PhD in Psychology & Counselling
  Faculty of Educational & Social Sciences
  (date), Phase 1`;
  
    doc.setFontSize(12);
    const textLines = doc.splitTextToSize(additionalText, 980);
    doc.text(textLines, 10, 60);
    doc.save("join_us_form.pdf");
  };
  
export default generatePDF;
  

