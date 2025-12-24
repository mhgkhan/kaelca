import express from "express"




const PORT = process.env.PORT || 3000


const App  = express();








App.get("/", (req,res)=>
{
    return res.status(200).json({"Started":"OK"})
})

App.listen(8080, ()=>{
    console.log(`Server is running on port 8080`)
})

export default App;