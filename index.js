const express = require('express');
const ejs = require('ejs');
let globalScore = 0;
let answers = [];

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs"); 
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("index");
});

//localhost:3000/views/my_resume == > nav bar href to the get request is present in the nav bar
app.get('/my_resume', (req, res) => {
    res.render("my_resume");
});

app.get('/blog', (req, res) => {
    res.render("blog");
});

app.get('/my_fun_facts', (req, res) => {
    res.render("my_fun_facts");
});

app.get('/trivia', (req, res) => {
    res.render("trivia");
});

app.post('/triviaOne', (req, res) => {
    if(req.body.nameOne == 'D' || req.body.nameOne == 'd'){
        globalScore++;
        answers.push('That Answer Is Correct');
        res.render('trivia', {
            answers,
            globalScore
        });
    } else{
        answers.push(`The answer is Incorrect.`);
    }
});

app.post('/triviaTwo', (req, res) => {
    if(req.body.nameTwo == 'B' || req.body.nameTwo == 'b'){
        globalScore++;
        answers.push('That Answer Is Correct');
        res.render('trivia', {
            answers,
            globalScore
        });
    } else{
        answers.push(`The answer is Incorrect.`);
    }
});

app.post('/triviaThree', (req, res) => {
    if(req.body.nameThree == 'A' || req.body.nameThree == 'a'){
        globalScore++;
        answers.push('That Answer Is Correct');
        res.render('trivia', {
            answers,
            globalScore
        });
    } else{
        answers.push(`The answer is Incorrect.`);
    }
});

app.post('/triviaFour', (req, res) => {
    if(req.body.nameFour == 'C' || req.body.nameFour == 'c'){
        globalScore++;
        answers.push('That Answer Is Correct');
        res.render('trivia', {
            answers,
            globalScore
        });
    } else{
        answers.push(`The answer is Incorrect.`);
    }
});

app.post('/triviaFive', (req, res) => {
    if(req.body.nameFive == 'B' || req.body.nameFive == 'b'){
        globalScore++;
        answers.push('That Answer Is Correct');
        res.render('trivia', {
            answers,
            globalScore
        });
    } else{
        answers.push(`The answer is Incorrect.`);
    }
});

app.post('/triviaSix', (req, res) => {
    if(req.body.nameSix == 'A' || req.body.nameSix == 'a'){
        globalScore++;
        answers.push('That Answer Is Correct');
        res.render('trivia', {
            answers,
            globalScore
        });
    } else{
        answers.push(`The answer is Incorrect.`);
    }
});
if(globalScore == 6){
    globalScore = 0;
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('running on port 3000'));
