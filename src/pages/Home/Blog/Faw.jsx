import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import Blog from "./Blog"
const Faw = () => (
    <div><PDFDownloadLink document={<Blog></Blog>} fileName='FORM'>
    {
        ({loading}) => (loading ? <button>Loading do</button> : <button>rahm</button>)
    }
    
  </PDFDownloadLink>
  </div>
  
);


export default Faw;