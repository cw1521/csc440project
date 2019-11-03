import { Request, Response, NextFunction } from 'express';
import { ODModel }  from '../models/ODModel';


ODModel.getAll = (req: Request, res: Response, next: NextFunction) => {
  ODModel.find((err, docs) => {
    if (err) {
      console.error(err);
    }
    return res.json(docs);
  });
  return true;
}

ODModel.getByLocation = (req: Request, res: Response, next: NextFunction) => {
  ODModel.find({location : req.params.location}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    console.log(docs);
    return res.json(docs);
  });
  return true;
}

ODModel.getByAge = (req: Request, res: Response, next: NextFunction) => {
  ODModel.find({age : req.params.age}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    console.log(docs);
    return res.json(docs);
  });
  return true;
}

ODModel.getBySex = (req: Request, res: Response, next: NextFunction) => {
  ODModel.find({sex : req.params.sex}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    return res.json(docs);
  });
  return true;
}

ODModel.getByRace = (req: Request, res: Response, next: NextFunction) => {
  ODModel.find({race : req.params.race}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    return res.json(docs);
  });
  return true;
}




export default ODModel;