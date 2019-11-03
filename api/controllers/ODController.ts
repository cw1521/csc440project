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
  ODModel.find({Location : {$regex: new RegExp(`/b${req.params.location}/b`, 'i')}}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    //console.log(docs);
    return res.json(docs);
  });
  return true;
}

ODModel.getByAge = (req: Request, res: Response, next: NextFunction) => {
  //console.log(req.params.age);
  ODModel.find({Age : req.params.age}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    //console.log(docs);
    return res.json(docs);
  });
  return true;
}

ODModel.getBySex = (req: Request, res: Response, next: NextFunction) => {
  ODModel.find({Sex : {$regex: new RegExp(`\b${req.params.sex}\b`, 'i')}}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    return res.json(docs);
  });
  return true;
}

ODModel.getByRace = (req: Request, res: Response, next: NextFunction) => {
  ODModel.find({Race : {$regex: new RegExp(`/b${req.params.race}/b`, 'i')}}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    return res.json(docs);
  });
  return true;
}




export default ODModel;