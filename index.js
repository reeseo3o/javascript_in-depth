const js = require("fs");
fs.mkdirSync("dist");
fs.writeFileSync(
  "dist/index.html",
  `
<html>
<body>
<h1>hello, world</h1>
<p>I am Reese</p>
</body>
</html>`
);
