const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs')

app.use(express.json());
app.use(express.static('public'));


mongoose.connect(`mongodb+srv://plokohddy63:8UcPoTGcWoN0PfSw@cluster0.dtnysha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log(`Connect to mongo DB`);
    })

const Goods = mongoose.model('Goods', { title: String, price: Number });

app.post('/add-goods', async (req, res) => {
    try {
        const { title } = req.body;
        const { price } = req.body;
        const goods = new Goods({ title, price });
        await goods.save();
        console.log('Add new goods');
        res.status(201).json(goods);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});
app.get('/goods', async (req, res) => {
    try {
        const goods = await Goods.find();
        res.json(goods);
    } catch (err) {
        res.status(500).json({ message: err });
    }
})
app.delete('/goods/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Goods.findByIdAndDelete(id);
        res.status(204).json({ message: 'successfully deleted' });
    } catch (err) {
        res.status(500).json({ message: err });
    }

})

app.get('/admin/contacts', (req, res) => {
    
    const filePath = path.join(__dirname, 'public', 'admin',  'contacts.html')

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('error:', err);
            res.status(500).send('server error');
            return;
        }

        res.send(data);
    });
});

app.get('/admin/messages', (req, res) => {
    
    const filePath = path.join(__dirname, 'public', 'admin',  'messages.html')

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('error:', err);
            res.status(500).send('server error');
            return;
        }

        res.send(data);
    });
});




app.listen(PORT, () => {
    console.log(`Server work on port: ${PORT}`);
})


