import { Request, Response, NextFunction } from 'express';
import ODModel from '../controllers/ODController';
import { oktaAuth } from '../auth';

export class ODRoute {
    public odRoute(app): void {

      app.route('/api/ods', oktaAuth).get(ODModel.getAll);
      app.route('api/ods', oktaAuth).put(this.blockRoute);
      app.route('api/ods', oktaAuth).delete(this.blockRoute);
      app.route('api/ods', oktaAuth).create(this.blockRoute);
      
    }

    private blockRoute(req: Request, res: Response, next: NextFunction) {
      res.status(403);
      res.json("Forbidden.");
    }

}