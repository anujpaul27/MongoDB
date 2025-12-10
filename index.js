const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a get function  as well, right now");
});

const users = [{ id: 1, name: "Ram" }];

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://paulsagar803_db_user:3HNifu7GdYknjr0n@cluster0.hzfwiu4.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const collection = client.db('UserDB').collection('user')

    app.get("/users", async(req, res) => {
      const user = await collection.find().toArray();
      res.send(user)
    });

    app.post("/users", async(req, res) => {
      const user = req.body;
      const result = await collection.insertOne(user)
      res.send(result)
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    // Ensures that the client will close when you finish/error
    console.log(error);
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`This application are run by this port: ${port} as well`);
});
