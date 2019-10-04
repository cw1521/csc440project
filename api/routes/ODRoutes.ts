import ODModel from '../controllers/ODController';

export class ODRoute {
    public odRoute(app): void {

      app.route('api/ods').get(ODModel.getAll);



    }
}