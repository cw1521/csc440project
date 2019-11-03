import { Request, Response, NextFunction } from 'express';
import ODModel from '../controllers/ODController';

export class ODRoute {
    public odRoute(app): void {
      app.route('/api/ods').get(ODModel.getAll);
      app.route('/api/ods').put(this.blockRoute);
      app.route('/api/ods').post(this.blockRoute);
      app.route('/api/ods').delete(this.blockRoute);  
      
      app.route('/api/ods/age/:age').get(ODModel.getByAge);
      app.route('/api/ods/age/:age').put(this.blockRoute);
      app.route('/api/ods/age/:age').post(this.blockRoute);
      app.route('/api/ods/age/:age').delete(this.blockRoute);  

      app.route('/api/ods/location/:location').get(ODModel.getByLocation);
      app.route('/api/ods/location:location').put(this.blockRoute);
      app.route('/api/ods/location/:location').post(this.blockRoute);
      app.route('/api/ods/location/:location').delete(this.blockRoute);  

      app.route('/api/ods/sex/:sex').get(ODModel.getBySex);
      app.route('/api/ods/sex/:sex').put(this.blockRoute);
      app.route('/api/ods/sex/:sex').post(this.blockRoute);
      app.route('/api/ods/sex/:sex').delete(this.blockRoute);  
      
      app.route('/api/ods/race/:race').get(ODModel.getByRace);
      app.route('/api/ods/race/:race').put(this.blockRoute);
      app.route('/api/ods/race/:race').post(this.blockRoute);
      app.route('/api/ods/race/:race').delete(this.blockRoute);  

    }

    private blockRoute(req: Request, res: Response, next: NextFunction) {
      res.status(403);
      res.json("Forbidden.");
    }

}