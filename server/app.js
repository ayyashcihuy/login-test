const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")
const userRouter = require("./routes/userRouter")
const dataRouter = require("./routes/dataRouter")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/', userRouter)
app.use('/', dataRouter)

app.listen(port, () => {
    console.log(`Listen on http://localhost:${port}`);
})
