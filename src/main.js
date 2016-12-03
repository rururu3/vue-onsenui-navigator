import Vue from 'vue';

import VueOnsen from 'vue-onsenui';
import ons from 'onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import {
  App,
  Tabbar,
  Home,
  PullHook,
  Splitter,
  Fab,
  SpeedDial,
  Dialogs,
  Forms,
  Animations,
  AnimationsChild
} from './components';

Vue.use(VueOnsen, {
  components: {
    Tabbar,
    Home,
    PullHook,
    Splitter,
    Fab,
    SpeedDial,
    Dialogs,
    Forms,
    Animations,
    AnimationsChild
  }
});

ons.ready(() => {
  /* eslint-disable no-new */
  new Vue({
    el: 'body',
    components: { App }
  });
});
