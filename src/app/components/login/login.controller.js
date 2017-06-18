class LoginController {
  constructor() {
    this.name = "login";
  }
  $onInit() {
    console.log(this);
  }
}

LoginController.$inject = [];

export default LoginController;