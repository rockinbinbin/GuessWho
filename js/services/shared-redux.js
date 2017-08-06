/**
 * this should be the only place we require '@eaze/shared-redux' and construct it.
 * This avoids a lot of duplicate code having the construct the API object in every file that uses
 * it.
 */

import sharedRedux from '@eaze/shared-redux'
import { API_BASE_URL } from '../const'

const { user, location } = sharedRedux(API_BASE_URL)

// gross hack to get around a bug in babel, we do it on the web too :(
module.exports = { user, location }
