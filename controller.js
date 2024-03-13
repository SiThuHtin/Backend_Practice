const pool = require('./database/db')

const getLoginData = (req,res)=>{
  pool.query("SELECT * FROM login",(error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows)
  })
}
const getPersonData = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM login WHERE id = $1",[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}
const addFormData =(req,res)=>{
   const {email,password}=req.body;
   pool.query("INSERT INTO login (email,password) VALUES ($1,$2)",[email,password],(error,results)=>{
    if(error) throw error;
    res.status(201).send("created successfully");
   })

}
module.exports={
    getLoginData,
    getPersonData,
    addFormData
}