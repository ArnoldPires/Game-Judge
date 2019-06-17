const gameJudge = [

]
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use(express.static('public'));


//mongoose setup
const mongoose = require('mongoose');
const url = 'mongodb+srv://Arnold:action1234@game-judge-3yhpt.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
  });

app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});
