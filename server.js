const express = require('express');
const knex = require('knex');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'root',
        database: 'vocab'
    }
});

app.get('/', (req, res) => {
    db.select('*').from('words').then(data => {
        res.json(data);
    })
})

app.listen(3000, () => {
    console.log('App is running');
})
