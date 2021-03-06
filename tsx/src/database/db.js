const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Connected to the database, player!");
});

const commentSchema = new mongoose.Schema({
  name: String,
  comments: [String],
  date: { type: Date, default: Date.now },
});

const Comments = mongoose.model("Comments", commentSchema);

const testComments = new Comments({
  name: "Test",
  comments: ["Comment 1", "Comment 2", "Comment 3", "Comment 4"],
});

testComments.save(function (err) {
  if (err) return console.error(err);
  console.log("DB saved player");
});
