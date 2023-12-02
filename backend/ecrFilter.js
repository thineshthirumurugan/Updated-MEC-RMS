const express = require('express')
const base=require('./db')
const { json } = require('body-parser')
const route = express.Router()

route.get("/getAcdYrList",async(req,res)=>{
    let sql="select * from predefined_academic_year"
    base.query(sql,(err,result)=>{
        if(err){
            res.status(500).json({err})
            return
        }
        else if(result.length==0){
            res.status(201).json({"message":"No records found"})
            return
        }
        res.status(200).json({result})
    })
})

route.get("/getSemList",async(req,res)=>{
    let sql="select * from predefined_semester"
    base.query(sql,(err,result)=>{
        if(err){
            res.status(500).json({err})
            return
        }
        else if(result.length==0){
            res.status(201).json({"message":"No records found"})
            return
        }
        res.status(200).json({result})
    })
})

route.get("/getDeptList",async(req,res)=>{
    let sql="select * from data_dept"
    base.query(sql,(err,result)=>{
        if(err){
            res.status(500).json({err})
            return
        }
        else if(result.length==0){
            res.status(201).json({"message":"No records found"})
            return
        }
        res.status(200).json({result})
    })
})

route.get("/getFacultiesList/:dept",async(req,res)=>{
    let sql="select * from data_faculties where dept_id=?"
    base.query(sql,[req.params.dept],(err,result)=>{
        if(err){
            res.status(500).json({err})
            return
        }
        else if(result.length==0){
            res.status(201).json({"message":"No records found"})
            return
        }
        res.status(200).json({result})
    })
})

route.get("/getMajorList",async(req,res)=>{
    let sql="select * from data_major_report_type where head_report_id=1001"
    base.query(sql,(err,result)=>{
        if(err){
            res.status(500).json({err})
            return
        }
        else if(result.length==0){
            res.status(201).json({"message":"No records found"})
            return
        }
        res.status(200).json({result})
    })
})

route.get("/getSubList/:major",async(req,res)=>{
    let sql="select * from data_sub_report_type where major_report_id=?"
    base.query(sql,[req.params.major],(err,result)=>{
        if(err){
            res.status(500).json({err})
            return
        }
        else if(result.length==0){
            res.status(201).json({"message":"No records found"})
            return
        }
        res.status(200).json({result})
    })
})


