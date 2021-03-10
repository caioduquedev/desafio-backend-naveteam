const app = require("./app");
const mongoose = require("mongoose");
const PORT = process.env.port || 5000;

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nfvge.mongodb.net/backend-nave?retryWrites=true&w=majority`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (error) => {
    if (error) console.log(error);
    console.log("Database Connected!");
  }
);

app.listen(PORT, () => {
  console.log("server is running");
});
