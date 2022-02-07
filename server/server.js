const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get('/api/inventory', (req, res) => {
    console.log(req.query)
    if(req.query.item) {
        const filteredItems = inventory.filter((invItem) => invItem.toLowerCase().includes(req.query.item.toLowerCase()))

        res.status(200).send(filteredItems)

    }else {res.status(200).send(inventory)

    } 
    // console.log(req)
})



app.get('/api/inventory/:index', (req, res) => {
    console.log(req.params)
    const item = inventory[+req.params.index]
    res.status(200).send(item)
})

app.listen(5050, () => console.log('Server runniong on port 5050'))