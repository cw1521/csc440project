import ODModel from '../controllers/ODController';
import { oktaAuth } from '../auth';

export class ODRoute {
    public odRoute(app): void {

      app.route('/api/ods', oktaAuth).get(ODModel.getAll);
    }
}