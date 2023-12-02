import React,{useState} from "react";
import './SestaAddForm.css'
import { Internship, NPTEL, Online, Participation, TechTalk1, TechTalk2, VAC } from "./SestaForms";


export const SeSTAadd=()=>{

  const [SeSTAsubtype, setSeSTAsubtype]=useState({
    "Subtype":""
  })

  const infoCollect=(eve)=>{
    const{name,value}=eve.target
    setSeSTAsubtype((old)=>{
      if(name==="Subtype" && value==="NPTEL"||name==="Subtype" && value==="Online"||name==="Subtype" && value==="TechTalk1"||name==="Subtype" && value==="Participation"||name==="Subtype" && value==="Internship"||name==="Subtype" && value==="VAC"||name==="Subtype" && value==="TechTalk2"){
      return{
        ...old,
        [name]:eve.target.value
    }
  }
    })
  }

  const Condition=()=>{
    if(SeSTAsubtype.Subtype==="NPTEL"  ){
      return<NPTEL/>
    }
    else if(SeSTAsubtype.Subtype==="Online" ){
      return<Online/>
    }
    else if(SeSTAsubtype.Subtype==="TechTalk1"){
      return<TechTalk1/>
    }
    else if(SeSTAsubtype.Subtype==="Participation"){
      return<Participation/>
    }
    else if(SeSTAsubtype.Subtype==="Internship"){
      return<Internship/>
    }
    else if(SeSTAsubtype.Subtype==="VAC"){
      return<VAC/>
    }
    else if(SeSTAsubtype.Subtype==="TechTalk2"){
      return<TechTalk2/>
    }
  }

  console.log(SeSTAsubtype)

    return(
        <>
        <body>
          <div className="main">
            <div className="report-container" style={{justifyContent:'center'}}>
        
  
        <div className='head'><h1 style={{color:'purple'}}>Semester-wise Students Targeted Activities</h1></div>
         
          <div  className='ej' >
         
            <tr><label><b>Sub type</b></label>
            <select name="Subtype" onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}}>
              <option>Select sub type...</option>
              <option  value="NPTEL" >NPTEL Certification</option>
              <option  value="Online" >Online Certification</option>
              <option  value="TechTalk1">Student Techtalk(ST2)</option> 
              <option  value="Participation">Students Participation</option> 
              <option  value="Internship">Internship</option> 
              <option  value="VAC">VAC</option> 
              <option  value="TechTalk2">Students TechTalk</option>   
            </select> 
            </tr>
            <Condition/>
        </div>
            </div>
          </div>
        </body>
        </>
    )
}
export default SeSTAadd;