import React, { useEffect, useState } from 'react'
import { Major, SubReport } from './connect'
import axios from 'axios'
import './facultyEcrFilter.css'

function FacultyEcrFilter() {

    // const[currAcd,setCurrAcd]=useState(0)

    useEffect(()=>{
        Maj()
        Acad()
        GetCurrAcd()
        // alert(JSON.stringify(currAcd.acd_yr_id))
    },[])

    const GetCurrAcd=async()=>{
        const t = await axios.get("http://localhost:1234/ecrFilter/getAcdYrList")
        // alert(JSON.stringify(t.data.result))
        const temp=t.data.result
        let valueYr=0
        temp.map(item=>{
            // console.log(item.acd_status)
            if(item.acd_status==1){
                // console.log(item)
                // setCurrAcd(item)
                valueYr = JSON.stringify(item.acd_yr_id)
                // alert(valueYr)
                setFilter(old=>{
                    return{
                        ...old,
                        "acdyr_id":valueYr
                    }
                })
            }
        })
        // alert(JSON.stringify(valueYr))
        // let newAcd = JSON.stringify(valueYr.acd_yr_id)
        // let newAcdYr = parseInt(newAcd)
        // alert(newAcdYr)
        // setCurrAcd(newAcdYr)
    }

    const[filter,setFilter]=useState({
        "acdyr_id":null,
        "sem_id":null,
        "major_id":null,
        "sub_id":null
    })
    const logged=sessionStorage.getItem("person")
    // alert(logged)
    console.log(filter)

    const[major,setMajor]=useState([])
    const Maj=async()=>{
        const t = await Major()
        setMajor(t)
        // alert(t)
    }

    const[sub,setSub]=useState([])
        const Sub=async(mid)=>{
            const t = await SubReport(mid)
            setSub(t)
            // alert(t)
        }

    // alert(JSON.stringify(currAcd))

    const[year,setYear]=useState([])
       const Acad=async()=>{
            const t = await axios.get("http://localhost:1234/ecrFilter/getAcdYrList")
            // alert(JSON.stringify(t.data.result))
            setYear(t.data.result)
        }
    

    const infoCollect=(eve)=>{
        const{name,value}=eve.target
        if(name=="major_id"){
            Sub(value)
            setFilter((old)=>{
                return{
                    ...old,
                    [name]:value
                }
            })
        }
        else{
            setFilter((old)=>{
            return{
                ...old,
                [name]:value
            }
        })}
    }
    // console.log(filter)

  return (
    <>
        <div className="filter-dropdowns">

            <div>
            <label htmlFor="acdyr_id">Academic Year:</label>
            <select name="acdyr_id" className="form group" onChange={infoCollect} value={filter.acdyr_id}>
                        <option value="">Select Academic Year</option>
                            {
                                year.map((val,key)=>{
                                    return (<option key={val.acd_yr_id} value={val.acd_yr_id}>{val.acd_yr}</option>)
                                })
                            }
            </select></div>

                            <div>
            <label htmlFor="sem_id">Semester :</label>
            <select name="sem_id" value={filter.sem} onChange={infoCollect}>
                <option value="">Select Semester</option>
                <option value="1">Odd Sem</option>
                <option value="2">Even Sem</option>
                <option value="3">Both</option>
            </select><br /></div>

                            <div>
            <label for="major_id">Major Type :</label>
            <select name="major_id" onChange={infoCollect} value={filter.major_id} >
            <option value="">Select Major Type</option>
            {
                                major.map((val,key)=>{
                                    return (<option key={val.major_report_id}  value={val.major_report_id}>{val.major_report}</option>)
                                })
                            }
            </select></div>

                            <div>
            <label for="sub_id">Sub Type :</label>
            <select name="sub_id" value={filter.sub_id} onChange={infoCollect}>
            <option value="">Select Sub Type </option>
            {
                sub.map((val,key)=>{
                    return (<option key={val.sub_report_id} value={`${val.table_name}`}>{val.sub_report}</option>)
                })
            }
        </select></div>

        <div>
            <input className='filter-button' type='button' value="Filter"/>
        </div>

            </div>
    </>
  )
}

export default FacultyEcrFilter
