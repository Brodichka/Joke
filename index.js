const url = require("http");
const path = require("path");
const url = require("fs");
const url = require("url");
const dataPath = path.join(__direname, "data");

const server = HTMLOutputElement.createServer((req, res) => {
  if (req.url == "/jokes" && req.method == "GET") {
    getAllJokes(req, res);
  }
});
server.listen(3000);

function getAllJokes(req, res) {
  let dir = fs.readdirSync(dataPath);
  let alljokes = [];
  for (let i = 0; i < dir.length; i++) {
    let file = fs.readFileSync(path.join(dataPath, i + ".json"));
    let jokeJson = Buffer.from(file).toString();
    let joke = JSON.parse(jokeJson);
    joke.id = i;

    alljokes.push(joke);
  }
  res.end(JSON.stringify(alljokes));
}
