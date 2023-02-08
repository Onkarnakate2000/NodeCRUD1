const connection=require('../connection/mysql.connection');

module.exports={
    getAll:(req,res) =>{
        connection.query('select id, Name, Mobile, Email from users',(err,result)=>{
            if(err){
                res.status(400).send({error:true, message:err.message});
            }else{
                res.status(200).send({error:false, data:result});
            }
        })
    },
    createUser:(req,res) =>{
        let {Name, Mobile, Email, Password}=req.body;
        connection.query(`INSERT INTO users(id, Name, Mobile, Email, Password) VALUES (0,'${Name}','${Mobile}','${Email}','${Password}')`,
        (err,result)=>{
            if(err){
                res.status(400).send({error:true, message:err.message});
            }else{
                res.status(200).send({error:false, data:result});
            }
        })
    },
    updateUser:(req,res) =>{
        let id=req.params.id
        let {Name, Mobile, Email, Password}=req.body;
        connection.query(`UPDATE users SET Name='${Name}', Mobile='${Mobile}', Email='${Email}', Password='${Password}' WHERE id='${id}'`,
        (err,result)=>{
            if(err){
                res.status(400).send({error:true, message:err.message});
            }else{
                res.status(200).send({error:false, data:result});
            }
        } )
    },
    deleteUser:(req,res) =>{
        let id=req.params.id;
        connection.query(`DELETE FROM users WHERE id='${id}'`,
        (err,result)=>{
            if(err){
                res.ststus(400).send({error:true, message:err.message});
            }else{
                res.status(200).send({error:false, data:result});
            }
        })
    },
    findUser:(req,res) =>{
        let id=req.params.id;
        connection.query(`SELECT id, Name, Mobile, Email FROM users WHERE id=${id}`,
        (err,result)=>{
            if(err){
                res.status(400).send({error:true, message:err.message});
            }else{
                res.status(200).send({err:false, data:result});
            }
        });
    }
}



