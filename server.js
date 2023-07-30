const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/',(req, res) => {
    const articles = [
        {
        title: 'Title Article',
        createdAt: new Date(),
        description: 'Test description'
        },
        {
            title: 'Title Post',
            createdAt: new Date(),
            description: 'Post description'
        },
    ]
    res.render('index', {articles: articles})
})

app.listen(5000)
