// todo:marco copy
/**
 * this should be the only place we require '@eaze/eaze-api-client' and construct it.
 * This avoids a lot of duplicate code having the construct the API object in every file that uses
 * it. This should also make a it slightly easier to mock :)
 */

import client from '@eaze/eaze-api-client'
import { API_BASE_URL } from '../const'

export default client(API_BASE_URL).v1
