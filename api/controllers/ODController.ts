import { Request, Response, NextFunction } from 'express';
import ODModel  from '../models/ODModel';


ODModel.getAll = (req: Request, res: Response, next: NextFunction) => {
    ODModel.find((err, docs) => {
      if (err) { console.error(err); }
      res.json(docs);
    });
    return true;
}

export default ODModel;