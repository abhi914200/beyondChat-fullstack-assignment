import express from 'express';

const app=express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('BeyondChats Api is running');
});
export default app;