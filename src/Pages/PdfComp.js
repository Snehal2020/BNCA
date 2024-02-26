import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf"
import pdf from './sample.pdf.pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Pdf from "./Pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

function PdfComp(props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-div">
      <Document file={props.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.apply(null,Array(numPages)).map((x,i)=>i+1).map((page)=>{return(
          <Page key={`page_${pageNumber}`} pageNumber={pageNumber} />
        )})}
      
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> 
   
    </div>
  );
}
export default PdfComp;