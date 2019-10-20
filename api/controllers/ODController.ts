import { Request, Response, NextFunction } from 'express';
import ODModel  from '../models/ODModel';


ODModel.getAll = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.header);
    ODModel.find((err, docs) => {
      if (err) { console.error(err);
      }
      return res.json(docs);
    });
    return true;
}

export default ODModel;