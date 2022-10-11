const user = {
  name: "Sarvar",
  age: 22,
}

export class User {
  GET(req, res) {
    res.statusCode = 200
    res.end(JSON.stringify(user))
  }
  POST(req, res) {}
}
