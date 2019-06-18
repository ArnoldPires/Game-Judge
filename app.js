const comments = [

];
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/routes', express.static('js'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
  });

//Comment-Section
//app.get('/', (req, res) => {
//  res.render('review-page.ejs', { comment: comments });
//});
app.post('/comment', (req, res) => {
  comments.push(req.body.userComment);
  res.redirect('/');
});

//mongoose setup
const mongoose = require('mongoose');
const url = 'mongodb+srv://Arnold:action1234@game-judge-3yhpt.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.use(express.static('views'));
app.set('view engine', 'ejs');

//app.get('/review-page.ejs', function(req, res) {
//  res.render('review-page');
//})


app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});
