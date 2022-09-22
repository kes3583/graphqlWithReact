import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';

//@Todo https://youtu.be/YyUWW04HwKY

const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  // app.use("/graphql", graphqlHTTP({
  //     schema,
  //     graphiql: true
  // }) )

  app.listen(4002, ()=>{
    console.log('SERVER running on port 4002');
  });
}

main().catch((error)=>{
  console.log('ERROR:', error);
})