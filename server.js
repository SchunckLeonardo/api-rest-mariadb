import app from "./app.js"

app.listen(process.env.PORT, () => {
  console.log(`Server starting in port ${process.env.PORT}`)
  console.log(`Enter in URL: http://localhost:${process.env.PORT}`)
})
