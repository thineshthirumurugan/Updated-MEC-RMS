const express = require('express')
const base=require('./db')
const { json } = require('body-parser')
const route = express.Router()

route.post("/filterReportsWithParticulars", async (req, res) => {
    const { acdyr_id, sem_id, major_id, sub_id, dept_id, emp_id } = req.body;
    let sql = "SELECT * FROM data_sub_report_type WHERE head_report_id = 1001";
// console.log(acdyr_id+sem_id+major_id+sub_id+dept_id+emp_id)
    try {
        const result = await new Promise((resolve, reject) => {
            base.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });

        if (result.length === 0) {
            res.status(201).json({ message: "No records found" });
            return;
        }

        let resultArr = [];

        for (let i = 0; i < result.length; i++) {
            try {
                let subSql;
                let queryParams;

                // Adjusted conditions to use strict equality checks (!== and ===)
                if (acdyr_id !== null && sem_id === null && major_id === null && sub_id === null && dept_id === null && emp_id === null) {
                    subSql = `SELECT * FROM ${result[i].table_name} WHERE acdyr_id=?`;
                    queryParams = [acdyr_id];
                    const rows = await new Promise((resolve, reject) => {
                        base.query(subSql, queryParams, (err, rows) => {
                            if (err) {
                                reject(err);
                                return;
                            }
                            resolve(rows);
                        });
                    });
                }
                else if (acdyr_id === null && sem_id === null && major_id !== null && sub_id === null && dept_id === null && emp_id === null) {
                    subSql = `SELECT * FROM data_sub_report_type WHERE major_report_id=?`;
                    queryParams = [major_id];
                    const rows = await new Promise((resolve, reject) => {
                        base.query(subSql, queryParams, (err, majorRows) => {
                            if (err) {
                                reject(err);
                                return;
                            }
                            for(let i=0;i<majorRows.length;i++){
                                    subSql = `SELECT * FROM ${result[i].table_name} WHERE major_report_id=?`;
                                    queryParams = [acdyr_id];
                                    const rows = await new Promise((resolve, reject) => {
                                        base.query(subSql, queryParams, (err, rows) => {
                                            if (err) {
                                                reject(err);
                                                return;
                                            }
                                            resolve(rows);
                                        });
                                    });
                    
                                    if (rows.length > 0) {
                                        resultArr = resultArr.concat(rows); // Use concat to merge arrays
                                    }
                            }
                        });
                    });
    
                    if (rows.length > 0) {
                        resultArr = resultArr.concat(rows); // Use concat to merge arrays
                    }
                }
            } catch (err) {
                console.error({ err });
            }
        }
        if (acdyr_id === null && sem_id === null && major_id !== null && sub_id !== null) {
            subSql = `SELECT * FROM ${sub_id} AS ecr INNER JOIN data_major_report_type AS major_type ON ecr.major_report_id = major_type.major_report_id WHERE major_type.major_report_id=? AND ecr.event_coordinator LIKE ?`;
            queryParams = [major_id, `%${emp_id}%`];
            try{
                const rows = await new Promise((resolve, reject) => {
                    base.query(subSql, queryParams, (err, ress) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve(ress);
                        // console.log(ress)
                    });
                });
                console.log(rows)
                if (rows.length > 0) {
                    resultArr = resultArr.concat(rows); // Use concat to merge arrays
                }
                } catch (err){
                    console.log({err})
                }
        } else if (acdyr_id !== null && sem_id !== null && major_id !== null && sub_id !== null) {
            subSql = `SELECT * FROM ${sub_id} AS ecr INNER JOIN data_major_report_type AS major_type ON ecr.major_report_id = major_type.major_report_id WHERE ecr.acdyr_id=? AND ecr.sem_id=? AND major_type.major_report_id=? AND ecr.event_coordinator LIKE ?`;
            queryParams = [acdyr_id, sem_id, major_id, `%${emp_id}%`];
            try{
                const rows = await new Promise((resolve, reject) => {
                    base.query(subSql, queryParams, (err, ress) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve(ress);
                        // console.log(ress)
                    });
                });
                console.log(rows)
                if (rows.length > 0) {
                    resultArr = resultArr.concat(rows); // Use concat to merge arrays
                }
                } catch (err){
                    console.log({err})
                }
        }
        // try{
        // const rows = await new Promise((resolve, reject) => {
        //     base.query(subSql, queryParams, (err, ress) => {
        //         if (err) {
        //             reject(err);
        //             return;
        //         }
        //         resolve(ress);
        //         // console.log(ress)
        //     });
        // });
        // console.log(rows)
        // if (rows.length > 0) {
        //     resultArr = resultArr.concat(rows); // Use concat to merge arrays
        // }
        // } catch (err){
        //     console.log({err})
        // }

        // console.log(resultArr);
        res.status(200).json(resultArr);
    } catch (err) {
        console.error({ err });
        res.status(500).json({ err });
    }
});


route.get('/filterReportsWithParticulars/:head',async(req,res)=>{
    const {acdyr_id,sem_id,major_id,sub_id,dept_id,emp_id} = req.body
    let sql="SELECT * FROM data_sub_report_type where head_report_id=?"
    base.query(sql,[req.params.head],(err,rows)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        // res.status(200).json({rows})
        let resultArray=[]
        for(let i=0;i<rows.length;i++){
            // console.log(rows[i].table_name)
            if(acdyr_id!=null && sem_id==null && major_id==null && sub_id==null && dept_id==null && emp_id==null){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=?`
                base.query(sql,[acdyr_id],(err,temp)=>{
                    if(err){
                        res.status(500).json({error:err.message})
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp)
                    }
                })
            }
            else if(acdyr_id==null && sem_id==null && major_id==null && sub_id==null && dept_id!=null && emp_id==null){
                let sql=`SELECT * FROM ${rows[i].table_name} where dept_id=?`
                base.query(sql,[dept_id],(err,temp)=>{
                    if(err){
                        res.status(500).json({error:err.message})
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp)
                    }
                })
            }
            else if(acdyr_id!=null && sem_id==null && major_id==null && sub_id==null && dept_id!=null && emp_id==null){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and dept_id=?`
                base.query(sql,[acdyr_id,dept_id],(err,temp)=>{
                    if(err){
                        res.status(500).json({error:err.message})
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp)
                    }
                })
            }
            else if(acdyr_id!=null && sem_id!=null && major_id==null && sub_id==null && dept_id==null && emp_id==null){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and sem_id=?`
                base.query(sql,[acdyr_id,sem_id],(err,temp)=>{
                    if(err){
                        res.status(500).json({error:err.message})
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp)
                    }
                })
            }
            else if(acdyr_id==null && sem_id==null && major_id==null && sub_id==null && dept_id!=null && emp_id!=null){
                let sql=`SELECT * FROM ${rows[i].table_name} where dept_id=? and event_coordinator like ?`
                base.query(sql,[dept_id,`%${emp_id}%`],(err,temp)=>{
                    if(err){
                        res.status(500).json({error:err.message})
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp)
                    }
                })
            }
            else if(acdyr_id!=null && sem_id!=null && major_id==null && sub_id==null && dept_id!=null && emp_id==null){
                
            }
        }
    })
})

module.exports=route