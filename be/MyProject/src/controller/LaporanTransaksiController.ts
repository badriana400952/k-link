import { Request, Response,  } from "express"
import LaporanTransaksiService from "../service/LaporanTransaksiService"
class LaporanTransaksiController {

    find(req: Request, res: Response) {
        LaporanTransaksiService.find(req, res)
    }

    findOne(req: Request, res: Response) {
        LaporanTransaksiService.findOne(req, res)
    }
    create(req: Request, res: Response){
        LaporanTransaksiService.create(req, res)
    }
    patch(req: Request, res: Response){
        LaporanTransaksiService.patch(req, res)
    }
    delete (req: Request, res: Response) {
        LaporanTransaksiService.delete(req, res)
    }

}

export default new LaporanTransaksiController