import angular from 'angular';
import Contact from './contact/contact.module';
import Home from './home/home';
import About from './about/about';
import Login from './login/login.module';
import Register from './register/register.module';

const componentModule = angular.module(
  'app.components',

  [
    Home,
    About,
    Contact,
    Login,
    Register,
  ]

).name;

export default componentModule;
