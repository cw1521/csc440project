import { Request, Response, NextFunction } from 'express';
import ODModel  from '../models/ODModel';


ODModel.getAll = (req: Request, res: Response, next: NextFunction) => {
    ODModel.find((err, docs) => {
      if (err) { return next(err); }
      res.json(docs);
    
    });
}

export default ODModel;