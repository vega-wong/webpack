{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq_or lintConfig "airbnb" lintConfig "yidejia"}};{{/if_eq_or}}
import App from './App'{{#if_eq_or lintConfig "airbnb" lintConfig "yidejia"}};{{/if_eq_or}}
{{#router}}
import router from './router'{{#if_eq_or lintConfig "airbnb" lintConfig "yidejia"}};{{/if_eq_or}}
{{/router}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq_or lintConfig "airbnb" lintConfig "yidejia"}};{{/if_eq_or}}
