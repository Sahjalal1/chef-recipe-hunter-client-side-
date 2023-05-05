
import React from "react";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Download = () => {
  return (
    <div className="bg-sky-400 w-[50%] mx-auto py-5 rounded-lg">
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
        {({ loading }) => (loading ? <button className="btn  text-white text-2xl">Loading Document...</button> : <button className="btn  text-white text-2xl">Download PDF File</button>)}
      </PDFDownloadLink>
      {/* <PDFFile /> */}
    </div>
  );
};

export default Download;