const app = require("./app")

const port = Number(process.env.PORT || 4000)

app.listen(port, () => {
  console.log(`Sticker Track API listening at http://localhost:${port}`)
})
