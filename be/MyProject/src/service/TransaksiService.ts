import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { Transaksi } from "../entity/Transaksi"
class TransaksiService {
    private readonly TransaksiRepository: Repository<Transaksi> = AppDataSource.getRepository(Transaksi)

    async find(req: Request, res: Response) {
        try {
            const products = await this.TransaksiRepository.find()
            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async findOne(req: Request, res: Response) {
        const { id } = req.params
        try {
            const product = await this.TransaksiRepository.findOne({
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
        const { invoice_number, invoice_date, customer, qty, total_amount, total_count, product_detail } = req.body


        try {
            const product = this.TransaksiRepository.create({
                invoice_number: invoice_number,
                invoice_date: invoice_date,
                customer: customer,
                qty: qty,
                total_amount: total_amount,
                total_count: total_count,
                product_detail: product_detail
            })
            console.log("product", product)


            const saveProduct = await this.TransaksiRepository.save(product)
            console.log("saveProduct", saveProduct)
            console.log("uploadCloude", product)
            res.status(200).json(saveProduct)
        } catch (error) {
            console.log(error)
        }
    }

    async patch(req: Request, res: Response) {
        const { id } = req.params
        const { invoice_number, invoice_date, customer, qty, total_amount, total_count, product_detail } = req.body

        try {
            const product = await this.TransaksiRepository.findOne({
                where: {
                    id: Number(id)
                },
            })
            product.invoice_number = invoice_number,
                product.invoice_date = invoice_date,
                product.customer = customer,
                product.qty = qty,
                product.total_amount = total_amount,
                product.total_count = total_count,
                product.product_detail = product_detail
            await this.TransaksiRepository.save(product)
            res.status(200).json("Berhasil di edit")
        } catch (error) {
            console.log(error)
        }
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params
        try {
            const product = await this.TransaksiRepository.findOne({
                where: {
                    id: Number(id)
                }
            })
            await this.TransaksiRepository.remove(product)
            res.status(200).json("Berhasil di hapus")
        } catch (error) {
            console.log(error)
        }
    }
}
export default new TransaksiService