import express from 'express';
import articleRoutes from './routes/articleRoutes.js';

const app=express();

app.use(express.json());
app.use('/api/articles',articleRoutes);

app.get('/', (req,res)=>{
    res.send('BeyondChats Api is running');
});
export default app;