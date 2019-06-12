const gameJudge = [

]
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use(express.static('public'));

app.use(express.static('views'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
  });



app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});
