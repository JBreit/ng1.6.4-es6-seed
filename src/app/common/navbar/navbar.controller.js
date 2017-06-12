class NavbarController {
  constructor() {
    this.name = 'navbar';
    this.routes = [];
  }
  $onInit() {
    console.log(this);
  }
}

NavbarController.$inject = [];

export default NavbarController;
