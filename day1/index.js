const express = reqiure("express");
const app = express();
app.get("/", (req, res) => {
  return res.send("This is Your Server");
});
app.listen(8000, () => {
  console.log("Server is running on PORT 8000 Successfully...!");
});
