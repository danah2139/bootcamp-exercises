const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "BlogPost";
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database");
    }
    const db = client.db(databaseName);
    db.collection("users").insertOne(
      { _id: "dana@gmail.com", name: "dana", blogs: [], comments: [] },
      (error, result) => {
        if (error) {
          return console.log("unable to insert  user");
        }
      }
    );

    db.collection("users").insertOne(
      { _id: "erez@gmail.com", name: "erez", blogs: [], comments: [] },
      (error, result) => {
        if (error) {
          return console.log("unable to insert  user");
        }
      }
    );
    db.collection("posts").insertOne({
      body: "new body!!!!!!!!!!!!",
      title: "new title!",
      autor: "erez@gmail.com",
      comments: [],
    });

    db.collection("comments").insertOne({
      body: "hiiiiiiiiiiiiiiiiiiiiiiiii bla bia",
      autor: "erez@gmail.com",
    });

    db.collection("users").updateOne(
      { _id: "dana@gmail.com" },
      { $push: { posts: new mongodb.ObjectId("607e9f14e658e43054ef8ac1") } }
    );
    db.collection("users").updateOne(
      { _id: "erez@gmail.com" },
      { $push: { posts: new mongodb.ObjectId("607ea0a98af7182ef83ed963") } }
    );
    db.collection("users").updateOne(
      { _id: "dana@gmail.com" },
      { $push: { comments: new mongodb.ObjectId("607e9f14e658e43054ef8ac2") } }
    );
    db.collection("users").updateOne(
      { _id: "erez@gmail.com" },
      { $push: { comments: new mongodb.ObjectId("607ea0a98af7182ef83ed964") } }
    );
    db.collection("posts").updateOne(
      { _id: new mongodb.ObjectId("607e9f14e658e43054ef8ac1") },
      { $push: { comments: new mongodb.ObjectId("607e9f14e658e43054ef8ac2") } }
    );
    db.collection("posts").updateOne(
      { _id: new mongodb.ObjectId("607ea0a98af7182ef83ed963") },
      { $push: { comments: new mongodb.ObjectId("607ea0a98af7182ef83ed964") } }
    );
  }
);
