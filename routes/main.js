const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/', (req, res, next) => {
    const data = req.context

    res.render('home', data)
})

 router.get('/blog', (req, res, next) => {
    const data = req.context

    res.render('blog', data)
 })

 router.get('/menuBreakfast', async(req, res, next) => {
    const data = req.context
    const itemCtr = controllers.item.instance()
    data.Breakfast = await itemCtr.get({category:'Breakfast'})
    console.log(data.Breakfast)
    res.render('menuBreakfast', data)

})

router.get('/menuLunch', async(req, res, next) => {
    const data = req.context
    const itemCtr = controllers.item.instance()
    data.Lunch= await itemCtr.get({category:'Lunch'})

    res.render('menuLunch', data)
})

router.get('/menuDinner', async(req, res, next) => {
    const data = req.context
    const itemCtr = controllers.item.instance()
    data.Dinner = await itemCtr.get({category:'Dinner'})

    res.render('menuDinner', data)
})

router.get('/menuDessert', async(req, res, next) => {
    const data = req.context
    const itemCtr = controllers.item.instance()
    data.Dessert = await itemCtr.get({category:'Dessert'})

    res.render('menuDessert', data)
})

router.get('/menu', async(req, res, next) => {
     const data = req.context
     const itemCtr = controllers.item.instance()
    //data.Breakfast = await itemCtr.get({category:'Breakfast'})
    //data.Lunch = await itemCtr.get({category:'Lunch'})
    //data.Dinner = await itemCtr.get({category:'Dinner'})

     res.render('menu', data)
 })

router.get('/items', async(req, res, next) => {
    const filters = req.query
    const itemCtrl = controllers.item.instance()
    const items = await itemCtrl.get(filters)

    res.json({
        items
    })
})

module.exports = router  