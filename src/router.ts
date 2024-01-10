import { Router } from "express";

const router = Router()

/**
 * Products
 */
router.get('/product', () => {})
router.get('/product/:id', () => {})
router.put('/product/:id', () => {})
router.post('/product', () => {})
router.delete('/product/:id', () => {})


/**
 * Updates
 */
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.post('/update', () => {})
router.delete('/update/:id', () => {})


/**
 * Update Points
 */
router.get('/updatePoint', () => {})
router.get('/updatePoint/:id', () => {})
router.put('/updatePoint/:id', () => {})
router.post('/updatePoint', () => {})
router.delete('/updatePoint/:id', () => {})

/**
 * Users
 */
router.get('/user', (req, res) => { 
    res.json('Get User Route')
 })
router.get('/user/:id', () => {})
router.put('/user/:id', () => {})
router.post('/user', () => {})
router.delete('/user/:id', () => {})

export default router