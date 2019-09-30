import { Request, Response, NextFunction } from 'express';
import ODModel from '../models/ODModel';

export class ODRoute {

    public odRoute(app): void {
      app.route('/api/').get((req: Request, res: Response, next: NextFunction) => {
        ODModel.find((err, docs) => {
          if (err) { return next(err); }
          res.json(docs);
        });
      });
    }
}