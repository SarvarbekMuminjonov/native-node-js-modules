import http from "http"
import { User } from "./controllers/user.controller.js"

const hostname = "127.0.0.1"
const port = 3000

//endpoints
const routes = {
  "/": "<h1>Hello </h1>",
  "/api/user": new User(),
}
//types for serializer
// const types = {
//   object: JSON.stringify,
//   string: (s) => s,
//   number: (n) => n.toString(),
//   undefined: () => "not found",
//   function: (fn, req, res) => JSON.stringify(fn(req, res)),
// }
const server = http.createServer((req, res) => {
  let data = routes[req.url]
  if (data === undefined) {
    res.statusCode = 404
    return res.end("<h1>Somenting went wrong</h1>")
  }
  const method = req.method
  data = data[method]
  data(req, res)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
