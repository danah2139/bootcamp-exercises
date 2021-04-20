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
    const idUser1 = new ObjectID();
    const idUser2 = new ObjectID();
    const idPost1 = new ObjectID();
    const idPost2 = new ObjectID();
    const idComment1 = new ObjectID();
    const idComment2 = new ObjectID();
  

    db.collection("users").insertMany(
      [
        { _id=idUser1,email: "dana@gmail.com", name: "dana", blogs: [{$ref:'posts',$id:idPost1}], comments: [{$ref:'comments',$id:idComment1}] },
        { _id=idUser1,email: "erez@gmail.com", name: "erez", blogs: [{$ref:'posts',$id:idPost2}], comments: [{$ref:'comments',$id:idComment2}] },
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to insert users");
        }
      }
    );

    db.collection("posts").insertMany([{
      _id:idPost1,
      body: "hi every one",
      title: "hello!",
      autor: {$ref:"users",$id:idUser1},
      comments: [{$ref:'comments',$id:idComment1}],
    },{
        _id:idPost2,
        body: "new body!!!!!!!!!!!!",
        title: "new title!",
        autor: {$ref:"users",$id:idUser2},
        comments: [{$ref:'comments',$id:idComment2}],
      }]);

    db.collection("comments").insertMany([{
      _id:idComment1,
      body: "NICE WORK!",
      autor: {$ref:"users",$id:idUser1},
    },{
        _id:idComment2,
        body: "hiiiiiiiiiiiiiiiiiiiiiiiii bla bia",
        autor: {$ref:"users",$id:idUser2},
      }]);

    
  }
);
