import express from "express"

const app = express()
const PORT = 2029

app.use(express.json())



app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);

})

const personOBJ = {
    name: "Tunde",
    username: "TBOY",
    age: "23",
    password: "1234",
    email: "tunde23@gmail.com",
}
 
app.get('/person', (req, res)=>{
    res.status(200).json(personOBJ)
})


const validateUser = (req, res, next) =>{

    const myPasscode = "bbt"
    const {password} = req.headers
if(password === myPasscode) {
    next();
}else{
    res.status(401).json({ message: "unauthorized"})
}
}


