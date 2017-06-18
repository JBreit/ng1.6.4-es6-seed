import controller from './navlink.controller';

const navlinkComponent = {
  bindings: {},
  template: `
    <a class="nav-link" ui-sref="about">
      <i class="fa fa-id-card fa-lg nav-icon"></i>
      <span class="nav-text"> About</span>
    </a>
  `,
  controller,
};

export default navlinkComponent;