route.get('/getHodFilter', async (req, res) => {
    try {
      const [result] = await base.query('SELECT * FROM data_sub_report_type WHERE head_report_id = 1001');
  
      if (result.length === 0) {
        res.status(404).json({ message: 'No records found' });
        return;
      }
  
      for (let i = 0; i < result.length; i++) {
        const table_name = result[i].table_name;
        const alterSql = `ALTER TABLE ${table_name} ADD COLUMN IF NOT EXISTS participants_list VARCHAR(1000)`;
  
        await pool.query(alterSql);
      }
  
      res.status(200).json({ message: 'Columns added to tables successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
// route.get("/filterReportsWithAcdYr/:acdYr",async(req,res)=>{
//     let sql="select * from data_sub_report_type where head_report_id=1001"
//     base.query(sql,(err,result)=>{
//         if(err){
//             res.status(500).json({err})
//             return
//         }
//         else if(result.length==0){
//             res.status(201).json({"message":"No records found"})
//             return
//         }
//         // res.status(200).json({result})
//         let resultArr=[]
//         for(let i=0;i<result.length;i++){
//             // console.log(result[i].table_name)
//             // let sql=`select * from ${result[i].table_name} where acdyr_id=?`
//             let sql=`-- Check if the column exists
//             IF NOT EXISTS (
//                 SELECT *
//                 FROM INFORMATION_SCHEMA.COLUMNS
//                 WHERE TABLE_NAME = ${result[i].table_name}
//                 AND COLUMN_NAME = 'participants_list'
//             )
//             THEN
//                 -- Add the column if it doesn't exist
//                 ALTER TABLE ${result[i].table_name}
//                 ADD COLUMN \`participants_list\` VARCHAR(1000) NULL AFTER \`event_organizing_secretary\`;
//             END IF;
//             ;`
//             base.query(sql,[req.params.acdYr],(err,rows)=>{
//                 if(err){
//                     console.log({err})
//                     return
//                 }
//                 else if(result.length==0){
//                     console.log({"message":"No records found"})
//                     return
//                 }
//                 // console.log(rows)
//                 // rows.map(item=>{
//                 //     // console.log(item)
//                 //     resultArr.push({item})
//                 // })
//             })
//         }
//         console.log(resultArr)
//         // res.status(200).json(resultArr)
//     })
// })

// route.get("/filterReportsWithAcdYr/:acdYr", async (req, res) => {
//     let sql = "select * from data_sub_report_type where head_report_id=1001";

//     try {
//         const result = await new Promise((resolve, reject) => {
//             base.query(sql, [req.params.major], (err, result) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 resolve(result);
//             });
//         });

//         if (result.length === 0) {
//             res.status(201).json({ "message": "No records found" });
//             return;
//         }

//         let resultArr = [];

//         for (let i = 0; i < result.length; i++) {
//             let subSql = `select * from ${result[i].table_name} where acdyr_id=?`;

//             try {
//                 const rows = await new Promise((resolve, reject) => {
//                     base.query(subSql, [req.params.acdYr], (err, rows) => {
//                         if (err) {
//                             reject(err);
//                             return;
//                         }
//                         resolve(rows);
//                     });
//                 });

//                 if (rows.length > 0) {
//                     rows.forEach(item => {
//                         resultArr.push(item);
//                     });
//                 }
//             } catch (err) {
//                 console.error({ err });
//             }
//         }

//         console.log(resultArr);
//         res.status(200).json(resultArr);
//     } catch (err) {
//         console.error({ err });
//         res.status(500).json({ err });
//     }
// });

// route.get("/filterReportsWithAcdYrAndSem/:acdYr/:sem", async (req, res) => {
//     let sql = "select * from data_sub_report_type where head_report_id=1001";

//     try {
//         const result = await new Promise((resolve, reject) => {
//             base.query(sql, [req.params.major], (err, result) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 resolve(result);
//             });
//         });

//         if (result.length === 0) {
//             res.status(201).json({ "message": "No records found" });
//             return;
//         }

//         let resultArr = [];

//         for (let i = 0; i < result.length; i++) {
//             let subSql = `select * from ${result[i].table_name} where acdyr_id=? and sem_id=?`;

//             try {
//                 const rows = await new Promise((resolve, reject) => {
//                     base.query(subSql, [req.params.acdYr,req.params.sem], (err, rows) => {
//                         if (err) {
//                             reject(err);
//                             return;
//                         }
//                         resolve(rows);
//                     });
//                 });

//                 if (rows.length > 0) {
//                     rows.forEach(item => {
//                         resultArr.push(item);
//                     });
//                 }
//             } catch (err) {
//                 console.error({ err });
//             }
//         }

//         console.log(resultArr);
//         res.status(200).json(resultArr);
//     } catch (err) {
//         console.error({ err });
//         res.status(500).json({ err });
//     }
// });

// route.get("/filterReportsWithMajor/:major", async (req, res) => {
//     let sql = "select * from data_sub_report_type where head_report_id=1001";

//     try {
//         const result = await new Promise((resolve, reject) => {
//             base.query(sql, [req.params.major], (err, result) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 resolve(result);
//             });
//         });

//         if (result.length === 0) {
//             res.status(201).json({ "message": "No records found" });
//             return;
//         }

//         let resultArr = [];

//         for (let i = 0; i < result.length; i++) {
//             let subSql = `select * from ${result[i].table_name} as ecr inner join data_major_report_type as major where major_report_id=?`;
//             try {
//                 const rows = await new Promise((resolve, reject) => {
//                     base.query(subSql, [req.params.major], (err, rows) => {
//                         if (err) {
//                             reject(err);
//                             return;
//                         }
//                         resolve(rows);
//                     });
//                 });

//                 if (rows.length > 0) {
//                     rows.forEach(item => {
//                         resultArr.push(item);
//                     });
//                 }
//             } catch (err) {
//                 console.error({ err });
//             }
//         }

//         console.log(resultArr);
//         res.status(200).json(resultArr);
//     } catch (err) {
//         console.error({ err });
//         res.status(500).json({ err });
//     }
// });


// route.get("/filterReportsWithMajorAndSub/:major/:sub", async (req, res) => {
//     let sql = "select * from data_sub_report_type where head_report_id=1001";

//     try {
//         const result = await new Promise((resolve, reject) => {
//             base.query(sql, [req.params.major], (err, result) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 resolve(result);
//             });
//         });

//         if (result.length === 0) {
//             res.status(201).json({ "message": "No records found" });
//             return;
//         }

//         let resultArr = [];

//         for (let i = 0; i < result.length; i++) {
//             let subSql = `select * from ${result[i].table_name} as ecr inner join data_major_report_type as major inner join data_sub_report_type as sub where major.major_report_id=? and sub.sub_report_id=?;
//             `;
//             try {
//                 const rows = await new Promise((resolve, reject) => {
//                     base.query(subSql, [req.params.major,req.params.sub], (err, rows) => {
//                         if (err) {
//                             reject(err);
//                             return;
//                         }
//                         resolve(rows);
//                     });
//                 });

//                 if (rows.length > 0) {
//                     rows.forEach(item => {
//                         resultArr.push(item);
//                     });
//                 }
//             } catch (err) {
//                 console.error({ err });
//             }
//         }

//         console.log(resultArr);
//         res.status(200).json(resultArr);
//     } catch (err) {
//         console.error({ err });
//         res.status(500).json({ err });
//     }
// });

// route.get("/filterReportsWithParticulars", async (req, res) => {
//     const {acdyr_id,sem_id,major_id,sub_id}=req.body
//     let sql = "select * from data_sub_report_type where head_report_id=1001";

//     try {
//         const result = await new Promise((resolve, reject) => {
//             base.query(sql, [req.params.major], (err, result) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 resolve(result);
//             });
//         });

//         if (result.length === 0) {
//             res.status(201).json({ "message": "No records found" });
//             return;
//         }

//         let resultArr = [];

//         for (let i = 0; i < result.length; i++) {
//             if(req.body.acdyr_id!=null && req.body.sem_id==null && req.body.major_id==null && req.body.sub_id==null){
//                 let subSql = `select * from ${result[i].table_name} where acdyr_id=?`;
//                 try {
//                     const rows = await new Promise((resolve, reject) => {
//                         base.query(subSql, [req.body.acdyr_id], (err, rows) => {
//                             if (err) {
//                                 reject(err);
//                                 return;
//                             }
//                             resolve(rows);
//                         });
//                     });

//                     if (rows.length > 0) {
//                         rows.forEach(item => {
//                             resultArr.push(item);
//                         });
//                     }
//                 } catch (err) {
//                     console.error({ err });
//                 }
//             }
//             else if(req.body.acdyr_id!=null && req.body.sem_id!=null && req.body.major_id==null && req.body.sub_id==null){
//                 let subSql = `select * from ${result[i].table_name} where acdyr_id=? and sem_id=?`;
//                 try {
//                     const rows = await new Promise((resolve, reject) => {
//                         base.query(subSql, [req.body.acdyr_id,req.body.sem_id], (err, rows) => {
//                             if (err) {
//                                 reject(err);
//                                 return;
//                             }
//                             resolve(rows);
//                         });
//                     });

//                     if (rows.length > 0) {
//                         rows.forEach(item => {
//                             resultArr.push(item);
//                         });
//                     }
//                 } catch (err) {
//                     console.error({ err });
//                 }
//             }
//             else if(req.body.acdyr_id==null && req.body.sem_id==null && req.body.major_id!=null && req.body.sub_id==null){
//                 let subSql = `select * from ${result[i].table_name} as ecr inner join data_major_report_type as major_type where major_type.major_report_id=?`;
//                 try {
//                     const rows = await new Promise((resolve, reject) => {
//                         base.query(subSql, [req.body.major_id], (err, rows) => {
//                             if (err) {
//                                 reject(err);
//                                 return;
//                             }
//                             resolve(rows);
//                         });
//                     });

//                     if (rows.length > 0) {
//                         rows.forEach(item => {
//                             resultArr.push(item);
//                         });
//                     }
//                 } catch (err) {
//                     console.error({ err });
//                 }
//             }
//             else if(req.body.acdyr_id==null && req.body.sem_id==null && req.body.major_id!=null && req.body.sub_id!=null){
//                 let subSql = `select * from ${req.body.sub_id} as ecr inner join data_major_report_type as major_type inner join data_sub_report_type as sub_type where major_type.major_report_id=? and sub_type.sub_report_id=?`;
//                 try {
//                     const rows = await new Promise((resolve, reject) => {
//                         base.query(subSql, [req.body.major_id,req.body.sub_id], (err, rows) => {
//                             if (err) {
//                                 reject(err);
//                                 return;
//                             }
//                             resolve(rows);
//                         });
//                     });

//                     if (rows.length > 0) {
//                         rows.forEach(item => {
//                             resultArr.push(item);
//                         });
//                     }
//                 } catch (err) {
//                     console.error({ err });
//                 }
//             }
//             else if(req.body.acdyr_id!=null && req.body.sem_id!=null && req.body.major_id!=null && req.body.sub_id!=null){
//                 let subSql = `select * from ${req.body.sub_id} as ecr inner join data_major_report_type as major_type inner join data_sub_report_type as sub_type where ecr.acdyr_id=? and ecr.sem_id=? and major_type.major_report_id=? and sub_type.sub_report_id=?`;
//                 try {
//                     const rows = await new Promise((resolve, reject) => {
//                         base.query(subSql, [req.body.acdyr_id,req.body.sem_id,req.body.major_id,req.body.sub_id], (err, rows) => {
//                             if (err) {
//                                 reject(err);
//                                 return;
//                             }
//                             resolve(rows);
//                         });
//                     });

//                     if (rows.length > 0) {
//                         rows.forEach(item => {
//                             resultArr.push(item);
//                         });
//                     }
//                 } catch (err) {
//                     console.error({ err });
//                 }
//             }
//         }

//         console.log(resultArr);
//         res.status(200).json(resultArr);
//     } catch (err) {
//         console.error({ err });
//         res.status(500).json({ err });
//     }
// });

// route.get("/filterReportsWithParticulars", async (req, res) => {
//     const { acdyr_id, sem_id, major_id, sub_id, emp_id } = req.body;
//     let sql = "select * from data_sub_report_type where head_report_id=1001";

//     try {
//         const result = await new Promise((resolve, reject) => {
//             base.query(sql, (err, result) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 resolve(result);
//             });
//         });

//         if (result.length === 0) {
//             res.status(201).json({ "message": "No records found" });
//             return;
//         }

//         let resultArr = [];

//         for (let i = 0; i < result.length; i++) {
//             try {
//                 let subSql;
//                 let queryParams;

//                 if (req.body.acdyr_id != null && req.body.sem_id == null && req.body.major_id == null && req.body.sub_id == null) {
//                     subSql = `select * from ${result[i].table_name} where acdyr_id=? and ecr.event_coordinator like ?`;
//                     queryParams = [req.body.acdyr_id,`%${req.body.emp_id}%`];
//                 } else if (req.body.acdyr_id != null && req.body.sem_id != null && req.body.major_id == null && req.body.sub_id == null) {
//                     subSql = `select * from ${result[i].table_name} where acdyr_id=? and sem_id=? and ecr.event_coordinator like ?`;
//                     queryParams = [req.body.acdyr_id, req.body.sem_id,`%${req.body.emp_id}%`];
//                 } else if (req.body.acdyr_id == null && req.body.sem_id == null && req.body.major_id != null && req.body.sub_id == null) {
//                     subSql = `select * from ${result[i].table_name} as ecr inner join data_major_report_type as major_type on ecr.major_report_id = major_type.major_report_id where major_type.major_report_id=? and ecr.event_coordinator like ?`;
//                     queryParams = [req.body.major_id,`%${req.body.emp_id}%`];
//                 } else if (req.body.acdyr_id == null && req.body.sem_id == null && req.body.major_id != null && req.body.sub_id != null) {
//                     // subSql = `select * from ${req.body.sub_id} as ecr inner join data_major_report_type as major_type on ecr.major_report_id = major_type.major_report_id inner join data_sub_report_type as sub_type on ecr.sub_report_id = sub_type.sub_report_id where major_type.major_report_id=? and sub_type.sub_report_id=?`;
//                     subSql = `select * from ${req.body.sub_id} as ecr inner join data_major_report_type as major_type on ecr.major_report_id = major_type.major_report_id where major_type.major_report_id=? and ecr.event_coordinator like ?;`
//                     queryParams = [req.body.major_id, req.body.sub_id,`%${req.body.emp_id}%`];
//                 } else if (req.body.acdyr_id != null && req.body.sem_id != null && req.body.major_id != null && req.body.sub_id != null) {
//                     subSql = `select * from ${req.body.sub_id} as ecr inner join data_major_report_type as major_type on ecr.major_report_id = major_type.major_report_id where ecr.acdyr_id=? and ecr.sem_id=? and major_type.major_report_id=? and ecr.event_coordinator like ?`;
//                     queryParams = [req.body.acdyr_id, req.body.sem_id, req.body.major_id, req.body.sub_id,`%${req.body.emp_id}%`];
//                 }

//                 const rows = await new Promise((resolve, reject) => {
//                     base.query(subSql, queryParams, (err, rows) => {
//                         if (err) {
//                             reject(err);
//                             return;
//                         }
//                         resolve(rows);
//                     });
//                 });

//                 if (rows.length > 0) {
//                     rows.forEach(item => {
//                         resultArr.push(item);
//                     });
//                 }
//             } catch (err) {
//                 console.error({ err });
//             }
//         }

//         console.log(resultArr);
//         res.status(200).json(resultArr);
//     } catch (err) {
//         console.error({ err });
//         res.status(500).json({ err });
//     }
// });

// route.post("/filterReportsWithParticulars", async (req, res) => {
//     const { acdyr_id, sem_id, major_id, sub_id, emp_id } = req.body;
//     let sql = "SELECT * FROM data_sub_report_type WHERE head_report_id = 1001";
// console.log(acdyr_id+sem_id+major_id+sub_id+emp_id)
//     try {
//         const result = await new Promise((resolve, reject) => {
//             base.query(sql, (err, result) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 resolve(result);
//             });
//         });

//         if (result.length === 0) {
//             res.status(201).json({ message: "No records found" });
//             return;
//         }

//         let resultArr = [];

//         for (let i = 0; i < result.length; i++) {
//             try {
//                 let subSql;
//                 let queryParams;

//                 // Adjusted conditions to use strict equality checks (!== and ===)
//                 if (acdyr_id !== null && sem_id === null && major_id === null && sub_id === null) {
//                     subSql = `SELECT * FROM ${result[i].table_name} WHERE acdyr_id=? AND event_coordinator LIKE ?`;
//                     queryParams = [acdyr_id, `%${emp_id}%`];
//                     const rows = await new Promise((resolve, reject) => {
//                         base.query(subSql, queryParams, (err, rows) => {
//                             if (err) {
//                                 reject(err);
//                                 return;
//                             }
//                             resolve(rows);
//                         });
//                     });
    
//                     if (rows.length > 0) {
//                         resultArr = resultArr.concat(rows); // Use concat to merge arrays
//                     }
//                 } else if (acdyr_id !== null && sem_id !== null && major_id === null && sub_id === null) {
//                     subSql = `SELECT * FROM ${result[i].table_name} WHERE acdyr_id=? AND sem_id=? AND event_coordinator LIKE ?`;
//                     queryParams = [acdyr_id, sem_id, `%${emp_id}%`];
//                     const rows = await new Promise((resolve, reject) => {
//                         base.query(subSql, queryParams, (err, rows) => {
//                             if (err) {
//                                 reject(err);
//                                 return;
//                             }
//                             resolve(rows);
//                         });
//                     });
    
//                     if (rows.length > 0) {
//                         resultArr = resultArr.concat(rows); // Use concat to merge arrays
//                     }
//                 } else if (acdyr_id === null && sem_id === null && major_id !== null && sub_id === null) {
//                     subSql = `SELECT * FROM ${result[i].table_name} AS ecr INNER JOIN data_major_report_type AS major_type ON ecr.major_report_id = major_type.major_report_id WHERE major_type.major_report_id=? AND event_coordinator LIKE ?`;
//                     queryParams = [major_id, `%${emp_id}%`];
//                     const rows = await new Promise((resolve, reject) => {
//                         base.query(subSql, queryParams, (err, rows) => {
//                             if (err) {
//                                 reject(err);
//                                 return;
//                             }
//                             resolve(rows);
//                         });
//                     });
    
//                     if (rows.length > 0) {
//                         resultArr = resultArr.concat(rows); // Use concat to merge arrays
//                     }
//                 } 
//                 // else if (acdyr_id === null && sem_id === null && major_id !== null && sub_id !== null) {
//                 //     subSql = `SELECT * FROM ${sub_id} AS ecr INNER JOIN data_major_report_type AS major_type ON ecr.major_report_id = major_type.major_report_id WHERE major_type.major_report_id=? AND ecr.event_coordinator LIKE ?`;
//                 //     queryParams = [major_id, `%${emp_id}%`];
//                 // } else if (acdyr_id !== null && sem_id !== null && major_id !== null && sub_id !== null) {
//                 //     subSql = `SELECT * FROM ${sub_id} AS ecr INNER JOIN data_major_report_type AS major_type ON ecr.major_report_id = major_type.major_report_id WHERE ecr.acdyr_id=? AND ecr.sem_id=? AND major_type.major_report_id=? AND ecr.event_coordinator LIKE ?`;
//                 //     queryParams = [acdyr_id, sem_id, major_id, `%${emp_id}%`];
//                 // }

//                 // const rows = await new Promise((resolve, reject) => {
//                 //     base.query(subSql, queryParams, (err, rows) => {
//                 //         if (err) {
//                 //             reject(err);
//                 //             return;
//                 //         }
//                 //         resolve(rows);
//                 //     });
//                 // });

//                 // if (rows.length > 0) {
//                 //     resultArr = resultArr.concat(rows); // Use concat to merge arrays
//                 // }
//             } catch (err) {
//                 console.error({ err });
//             }
//         }
//         if (acdyr_id === null && sem_id === null && major_id !== null && sub_id !== null) {
//             subSql = `SELECT * FROM ${sub_id} AS ecr INNER JOIN data_major_report_type AS major_type ON ecr.major_report_id = major_type.major_report_id WHERE major_type.major_report_id=? AND ecr.event_coordinator LIKE ?`;
//             queryParams = [major_id, `%${emp_id}%`];
//             try{
//                 const rows = await new Promise((resolve, reject) => {
//                     base.query(subSql, queryParams, (err, ress) => {
//                         if (err) {
//                             reject(err);
//                             return;
//                         }
//                         resolve(ress);
//                         // console.log(ress)
//                     });
//                 });
//                 console.log(rows)
//                 if (rows.length > 0) {
//                     resultArr = resultArr.concat(rows); // Use concat to merge arrays
//                 }
//                 } catch (err){
//                     console.log({err})
//                 }
//         } else if (acdyr_id !== null && sem_id !== null && major_id !== null && sub_id !== null) {
//             subSql = `SELECT * FROM ${sub_id} AS ecr INNER JOIN data_major_report_type AS major_type ON ecr.major_report_id = major_type.major_report_id WHERE ecr.acdyr_id=? AND ecr.sem_id=? AND major_type.major_report_id=? AND ecr.event_coordinator LIKE ?`;
//             queryParams = [acdyr_id, sem_id, major_id, `%${emp_id}%`];
//             try{
//                 const rows = await new Promise((resolve, reject) => {
//                     base.query(subSql, queryParams, (err, ress) => {
//                         if (err) {
//                             reject(err);
//                             return;
//                         }
//                         resolve(ress);
//                         // console.log(ress)
//                     });
//                 });
//                 console.log(rows)
//                 if (rows.length > 0) {
//                     resultArr = resultArr.concat(rows); // Use concat to merge arrays
//                 }
//                 } catch (err){
//                     console.log({err})
//                 }
//         }
//         // try{
//         // const rows = await new Promise((resolve, reject) => {
//         //     base.query(subSql, queryParams, (err, ress) => {
//         //         if (err) {
//         //             reject(err);
//         //             return;
//         //         }
//         //         resolve(ress);
//         //         // console.log(ress)
//         //     });
//         // });
//         // console.log(rows)
//         // if (rows.length > 0) {
//         //     resultArr = resultArr.concat(rows); // Use concat to merge arrays
//         // }
//         // } catch (err){
//         //     console.log({err})
//         // }

//         // console.log(resultArr);
//         res.status(200).json(resultArr);
//     } catch (err) {
//         console.error({ err });
//         res.status(500).json({ err });
//     }
// });

module.exports=route