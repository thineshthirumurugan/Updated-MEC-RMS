import React, { useState} from 'react';
import axios from "axios"
import "./SestaAddForm.css"


export const NPTEL=()=>{

    const[Symposium,setSymposium]=useState({
        "academic_year":"",
        "semster":"",
        "name_of_the_student":"",
        "academic_year_of_the_student":"",
        "semester":"",
        "section":"",
        "course_name":"",
        "year":"",
        "session":"",
        "score_obtained":"",
        "certificate_type":"",
        "certificate_pdf":""
      })
    
      console.log(Symposium)
    
      const infoCollect=(eve)=>{
        const{name,value}=eve.target
        setSymposium((old)=>{
            if(name==="academic_year"||name==="semester"||name==="name_of_the_student"||name==="academic_year_of_the_student"||name==="semester"||name==="section"||name==="course_name"||name==="year"||name==="session"){
                return{
                    ...old,
                    [name]:value
                }
            }
            else if(name==="s_no"){
                // fillPorposals(value)
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
            else{
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
        })
      }
    
    const callPropose=async()=>{
        try{
            await axios.post(`http://localhost:1234/newrecord`,Symposium)
            }
            catch(err){
              alert("Error in axios")
            }
        }
    return(
        <>
        
        {/* <div class="overallcontent" > */}
        <div className="style" style={{justifyContent:'center'}}>
        <div class="head"><h1 class="recent-Articles" style={{color:'purple'}}>NPTEL CERTIFICATION</h1></div>
        <div className="row justify-content-center"style={{justifyContent:'center'}}>
        <div className="ej">
            <label>Academic Year</label>
            <select name="event_name">
            <option value="">Select The Academic Year</option>
            <option value="2022-23">2022-23</option>
            <option value="2023-24">2023-24</option>
            </select>

            <label>Semester</label>
            <select name="ej">
            <option value="">Select The Semester</option>
            <option value="ODD">ODD</option>
            <option value="EVEN">EVEN</option>
            </select>
        </div>
                
<div className="ej">
     <label >Name of the Student</label>
     <input  type="text" name="event_title" placeholder="Enter Your Name"/>
     </div>
                    
   <div className="ej">
   <label >Academic Year of the Student</label>
    <select name="select the Student Academic Year">
    <option value="">select the student academic year</option>
     </select>

     </div>

   <div className="ej">
   <label >Semester</label>
    <select >
    <option value="">Select The Semester</option>
    <option value="2022-23">2022-23</option>
    <option value="2023-24">2023-24</option>
    </select>
                            
     </div>  

     <div className="ej">
   <label >Section</label>
    <select >
    <option value="">Select The Secction</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    </select>
                            
     </div>               

     <div className="ej">
     <label >Course Name</label>
     <input  type="text" name="event_title" placeholder=" Enter the course name" className="form-control"/>
     </div>

     <div className="ej">
     <label >Year</label>
     <input  type="text" name="event_title" placeholder="Enter the year" className="form-control"/>
     </div>

     <div className="ej">
     <label >Session</label>
     <input  type="text" name="event_title" placeholder="Enter The Session" className="form-control"/>
     </div>

     <div className="ej">
     <label >Score Obtained</label>
     <input  type="text" name="event_title" placeholder="Score Obtained" className="form-control"/>
     </div>
     
     
     <div className="ej">
   <label >Certificate Type</label>
    <select >
    <option value="">select The Type</option>
    <option value="Gold">Gold</option>
    <option value="Silver">Silver</option>
    <option value="Elite">Elite</option>
    <option value="Successfully Completed">Successfully Completed</option>
    </select>
                            
     </div>

     <div className="ej">
     <label >Certificate-PDF</label>
     <input  type="file" />
     </div>
    

      
 </div>
    <h1 style={{color:'red',}}></h1>
      <div className='row mt-5 justify-content-around'>
        <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
        <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
      </div>   
    
 </div>
 
 {/* </div> */}
        
        </>
    )
}


export const Online=()=>{

    const[Symposium,setSymposium]=useState({
        "Academic_year":""
      })
    
      console.log(Symposium)
    
      const infoCollect=(eve)=>{
        const{name,value}=eve.target
        setSymposium((old)=>{
            if(name==="Academic_year"){
                return{
                    ...old,
                    [name]:value
                }
            }
            else if(name==="s_no"){
                // fillPorposals(value)
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
            else{
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
        })
      }
    
    const callPropose=async()=>{
        try{
            await axios.post(`http://localhost:1234/newrecord`,Symposium)
            }
            catch(err){
              alert("Error in axios")
            }
        }
    return(
        <>
        {/* <div class="overallcontent" > */}
        <div className="style" style={{justifyContent:'center'}}>
        <div class="head">
          <h1 class="recent-Articles" style={{color:'purple'}}><center>ONLINE CERTIFICATION</center></h1>
        </div>
          <div className="row justify-content-center"style={{justifyContent:'center'}}>
            <div className="ej">
              <label>Academic Year</label>
              <select >
                <option value="">Select Academic Year</option>
                <option value="0">2022-23</option>
                <option value="1">2023-24</option>
              </select>

              <label>Semester</label>
              <select>
                <option value="">Select Semester</option>
                <option value="0">Odd Sem</option>
                <option value="1">Even Sem</option>
              </select>

             <label>Department</label>
             <select>
              <option value="">Select Department</option>
              <option value="0">CSE</option>
              <option value="1">IT</option>
              <option value="1">ECE</option>
              <option value="1">EEE</option>
             </select>

             <label>Name of the Student</label>
             <input type="text" name="guest_email" placeholder='Enter your Name' />

             <label>Year</label>
             <select>
              <option>Select the Year</option>
              <option value="0">I</option>
              <option value="1">II</option>
              <option value="1">III</option>
              <option value="1">IV</option>
             </select>

             <label>Semester</label>
             <select>
              <option value="">Select the Semester</option>
              <option value="0">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">6</option>
              <option value="1">7</option>
              <option value="1">8</option>
             </select>

            <label>Section</label>
            <select>
             <option value="">Select the Section</option>
             <option value="0">A</option>
             <option value="1">B</option>
            <option value="1">C</option>
            </select>

            <label>Online Certification</label>
            <select>
              <option value="">Select the Certification</option>
             <option value="0">Technical</option>
             <option value="1">General Topic</option>
            </select>

            <label htmlFor="guest_email">Name of the Course</label>
            <input type="text" name="guest_email" placeholder='Enter the Course Name' />
      
            <div className="form group">
              <label htmlFor="event_date">Date</label>
              <input type="date" name="event_date"  required /></div>

            <label htmlFor="guest_email">Duration</label>
            <input type="text" name="guest_email" placeholder='Enter the Duration' />
     
            <label htmlFor="guest_email">Details of the Organization</label>
            <input type="text" name="guest_email" placeholder='Enter the Details' />
      
           <label htmlFor="guest_email">Awards and Recognitions</label>
           <input type="text" name="guest_email" placeholder='Awards and Recognitions' />
      
           <label htmlFor="guest_email">Outcome of the Activity</label>
           <input type="text" name="guest_email" placeholder='Text Your Outcome' />
      
           <label htmlFor="guest_email">Certificate - PDF</label>
           <input type="file" name="guest_email" />
          </div>
       </div>
       
       <h1 style={{color:'red',}}></h1>
        <div className='row mt-5 justify-content-around'>
          <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
          <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
        </div>   
    
    </div>
 {/* </div> */}
      </>
    )
}


export const TechTalk1=()=>{
    const[Symposium,setSymposium]=useState({
         "acedemic_year":"",
         "semester":"",
         "department":"",
         "date":"",
         "title_of_the_techtalk":"",
         "name_of_the_student":"",
         "year":"",
         "semester":"",
         "section":"",
         "no_of_beneficiaries":"",
         "students_techtalk_report_first_page_pdf":""
          })
        
          console.log(Symposium)
        
          const infoCollect=(eve)=>{
            const{name,value}=eve.target
            setSymposium((old)=>{
                if(name==="acedemic_year"||name==="semester"||name==="department"||name==="date"||name==="title_of_the_techtalk"||name==="name_of_the_student"||name==="year"||name==="semester"||name==="section"||name==="no_of_beneficiaries"||name==="students_techtalk_report_first_page_pdf"){
                    return{
                        ...old,
                        [name]:value
                    }
                }
                else if(name==="s_no"){
                    // fillPorposals(value)
                    return{
                        ...old,
                        [name]:parseInt(value)
                    }
                }
                else{
                    return{
                        ...old,
                        [name]:parseInt(value)
                    }
                }
            })
          }
        
        const callPropose=async()=>{
            try{
                await axios.post(`http://localhost:1234/newrecord`,Symposium)
                }
                catch(err){
                  alert("Error in axios")
                }
            }
            
        return(
            <>
            {/* <div class="overallcontent" > */}
            <div className="style" style={{justifyContent:'center'}}>
            <div class="head">
              <h1 class="recent-Articles" style={{color:'purple'}}><center>STUDENT TECHTALK(ST2)</center></h1>
            </div>
            <div className="row justify-content-center"style={{justifyContent:'center'}}>
              <div className="ej">
                <label htmlFor="acdyr_id">Academic Year</label>
                <select name="acdyr_id" className="form group" placeholder='Select the Academic Year' >
                  <option value="">Select Academic Year</option>
                  <option value="0">2022-23</option>
                  <option value="1">2023-24</option>     
                </select>
    
                <label htmlFor="sem">Semester</label>
                <select name="sem">
                  <option value="">Select the Semester</option>
                  <option value="0">Odd Sem</option>
                  <option value="1">Even Sem</option>
                </select>
    
                <label htmlFor="sem">Department</label>
                <select name="sem">
                  <option value="">Select the Department</option>
                  <option value="0">CSE</option>
                  <option value="1">IT</option>
                  <option value="1">ECE</option>
                  <option value="1">EEE</option>
                </select>
    
                <div className="form group">
                  <label htmlFor="event_date">Date</label>
                  <input type="date" name="event_date"  required /></div>
          
                  <label htmlFor="guest_email">Title of the TechTalk</label>
                  <input type="text" name="guest_email" placeholder='Enter the Title' />
          
                  <label htmlFor="guest_email">Name of the Student</label>
                  <input type="text" name="guest_email" placeholder='Enter your Name' />
          
                  <label htmlFor="sem">Year</label>
                  <select name="sem">
                    <option value="">Select the Year</option>
                    <option value="0">I</option>
                    <option value="1">II</option>
                    <option value="1">III</option>
                    <option value="1">IV</option>
                  </select>
    
                  <label htmlFor="sem">Semester</label>
                  <select name="sem">
                    <option value="">Select the Semester</option>
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                    <option value="1">6</option>
                    <option value="1">7</option>
                    <option value="1">8</option>
                  </select>
    
                  <label htmlFor="sem">Section</label>
                  <select name="sem">
                    <option value="">Select the Section</option>
                    <option value="0">A</option>
                    <option value="1">B</option>
                    <option value="1">C</option>
                  </select>
    
                  <label htmlFor="guest_email">No.of Beneficiaries</label>
                  <input type="text" name="guest_email" placeholder='Enter the Number' />
          
                  <label htmlFor="guest_email">Student Techtalk Report First Page-PDF</label>
                  <input type="file" name="guest_email"  />
                  </div>
            </div>
            <h1 style={{color:'red',}}></h1>
              <div className='row mt-5 justify-content-around'>
                <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
                <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
              </div>   
        
        </div>
     {/* </div> */}
            </>
        )
    }


    export const Participation=()=>{

        const[Symposium,setSymposium]=useState({
            "Academic_year":""
          })
        
          console.log(Symposium)
        
          const infoCollect=(eve)=>{
            const{name,value}=eve.target
            setSymposium((old)=>{
                if(name==="Academic_year"){
                    return{
                        ...old,
                        [name]:value
                    }
                }
                else if(name==="s_no"){
                    // fillPorposals(value)
                    return{
                        ...old,
                        [name]:parseInt(value)
                    }
                }
                else{
                    return{
                        ...old,
                        [name]:parseInt(value)
                    }
                }
            })
          }
        
        const callPropose=async()=>{
            try{
                await axios.post(`http://localhost:1234/newrecord`,Symposium)
                }
                catch(err){
                  alert("Error in axios")
                }
            }
            
        return(
            <>
            <div className="style" style={{justifyContent:'center'}}>
               <div class="head">
                 <h1 class="recent-Articles" style={{color:'purple'}}>STUDENTS PARTICIPATION</h1>
               </div>
    
               <div className="row justify-content-center"style={{justifyContent:'center'}}>
               <div className="ej">
                  <label>Academic Year</label>
                  <select name="event_name">
                    <option value="">Select Academic Year</option>
                    <option value="2022-23">2022-23</option>
                    <option value="2023-24">2023-24</option>
                  </select>
                </div>
    
                <div className="ej">
                  <label>Semester</label>
                  <select name="event_name">
                    <option value="">Select Semester</option>
                    <option value="ODD">ODD</option>
                    <option value="EVEN">EVEN</option>
                  </select>
                </div>
    
                <div className="ej">
                   <label>Department</label>
                   <input type="text" placeholder="Enter Your Department"/>
                </div>
    
                <div className="ej">
                   <label>Name of the Student</label>
                   <input type="text" placeholder="Enter Your Student"/>
                </div>
    
                <div className="ej">
                   <label>Year</label>
                   <input type="text" placeholder="Enter Your Year"/>
                </div>
    
                <div className="ej">
                   <label>Semester</label>
                   <input type="text" placeholder="Enter Your Semester"/>
                </div>
    
                <div className="ej">
                   <label>Section</label>
                   <input type="text" placeholder="Enter Your Section"/>
                </div>
    
                <div className="ej">
                  <label>Nature of Participation</label>
                  <select name="event_name">
                    <option value="">Select the Participation</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Paper Presentation">Paper Presentation</option>
                    <option value="Project Contest">Project Contest</option>
                    <option value="Sports">Sports</option>
                    <option value="Outreach Program">Outreach Program</option>
                  </select>
                </div>
    
                <div className="ej">
                   <label>Name of the Program</label>
                   <input type="text" placeholder="Enter the Program"/>
                </div>
    
                <div className="ej">
                   <label>Date</label>
                   <input type="date"/>
                </div>
    
                <div className="ej">
                   <label>Duration</label>
                   <input type="text" placeholder="Enter the Timing"/>
                </div>
    
                <div className="ej">
                   <label>Name of the Organization</label>
                   <input type="text" placeholder="Enter the Organisation Name"/>
                </div>
    
                <div className="ej">
                   <label>Awards and Recognitions</label>
                   <input type="text" placeholder="Enter the Prize"/>
                </div>
    
                <div className="ej">
                   <label>Certificates-pdf</label>
                   <input type="file"/>
                </div>
                <h1 style={{color:'red',}}></h1>
                  <div className='row mt-5 justify-content-around'>
                     <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
                     <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
                  </div>   
        
               </div>
             </div>
    
            </>
        )
    }

    
export const Internship=()=>{

    const[Symposium,setSymposium]=useState({
        "Academic_year":""
      })
    
      console.log(Symposium)
    
      const infoCollect=(eve)=>{
        const{name,value}=eve.target
        setSymposium((old)=>{
            if(name==="Academic_year"){
                return{
                    ...old,
                    [name]:value
                }
            }
            else if(name==="s_no"){
                // fillPorposals(value)
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
            else{
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
        })
      }
    
    const callPropose=async()=>{
        try{
            await axios.post(`http://localhost:1234/newrecord`,Symposium)
            }
            catch(err){
              alert("Error in axios")
            }
        }
        
    return(
        <>
        <div className="style" style={{justifyContent:'center'}}>
          <div class="head">
            <h1 class="recent-Articles" style={{color:'purple'}}>INTERNSHIP</h1>
        </div>
     
        <div className="row justify-content-center"style={{justifyContent:'center'}}>
        <div className="ej">
          <label for="major_id">Academic Year</label>< required placeholder="Academic" />
          <select name="Academic Year">
            <option value="">Select the Academic Year</option>
            <option value="0">2022-2023</option>
            <option value="1">2023-2024</option>
          </select>
        </div>

        <div className="ej">
           <label for="event_title">Semester</label>
           <select name="Academic Year">
            <option value="">Select the Semester</option>
            <option value="0">Odd Sem</option>
            <option value="1">Even Sem</option>
           </select>
        </div>
                
        <div className="ej">
           <label for="event_title">Department</label>
           <select name="Academic Year">
            <option value="">Select the Departemnt</option>
            <option value="0">CSE</option>
            <option value="1">IT</option>
            <option value="1">ECE</option>
            <option value="1">EEE</option>
           </select>
        </div>
                    
        <div className="ej">
           <label for="event_organizer">Name of the Student</label>
           <input type="text" name="Organizer Name" placeholder= "Enter Your Name" className="form-control" />
        </div>
  
        <div className="ej">
          <label htmlFor="event_year">year</label>
          <input type="text" name="event_time" required placeholder="Enter the Year" className="form-control" />
        </div>

        <div className="ej">
           <label htmlFor="event_number">Semester</label>
           <select name="Academic Year">
            <option value="">Select the Semester</option>
            <option value="0">1</option>
            <option value="1">2</option> 
            <option value="1">3</option> 
            <option value="1">4</option> 
            <option value="1">5</option> 
            <option value="1">6</option> 
            <option value="1">7</option> 
            <option value="1">8</option> 
           </select>
        </div>
      
        <div className="ej">
          <label htmlFor="event_date">Section</label>
          <input type="text" name="event_date" placeholder='Enter Your Section' required />
  
          <label htmlFor="guest_name">Name of the Participation</label>
          <select name="Name of the participation">
            <option value="">Select Your Participation</option>
            <option value="0">Research project</option>
            <option value="1">Internship</option>
            <option value="1">Field project</option>
            <option value="1">Minor project</option>
            <option value="1">Industrial visit</option>
            <option value="1">In plant Training</option>
          </select>
    
        <label htmlFor="guest_designation">Title</label>
        <input type="text" name="guest_designation" placeholder='Enter Your Title' required />
  
        <label htmlFor="guest_address">Date</label>
        <input type="date" name="guest_address" required />
  
        <label htmlFor="guest_phone_number">Duration</label>
        <input type="number" name="guest_phone_number" placeholder='Enter the Duration'/>
  
        <label htmlFor="guest_email">Name of the Organisation</label>
        <input type="text" name="guest_email" placeholder='Enter the Name'/>
  
        <label htmlFor="student_count">Name of the Contact Person</label>
        <input type="text" name="student_count" placeholder='Enter the Name' />
  
      <label htmlFor="faculty_count">phone number of Contact Person</label>
      <input type="text" name="faculty_count" placeholder='Enter your Number'/>
  
      <label htmlFor="others_count">EMAILID of Contact Person</label>
      <input type="text" name="others_count" placeholder='Enter your MailID'/>
  
      <label htmlFor="event_budget">Website Of Organisation</label>
      <input type="text" name="event_budget" placeholder='Enter the Website'/>
  
      <label htmlFor="event_budget">Outcome of the Activity</label>
      <input type="text" name="event_budget" placeholder='Enter your Outcome' />
  
      <label >Certificate-PDF</label>
      <input type="File" name="event_budget" /> 
    </div>
    
  
    <h1 style={{color:'red',}}></h1>
    <div className='row mt-5 justify-content-around'>
        <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
        <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
    </div>   
   </div>
</div> 
    </>
    )
}


export const VAC=()=>{

    const[Symposium,setSymposium]=useState({
        "Academic_year":""
      })
    
      console.log(Symposium)
    
      const infoCollect=(eve)=>{
        const{name,value}=eve.target
        setSymposium((old)=>{
            if(name==="Academic_year"){
                return{
                    ...old,
                    [name]:value
                }
            }
            else if(name==="s_no"){
                // fillPorposals(value)
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
            else{
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
        })
      }
    
    const callPropose=async()=>{
        try{
            await axios.post(`http://localhost:1234/newrecord`,Symposium)
            }
            catch(err){
              alert("Error in axios")
            }
        }
    return(
        <>
        <div className="style" style={{justifyContent:'center'}}>
        <div class="head">
           <h1 class="recent-Articles" style={{color:'purple'}}><center>VALUE ADDED COURSES</center></h1>
        </div>
        <div className="row justify-content-center"style={{justifyContent:'center'}}>
        <div className="ej">
           <label htmlFor="acdyr_id">Academic Year</label>
           <select name="acdyr_id" className="ej"  >
              <option value="">Select Academic Year</option>
              <option value="0">2022-23</option>
              <option value="1">2023-24</option>
            </select>

           <label htmlFor="sem">Semester</label>
           <select name="sem">
            <option value="">Select the Semester</option>
             <option value="0">Odd Sem</option>
             <option value="1">Even Sem</option>
           </select>

           <label htmlFor="sem">Department</label>
           <select name="sem">
            <option value="">Select the Department</option>
            <option value="0">CSE</option>
            <option value="1">IT</option>
            <option value="1">ECE</option>
            <option value="1">EEE</option>
           </select>

           <label htmlFor="guest_email">Name of the Value Added Courses</label>
           <input type="text" name="guest_email" placeholder='Enter the Name' />

           <label htmlFor="guest_email">Venue of Value Added Course</label>
           <input type="text" name="guest_email" placeholder='Enter the Venue' />

           <div className="form group">
            <label htmlFor="event_date">Date</label>
            <input type="date" name="event_date"  required /></div>

            <label htmlFor="guest_email">Duration</label>
            <input type="text" name="guest_email" placeholder='Enter the Duration' />

            <label htmlFor="guest_email">Name of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the Name' />

            <label htmlFor="guest_email">Address of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the Address' />

            <label htmlFor="guest_email">Designation of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the Designation' />

            <label htmlFor="guest_email">Organization of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the Organization' />

            <label htmlFor="guest_email">Mobile of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the Number' />

            <label htmlFor="guest_email">Email ID of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the MailID' />

            <label htmlFor="sem">Students Participated in the Event</label>
            <input type="text" name="guest_email" placeholder='Number of Participants' />
     
            <label htmlFor="sem">Outcome of the Activity</label>
            <input type="text" name="guest_email" placeholder='Enter the Outcome' />

            <label htmlFor="guest_email">CCR First Page-PDF</label>
            <input type="file" name="guest_email"  />
        </div>
    
        <h1 style={{color:'red',}}></h1>
        <div className='row mt-5 justify-content-around'>
            <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
            <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
        </div> 
   </div>
 </div>
        </>
    )
}


export const TechTalk2=()=>{

    const[Symposium,setSymposium]=useState({
        "student_name":"",
        "date":"",
        "title":"",
        "no_of_students_participated":"",
        "faculty_co_ordinator":"",
        "po_and_pso_mapping":"",
        "attendance":"",
        "photo_1":"",
        "photo_2":""
      })
    
      console.log(Symposium)
    
      const infoCollect=(eve)=>{
        const{name,value}=eve.target
        setSymposium((old)=>{
            if(name==="student_name"||name==="date"||name==="title"||name==="no_of_students_participated"||name==="faculty_co_ordinator"||name==="po_and_pso_mapping"||name==="attendance"||name==="photo_1"||name==="photo_2"){
                return{
                    ...old,
                    [name]:value
                }
            }
            else if(name==="s_no"){
                // fillPorposals(value)
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
            else{
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
        })
      }
    
    const callPropose=async()=>{
        try{
            await axios.post(`http://localhost:1234/newrecord`,Symposium)
            }
            catch(err){
              alert("Error in axios")
            }
        }

    return(
        <>
        <div className="style" style={{justifyContent:'center'}}>
          <div class="head">
            <h1 class="recent-Articles" style={{color:'purple'}}>STUDENTS TECHTALK</h1>
          </div>

          <div className="row justify-content-center"style={{justifyContent:'center'}}>
            <div className="ej">
              <label>Student Name</label>
              <input type="text" placeholder="Enter Your Name" onChange={infoCollect}/>
            </div>

            <div className="ej">
               <label>Date</label>
               <input type="date" onChange={infoCollect}/>
            </div>

            <div className="ej">
              <label>No of Students Participated</label>
              <input type="text" placeholder="Enter the Student Count" onChange={infoCollect}/>
            </div>

            <div className="ej">

              <label>Faculty Co Ordinator</label>
              <input type="text" placeholder="Faculty Co Ordinator" onChange={infoCollect}/>
            </div>

            <div className="ej">
              <label>PO and PSO Mapping</label>
              <input type="text" placeholder="Enter the Mapping" onChange={infoCollect}/>
            </div>

            <div className="ej">
               <label>Attendance</label>
               <input type="file" onChange={infoCollect}/>
            </div>

            <div className="ej">
               <label>Photo 1</label>
               <input type="file" onChange={infoCollect}/>
            </div>

            <div className="ej">
               <label>Photo 2</label>
               <input type="file" onChange={infoCollect}/>
            </div>
            <h1 style={{color:'red',}}></h1>
              <div className='row mt-5 justify-content-around'>
                 <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
                 <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
              </div> 
          </div>
        </div>
        </>
    )
}

