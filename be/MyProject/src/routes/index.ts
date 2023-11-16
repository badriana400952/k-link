import * as express from 'express'
import UserController from '../controller/UserController'
import ProductController from '../controller/ProductController'
import authenticate from '../middleware/auth'
import TransaksiController from '../controller/TransaksiController'
import LaporanTransaksiController from '../controller/LaporanTransaksiController'




const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello World!")
})

router.post('/login', UserController.login)
router.post('/users', UserController.create)

router.get('/check', authenticate,UserController.check)

router.get('/users',UserController.find)
router.get('/users/:id', authenticate,UserController.findOne)
router.patch('/users/:id', authenticate,UserController.patch)
router.delete('/users/:id', authenticate,UserController.delete)

router.get('/product', ProductController.find)
router.get('/product/:id', ProductController.findOne)
router.post('/product', ProductController.create)
router.patch('/product/:id', ProductController.patch)
router.delete('/product/:id', ProductController.delete)


router.get('/transaksi', TransaksiController.find)
router.get('/transaksi/:id', TransaksiController.findOne)
router.post('/transaksi', TransaksiController.create)
router.patch('/transaksi/:id', TransaksiController.patch)
router.delete('/transaksi/:id', TransaksiController.delete)

router.get('/laporan', LaporanTransaksiController.find)
router.get('/laporan/:id', LaporanTransaksiController.findOne)
router.post('/laporan', LaporanTransaksiController.create)
router.patch('/laporan/:id', LaporanTransaksiController.patch)
router.delete('/laporan/:id', LaporanTransaksiController.delete)

export default router

