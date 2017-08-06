/**
 * This is used to store the wix navigator of the current container thats being displayed.
 * This is necessary so that actions which are not containers (i.e order-eta which polls)
 * can push screens.
 *
 * This singleton also maps our internal pages to their references in wix. It also
 * keeps track of the current screen and wraps all push/pop/reset functions to prevent duplicate
 * screen functions. This should also make it easier to swap out nav stacks in the near future.
 *
 * TODO: One potential area for concern: Permissions checks are async, not sure if we need to wraps
 * access to this singleton in a promise or something like that. Review this with others at a
 * later time.
 */

import { getNavScreen } from './index'
import { pages } from '../const'
import { isAndroid } from '../utils/'

module.exports = {
  setNavigator: setNavigator,
  getNavigator: getNavigator,
  setPage: setPage,
  getPage: getPage,
  resetTo: resetTo,
  push: push,
  popToRoute: popToRoute,
  popToRoot: popToRoot,
  pop: pop,
  peek: peek,
  checkPageValid: checkPageValid,
  setEvent: setEvent,
  showInAppNotification: showInAppNotification,
  showModal: showModal,
  dismissModal: dismissModal,
  showLightBox: showLightBox,
  dismissLightBox: dismissLightBox,
  showReferral: showReferral,
  dismissReferral: dismissReferral,
  openDrawer: openDrawer,
  closeDrawer: closeDrawer,
  toggleDrawer: toggleDrawer,
  pushIfNewPage: pushIfNewPage,
  getBackstackCount: getBackstackCount
}

var oldNavigator
var currentNavigator
var currentPage

/**
 * Wix does not provide an API for examining the backstack so we need to maintain a separate data structure.
 * We need access to the backstack to determine programatically whether or not to display a back arrow in FadeableNavbar.
 * The backstack is an array populated with the page identifiers, which are strings defined in the "pages" const.
 * We need unique page identifiers rather than a simple count due to the popToRoute method.
 * Please also refer to https://github.com/wix/react-native-navigation/issues/1433
 */
var backstack = []

function setNavigator (passedNavigator) {
  if (passedNavigator === undefined) return 'You need to pass a value in to the navigator store.'
  currentNavigator = passedNavigator
}

function getNavigator () {
  if (currentNavigator === undefined) console.log('navigator has not been set')
  return currentNavigator
}

function setPage (passedPage) {
  if (passedPage === undefined) return 'You need to pass a value in to the page store.'
  currentPage = passedPage
}

function getPage () {
  return currentPage
}

function resetTo (page) {
  let nav = getNavigator()
  if (nav === undefined || page === undefined || !checkPageValid(page)) return

  let navScreen = getNavScreen(page)
  nav.resetTo(navScreen)
  backstack = [page]
}

function push (page) {
  let nav = getNavigator()
  if (nav === undefined || page === undefined || !checkPageValid(page)) return

  let navScreen = getNavScreen(page)
  nav.push(navScreen)
  backstack.push(page)
}

function popToRoute (page) {
  let nav = getNavigator()
  if (nav === undefined || page === undefined || !checkPageValid(page)) return

  let navScreen = getNavScreen(page)
  nav.popToRoute(navScreen)
  backstack = backstack.slice(0, backstack.indexOf(page))
}

function popToRoot () {
  let nav = getNavigator()
  if (nav === undefined) return
  nav.popToRoot()
  backstack = [backstack[0]]
}

function pop () {
  let nav = getNavigator()
  if (nav === undefined) return

  nav.pop()
  backstack.pop()
}

// Check page is present in pages constant
function pageExists (page) {
  return Object.keys(pages).some(function (k) { return pages[k] === page })
}

function checkPageValid (page) {
  if (!page) return false

  if (!pageExists(page)) {
    console.log(page, ' page does not exist')
    return false
  }
  return true
}

function setEvent (event) {
  let nav = getNavigator()
  nav.setOnNavigatorEvent(event)
}

function showInAppNotification () {
  let nav = getNavigator()
  nav.showInAppNotification({
    screen: pages.ERROR
  })
}

function showModal (page) {
  let nav = getNavigator()
  if (nav === undefined || page === undefined || !checkPageValid(page)) return

  let navScreen = getNavScreen(page)

  nav.showModal(navScreen)
}

function dismissModal () {
  let nav = getNavigator()
  if (nav === undefined) return

  nav.dismissModal()
}

// TODO: test on Android and gate if it does not work.
// See https://github.com/wix/react-native-navigation/issues/588
function showLightBox (page) {
  let nav = getNavigator()
  if (nav === undefined || page === undefined || !checkPageValid(page)) return

  let navScreen = getNavScreen(page)
  // We store the old navstack here to work around an issue where the wix
  // nav stack won't push other screens after we dissmiss the light box.
  // This does not happen on android and is probably a side effect of us
  // having a singleton. The long term solution to this is to probably to
  // get rid of this singleton ;)
  oldNavigator = nav
  navScreen.style = { backgroundColor: 'rgba(0, 0, 0, 0.4)' }
  nav.showLightBox(navScreen)
}

function dismissLightBox () {
  let nav = getNavigator()
  if (nav === undefined) return

  nav.dismissLightBox()
  setNavigator(oldNavigator)
}

function showReferral () {
  isAndroid() ? showModal(pages.REFERRAL) : showLightBox(pages.REFERRAL)
}

function dismissReferral () {
  isAndroid() ? dismissModal() : dismissLightBox()
}

function closeDrawer () {
  let nav = getNavigator()
  if (nav === undefined) return
  nav.toggleDrawer({side: 'left', animated: 'true', to: 'closed'})
}

function openDrawer () {
  let nav = getNavigator()
  if (nav === undefined) return
  nav.toggleDrawer({side: 'left', animated: 'true', to: 'open'})
}

function toggleDrawer () {
  let nav = getNavigator()
  if (nav === undefined) return
  nav.toggleDrawer({side: 'left', animated: 'true'})
}

function pushIfNewPage (page) {
  if (page !== currentPage) {
    push(page)
  } else {
    closeDrawer()
  }
}

function getBackstackCount () {
  return backstack.length
}

function peek () {
  return backstack.length > 2 ? backstack[backstack.length - 2] : null
}
