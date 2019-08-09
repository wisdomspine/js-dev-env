import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

const app= express();

const PORT=3000;
const COMPILER= webpack(config);
app.use(require('webpack-dev-middleware')(COMPILER, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../src/index.html'));
})


app.listen(PORT, (err)=>{
  if(err){ //eslint-disable empty-block
  }else{
    open("http://localhost:"+PORT);
  }
})
