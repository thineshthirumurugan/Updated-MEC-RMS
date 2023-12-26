const express = require('express')
const base=require('./db')
// const bodyParser = require('body-parser')
const route = express.Router()

route.post('/filterReportsWithParticulars/:head',async(req,res)=>{
    const {acdyr_id,sem_id,major_id,sub_id,dept_id,emp_id} = req.body
    let resultArray=[]
    if(major_id==null && sub_id==null){
    let sql="SELECT * FROM data_sub_report_type where head_report_id=?"
    base.query(sql,[req.params.head],(err,rows)=>{
        if(err){
            return
        }
        // res.status(200).json({rows})
        for(let i=0;i<rows.length;i++){
            // console.log(rows[i].table_name)
            if(acdyr_id!=null && sem_id==null && major_id==null && sub_id==null && dept_id==null && emp_id==null){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? order by report_id desc`
                base.query(sql,[acdyr_id],(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id==null && sem_id==null && major_id==null && sub_id==null && dept_id!=null && emp_id==null){
                let sql=`SELECT * FROM ${rows[i].table_name} where dept_id=? order by report_id desc`
                base.query(sql,[dept_id],(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id!=null && sem_id==null && major_id==null && sub_id==null && dept_id!=null && emp_id==null){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and dept_id=? order by report_id desc`
                base.query(sql,[acdyr_id,dept_id],(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id!=null && sem_id!=null && major_id==null && sub_id==null && dept_id==null && emp_id==null){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and sem_id=? order by report_id desc`
                base.query(sql,[acdyr_id,sem_id],(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id==null && sem_id==null && major_id==null && sub_id==null && dept_id!=null && emp_id!=null){
                let sql=`SELECT * FROM ${rows[i].table_name} where dept_id=? and event_coordinator like ? order by report_id desc`
                base.query(sql,[dept_id,`%${emp_id}%`],(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id!=null && sem_id!=null && major_id==null && sub_id==null && dept_id!=null && emp_id==null){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and sem_id=? and dept_id=? order by report_id desc`
                base.query(sql,[acdyr_id,sem_id,dept_id],(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id!=null && sem_id==null && major_id==null && sub_id==null && dept_id!=null && emp_id!=null){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
                base.query(sql,[acdyr_id,dept_id,`%${emp_id}%`],(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id!=null && sem_id!=null && major_id==null && sub_id==null && dept_id!=null && emp_id!=null){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and sem_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
                base.query(sql,[acdyr_id,sem_id,dept_id,`%${emp_id}%`],(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
        }
            // res.status(200).json({resultArray})
    })
    }
    if(major_id!=null && sub_id==null){
        let sql="SELECT * FROM data_sub_report_type where major_report_id=?"
        base.query(sql,[major_id],(err,temp)=>{
            if(err){
                return
            }
            for(let i=0;i<temp.length;i++){
                // console.log(temp[i].table_name)
                if(acdyr_id==null && sem_id==null && major_id!=null && sub_id==null && dept_id==null && emp_id==null){
                    let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id=?`
                    base.query(sql,[major_id],(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                        res.status(200).json(resultArray)
                    })
                }
                else if(acdyr_id!=null && sem_id==null && major_id!=null && sub_id==null && dept_id==null && emp_id==null){
                    let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id=? and major_report_id=? order by report_id desc`
                    base.query(sql,[acdyr_id,major_id],(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                        res.status(200).json(resultArray)
                    })
                }
                else if(acdyr_id==null && sem_id==null && major_id!=null && sub_id==null && dept_id!=null && emp_id==null){
                    let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id=? and dept_id=? order by report_id desc`
                    base.query(sql,[major_id,dept_id],(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                        res.status(200).json(resultArray)
                    })
                }
                else if(acdyr_id!=null && sem_id!=null && major_id!=null && sub_id==null && dept_id==null && emp_id==null){
                    let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id=? and sem_id=? and major_report_id=? order by report_id desc`
                    base.query(sql,[acdyr_id,sem_id,major_id],(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                        res.status(200).json(resultArray)
                    })
                }
                else if(acdyr_id==null && sem_id==null && major_id!=null && sub_id==null && dept_id!=null && emp_id!=null){
                    let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
                    base.query(sql,[major_id,dept_id,`%${emp_id}%`],(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                        res.status(200).json(resultArray)
                    })
                }
                else if(acdyr_id!=null && sem_id!=null && major_id!=null && sub_id==null && dept_id!=null && emp_id!=null){
                    let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id=? and sem_id=? and major_report_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
                    base.query(sql,[acdyr_id,sem_id,major_id,dept_id,`%${emp_id}%`],(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                        res.status(200).json(resultArray)
                    })
                }
            }
        })
    }
    if(sub_id!=null){
        if(acdyr_id==null && sem_id==null && major_id!=null && sub_id!=null && dept_id==null && emp_id==null){
            let sql=`select * from ${sub_id} order by report_id desc`
            base.query(sql,(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id==null && sem_id==null && major_id!=null && sub_id!=null && dept_id!=null && emp_id==null){
            let sql=`select * from ${sub_id} where dept_id=? order by report_id desc`
            base.query(sql,[dept_id],(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id!=null && sem_id==null && major_id!=null && sub_id!=null && dept_id==null && emp_id==null){
            let sql=`select * from ${sub_id} where acdyr_id=? order by report_id desc`
            base.query(sql,[acdyr_id],(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id!=null && sem_id!=null && major_id!=null && sub_id!=null && dept_id==null && emp_id==null){
            let sql=`select * from ${sub_id} where acdyr_id=? and sem_id=? order by report_id desc`
            base.query(sql,[acdyr_id,sem_id],(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id==null && sem_id==null && major_id!=null && sub_id!=null && dept_id!=null && emp_id!=null){
            let sql=`select * from ${sub_id} where dept_id=? and event_coordinator like ? order by report_id desc`
            base.query(sql,[dept_id,`%${emp_id}%`],(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id!=null && sem_id!=null && major_id!=null && sub_id!=null && dept_id!=null && emp_id==null){
            let sql=`select * from ${sub_id} where acdyr_id=? and sem_id=? and dept_id=? order by report_id desc`
            base.query(sql,[acdyr_id,sem_id,dept_id],(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id!=null && sem_id==null && major_id!=null && sub_id!=null && dept_id!=null && emp_id!=null){
            let sql=`select * from ${sub_id} where acdyr_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
            base.query(sql,[acdyr_id,dept_id,`%${emp_id}%`],(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id!=null && sem_id!=null && major_id!=null && sub_id!=null && dept_id!=null && emp_id!=null){
            let sql=`select * from ${sub_id} where acdyr_id=? and sem_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
            base.query(sql,[acdyr_id,sem_id,dept_id,`%${emp_id}%`],(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
    }
})

module.exports=route