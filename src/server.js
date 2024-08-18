
import express from 'express';

export const server = express();

server.use("/", (req, res)=> {
    res.json({ message: "Hola mundo desde Node.js y Typescript"});
});


git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/R3NDEL/ejemplo-1.git
git push -u origin main

git config --global user.email "eldisipuloquerido@gmail.com"
  git config --global user.name "R3NDEL"