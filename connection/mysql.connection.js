const mysql=require('mysql');

const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'b22'
})

connection.connect((err)=>{
    err?console.log(err.message):console.log('connected with db')
})

module.exports=connection;
