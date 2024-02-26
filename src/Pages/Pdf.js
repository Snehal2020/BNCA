import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";
import pdf1 from './sample.pdf.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

function Pdf() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    try {
      const result = await axios.get("/get_pdf");
      // const fileURL = URL.createObjectURL(result.data);
      setPdfFile(result.data.data); // Assuming setPdfFile will then pass this URL to `react-pdf`
    } catch (error) {
      console.error("Error fetching PDF: ", error);
    }
  };
  

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const result = await axios.post(
      "/upload_pdf",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };
  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
    // setPdfFile(`http://localhost:5000/files/${pdf}`)
    // setPdfFile(`${pdf1}`)
  };
  const click=async()=>{
    const data=await axios.get('/test-cors');
    console.log(data);
  }
  return (
    // <>
    //   <button onClick={click}>click</button>
    // </>
    <div className="App">
      <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Pdf in React</h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          class="form-control"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data) => {
                return (
                  <div className="inner-div">
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
      <PdfComp pdfFile={pdfFile}/>
    </div>
  );
}

export default Pdf;

// PdfUploader.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Pdf() {
//   const [title, setTitle] = useState('');
//   const [file, setFile] = useState(null);
//   const [pdfs, setPdfs] = useState([]);

//   useEffect(() => {
//     fetchPdfs();
//   }, []);

//   const fetchPdfs = async () => {
//     const result = await axios.get('http://localhost:5000/get_pdfs');
//     setPdfs(result.data);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('file', file);

//     try {
//       await axios.post('http://localhost:5000/upload_pdf', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       fetchPdfs(); // Refresh the list of PDFs after upload
//     } catch (error) {
//       console.error('Upload Error:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleUpload}>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Title"
//           required
//         />
//         <input
//           type="file"
//           onChange={(e) => setFile(e.target.files[0])}
//           accept="application/pdf"
//           required
//         />
//         <button type="submit">Upload PDF</button>
//       </form>
//       <div>
//         {pdfs.map((pdf) => (
//           <div key={pdf._id}>
//             <p>{pdf.title}</p>
//             <button onClick={() => window.open(`http://localhost:5000/${pdf.pdfPath}`)}>
//               View PDF
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
  // );
// }

// export default Pdf;
