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
  const location = req.params.location.replace(/[^a-zA-Z0-9 !?]+/g, '');
  ODModel.find({Location : {$regex: new RegExp(location, 'i')}}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    return res.json(docs);
  });
  return true;
}

ODModel.getByAge = (req: Request, res: Response, next: NextFunction) => {
  //console.log(req.params.age);
  const age = req.params.sex.replace(/[^a-zA-Z0-9 !?]+/g, '');
  ODModel.find({Age : age}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    return res.json(docs);
  });
  return true;
}

ODModel.getBySex = (req: Request, res: Response, next: NextFunction) => {
  const sex = req.params.sex.replace(/[^a-zA-Z0-9 !?]+/g, '');
  ODModel.find({Sex : {$regex: new RegExp(`\\b${sex}\\b`, 'i')}}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    return res.json(docs);
  });
  return true;
}

ODModel.getByRace = (req: Request, res: Response, next: NextFunction) => {
  const race = req.params.race.replace(/[^a-zA-Z0-9 !?]+/g, '');
  ODModel.find({Race : {$regex: new RegExp(`\\b${race}`, 'i')}}, (err, docs) => {
    if (err) {
      console.error(err);
    }
    return res.json(docs);
  });
  return true;
}




export default ODModel;