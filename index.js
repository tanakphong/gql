import express from 'express';
import mongoose from 'mongoose';
import graphHTTP from 'express-graphql';

import schema from './graphql';

const app = express();

mongoose.connect('mongodb://dev:dev@ds157282.mlab.com:57282/fortest');
const db=mongoose.connection;
db.on('error', ()=> console.log('Error'))
.once('open', ()=> console.log('Connect to DB.'));

app.get('/',(req,res) => {
  res.send('Hello there');
});

app.use('/graphql', graphHTTP(() => ({
  schema,
  graphiql:true,
  pretty:true
})))

app.listen(3006, ()=>{
  console.log('Server running port: 3006');
});