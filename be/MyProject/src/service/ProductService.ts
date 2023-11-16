import { Repository } from "typeorm"
import { Product } from "../entity/Product"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"

class ProduceService {
    private readonly productRepository: Repository<Product> = AppDataSource.getRepository(Product)

    async find(req: Request, res: Response) {
        try {
            const products = await this.productRepository.find()
            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }



    

    async findOne(req: Request, res: Response) {
        const { id } = req.params
        try {
            const product = await this.productRepository.findOne({
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
        const { prdnm, harga } = req.body

        try {
            const product = this.productRepository.create({
                prdnm : prdnm,
                harga: harga
            })
            console.log("product", product)


            const saveProduct = await this.productRepository.save(product)
            console.log("saveProduct", saveProduct)
            console.log("uploadCloude", product)
            res.status(200).json(saveProduct)
        } catch (error) {
            console.log(error)
        }
    }

    async patch(req: Request, res: Response) {
        const { id } = req.params
        const { prdnm, harga, } = req.body
        try {
            const product = await this.productRepository.findOne({
                where: {
                    id: Number(id)
                }
            })
            product.prdnm = prdnm,
                product.harga = harga,

                await this.productRepository.save(product)
            res.status(200).json("Berhasil di edit")
        } catch (error) {
            console.log(error)
        }
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params
        try {
            const product = await this.productRepository.findOne({
                where: {
                    id: Number(id)
                }
            })
            await this.productRepository.remove(product)
            res.status(200).json("Berhasil di hapus")
        } catch (error) {
            console.log(error)
        }
    }
}
export default new ProduceService