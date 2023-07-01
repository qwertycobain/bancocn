import express from "express"

import {v4} from "uuid"


const app = express()
app.use(express.json())
const costumers =[]

app.post("/account", (req, res)=>{
    const {cpf, name} = req.body
    const id = v4()
    costumers.push({
        cpf,    
        name,
        id: id,
        statement :[]
    })
    return res.status(201).send()




})

///mudança maneira
app.listen(3000)
