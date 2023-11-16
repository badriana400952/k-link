import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { Transaksi } from "../entity/Transaksi"
import { LaporanTransaksi } from "../entity/LaporanTransaksi"
class LaporanTransaksiService {
    private readonly LaporanTransaksiRepository: Repository<LaporanTransaksi> = AppDataSource.getRepository(LaporanTransaksi)

    async find(req: Request, res: Response) {
        try {
            const products = await this.LaporanTransaksiRepository.find()
            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async findOne(req: Request, res: Response) {
        const { id } = req.params
        try {
            const product = await this.LaporanTransaksiRepository.findOne({
                where: {
                    id: Number(id)
                },

            })
            res.status(200).json(product)
        } catch (error) {
            console.log(error)
        }
    }
    async create(req: Request, res: Response) {
        const {bnsperiod, invoice_number, invoice_date, customer, prdnm, qty, harga } = req.body


        try {
            const product = this.LaporanTransaksiRepository.create({
                bnsperiod: bnsperiod,
                invoice_number: invoice_number,
                invoice_date: invoice_date,
                customer: customer,
                prdnm: prdnm,
                qty: qty,
                harga: harga
            })
            console.log("product", product)


            const saveProduct = await this.LaporanTransaksiRepository.save(product)
            console.log("saveProduct", saveProduct)
            console.log("uploadCloude", product)
            res.status(200).json(saveProduct)
        } catch (error) {
            console.log(error)
        }
    }

    async patch(req: Request, res: Response) {
        const { id } = req.params
        const {bnsperiod, invoice_number, invoice_date, customer, prdnm, qty, harga } = req.body

        try {
            const product = await this.LaporanTransaksiRepository.findOne({
                where: {
                    id: Number(id)
                },
            })
            product.bnsperiod = bnsperiod,
            product.invoice_number = invoice_number,
            product.invoice_date = invoice_date,
            product.customer = customer,
            product.prdnm = prdnm,
            product.qty = qty,
            product.harga = harga
            
            await this.LaporanTransaksiRepository.save(product)
            res.status(200).json("Berhasil di edit")
        } catch (error) {
            console.log(error)
        }
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params
        try {
            const product = await this.LaporanTransaksiRepository.findOne({
                where: {
                    id: Number(id)
                }
            })
            await this.LaporanTransaksiRepository.remove(product)
            res.status(200).json("Berhasil di hapus")
        } catch (error) {
            console.log(error)
        }
    }
}
export default new LaporanTransaksiService