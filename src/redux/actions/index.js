import * as auth from './auth' 
import * as todoActions from './todoActions'
export default {
    ...auth,
    ...todoActions
}