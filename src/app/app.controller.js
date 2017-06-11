class AppController {
  constructor(Authentication) {
    this.name = 'app';
    this.auth = Authentication;
  }
  $onInit() {
    console.log(this.auth.getUserStatus());
  }
}

AppController.$inject = [
  'Authentication',
];

export default AppController;
