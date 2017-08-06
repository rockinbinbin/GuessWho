import { colors, fonts } from './themes'
import { isAndroid } from './utils'

export let isDevelopment, API_BASE_URL
export let SUPPORT_EMAIL_ADDRESS = 'robinmehta94@gmail.com'

isDevelopment = __DEV__
if (isDevelopment) {
  API_BASE_URL = 'https://api-development.eazeup.com/api'
} else { // Production
  API_BASE_URL = 'https://api.eazeup.com/api'
}

export const pages = {
  INITIAL: 'Initial'
}
