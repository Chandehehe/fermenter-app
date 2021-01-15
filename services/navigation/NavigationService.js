import { NavigationActions, StackActions } from '@react-navigation/compat';

let instance = null;
let debounce;
let debounceDrawer;

/**
 * Wrapper class for react-navigation to provide navigation functionality within another service
 * @class
 */
class NavigationService {
  constructor() {
    if (instance) {
      return instance;
    }

    instance = this;

    this.navigator = null;
  }

  setTopLevelNavigator(navigatorRef) {
    this.navigator = navigatorRef;
  }

  /**
   * Set the navigation configuration
   *
   * @param   { Object }    nav       Contains the state navigation
   * @param   { Object }    dispatch  Handle the triggering of navigation action
   * @returns { void }
   */
  setNavigator(nav, dispatch) {
    this.navigator = {
      nav,
      dispatch
    };
  }

  /**
   * Navigates to the specified screen
   *
   * @param   { string }    routeName   Specific name of the screen route
   * @param   { Object }    params      Contains optional parameter to be passed during navigation
   * @returns { void }
   */
  navigate(routeName, params) {
    if (this.navigator) {
      if (debounce) {
        return;
      }

      this.navigator.dispatch(
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params
        })
      );

      debounce = setTimeout(() => {
        debounce = 0;
      }, 1000);
    }
  }

  /**
   * Replace current state with a new state
   *
   * @param   { string }    routeName   Specific name of the screen route
   * @param   { Object }    params      Contains optional parameter to be passed during navigation
   * @returns { void }
   */
  reset(routeName, params) {
    if (this.navigator) {
      this.navigator.dispatch(
        StackActions.reset({
          index: 0,
          key: null,
          actions: [
            NavigationActions.navigate({
              type: 'Navigation/NAVIGATE',
              routeName,
              params
            })
          ]
        })
      );
    }
  }

  /**
   * Go back to previous state of the navigation
   *
   * @returns { void }
   */
  goBack() {
    if (this.navigator) {
      if (debounce) {
        return;
      }

      this.navigator.dispatch(NavigationActions.back({}));

      debounce = setTimeout(() => {
        debounce = 0;
      }, 1000);
    }
  }

  /**
   * Navigates to open side menu
   *
   * @returns { void }
   */
  openMenu() {
    if (this.navigator) {
      this.navigator.dispatch(
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName: 'DrawerOpen',
          params: ''
        })
      );
    }
  }

  /**
   * Navigates to close side menu
   *
   * @returns { void }
   */
  closeMenu() {
    if (this.navigator) {
      if (debounceDrawer) {
        return;
      }

      this.navigator.dispatch(
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName: 'DrawerClose',
          params: ''
        })
      );

      debounceDrawer = setTimeout(() => {
        debounceDrawer = 0;
      }, 1000);
    }
  }

  /**
   * Navigates to the specified screen
   *
   * @param   { string }    routeName     Specific name of the screen route
   * @param   { string }    subRouteName   Specific name of the subscreen route
   * @param   { Object }    params      Contains optional parameter to be passed during navigation
   * @returns { void }
   */
  navigateDeeper(routeName, subRouteName, params = {}) {
    if (this.navigator) {
      if (debounceDrawer) {
        return;
      }

      this.navigator.dispatch(
        NavigationActions.navigate({
          routeName,
          params,
          key: null
        })
      );

      const resetAction = StackActions.reset({
        index: 0,
        // key: null, // required to reset tabs
        actions: [
          NavigationActions.navigate({
            routeName: subRouteName,
            params,
            key: null
          })
        ]
      });

      this.navigator.dispatch(resetAction);
    }
  }

  /**
   * Navigates to the specified screen
   *
   * @param   { string }    routeName     Specific name of the screen route
   * @param   { string }    subRouteName   Specific name of the subscreen route
   * @param   { Object }    params      Contains optional parameter to be passed during navigation
   * @returns { void }
   */
  logout() {
    if (this.navigator) {
      if (debounceDrawer) {
        return;
      }

      const resetTabAction = NavigationActions.navigate({
        routeName: 'Landing',
        key: null,
        action: StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })]
        })
      });
      this.navigator.dispatch(resetTabAction);
    }
  }
}

export default new NavigationService();
