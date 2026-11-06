const express = require("express")
const app = express()
const rotasProfessores = require("./routes/professores.routes")
const rostasCursos = require("./routes/cursos.routes")


app.use(express.json())
app.use("/professores", rotasProfessores)
app.use("/cursos", rostasCursos)

app.listen(3000, () => console.log("API no ar"))