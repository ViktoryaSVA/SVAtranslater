module.exports = async function runMongoConnection(MongoClient, url, mongoClient, user) {
  try {
    await mongoClient.connect();
    const db = mongoClient.db('users');
    const collection = db.collection('user');
    const result = await db.command({ ping: 1 });

    collection.insertOne(user);
    console.log(`Connected! ${result}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
