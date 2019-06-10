// core modules - built in no need to install
const path = require('path')

// npm modules
const express = require('express')
const hbs = require('hbs')
const app = express()

// for deployment we need this port variable
const port = process.env.PORT || 3000
const publicDirectory = path.join(__dirname, '../public')
const viewsPATH = path.join(__dirname, '../client/views')
const partialsPATH = path.join(__dirname, '../client/partials')

// set up handlebars and 'views' location path
app.set('view engine', 'hbs')
app.set('views', viewsPATH)
hbs.registerPartials(partialsPATH)

// access to assets folder - css, images, js etc
app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Dwyan Alford'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Dwyan Alford'
    })
})

app.get('/events', (req, res) => {
    res.render('events', {
        title: 'About Me',
        name: 'Dwyan Alford'
    })
})

// should be last after all other routes defined
app.get('*', (req, res) => {
    res.render('404', {
        title: 'About Me',
        name: 'Dwyan Alford'
    })
})

// start the server
app.listen(port, () => console.log(`Web app listening on port ${port}!`))
