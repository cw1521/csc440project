import { Request, Response, NextFunction } from 'express';
import ODModel from '../controllers/ODController';

export class ODRoute {
    public odRoute(app): void {

      app.route('/api/ods').get(ODModel.getAll);
      app.route('/api/ods').put(this.blockRoute);
      app.route('/api/ods').post(this.blockRoute);
      app.route('/api/ods').delete(this.blockRoute);      
    }

    private blockRoute(req: Request, res: Response, next: NextFunction) {
      res.status(403);
      res.json("Forbidden.");
    }

}