import { Request, Response,  } from "express"
import TransaksiService from "../service/TransaksiService"
class TransaksiController {

    find(req: Request, res: Response) {
        TransaksiService.find(req, res)
    }

    findOne(req: Request, res: Response) {
        TransaksiService.findOne(req, res)
    }
    create(req: Request, res: Response){
        TransaksiService.create(req, res)
    }
    patch(req: Request, res: Response){
        TransaksiService.patch(req, res)
    }
    delete (req: Request, res: Response) {
        TransaksiService.delete(req, res)
    }

}

export default new TransaksiController