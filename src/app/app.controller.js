class AppController {
  constructor(Authentication) {
    this.name = 'app';
    this.authentication = Authentication;
  }
  $onInit() {
    console.log(this.authentication.getUserStatus());
  }
  login(username, password) {
    // this.authentication.login(username, password);
  }
  logout() {
    // this.authentication.logout();
  }
  register() {
    // this.authentication.register();
  }
}

AppController.$inject = [
  'Authentication',
];

export default AppController;
