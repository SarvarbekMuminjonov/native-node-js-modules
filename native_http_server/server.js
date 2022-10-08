import http from "http"
import { User } from "./user.controller.js"

const hostname = "127.0.0.1"
const port = 3000

//endpoints
const routes = {
  "/": "<h1>Hello </h1>",
  "/api/user": new User(),
}
let data = new User()
data["GET"]
//types for serializer
const types = {
  object: JSON.stringify,
  string: (s) => s,
  undefined: () => "not found",
  function: (fn, req, res) => JSON.stringify(fn(req, res)),
}
const server = http.createServer((req, res) => {
  let data = routes[req.url]
  const method = req.method
  data = data[method]
  const type = typeof data
  const serializer = types[type]
  const result = serializer(data, req, res)
  res.end(result)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
