const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

// Get the articles to show on the website.
app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test description'
    }]
    res.render('index', { articles: articles })
})

app.listen(5001)