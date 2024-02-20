import Layout from '../Components/Layout1/Layout'
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { pdfjs } from "react-pdf"
import PdfComp from './PdfComp';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();


function Pdf() {
    const [file,setFile]=useState()
    const [image,setImage]=useState(null)
    const [pdfFile, setPdfFile] = useState(null);

  const handleupload= async(e)=>{
    e.preventDefault();
    const formData=new FormData()
    formData.append("file",file)
    const data=await axios.post(`http://localhost:5000/upload_pdf`,formData,{
      headers:{
         "Content-Type":"multipart/form-data"
      }
    })
    console.log(data)
  }
 
  const getPdf=async(e)=>{
    const result=await axios.get(`http://localhost:5000/get_pdf`)
    setImage(result.data.data)
 console.log(result.data.data)
  }

  useEffect(()=>{
    getPdf();
  },[])

  const showPdf = (pdf) => {
    // window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
    setPdfFile(`http://localhost:5000/files/${pdf}`)
  };
  return (
  
     <div>
      <input type="file" accept='application/pdf' onChange={(e)=>{setFile( e.target.files[0])}} />

       <button onClick={handleupload} >Upload</button>
   
      {
        image==null?"":image.map((data)=>{
          return(
            <>
            <h5>{data.pdf}</h5>
            <div className="inner-div">
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>

            </>
          )
        })
      }
      <PdfComp pdfFile={pdfFile}/>
    </div>
  )
}

export default Pdf
