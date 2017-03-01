import Vue from 'vue'{{#if_eq_or lintConfig "airbnb" lintConfig "yidejia"}};{{/if_eq_or}}
import Router from 'vue-router'{{#if_eq_or lintConfig "airbnb" lintConfig "yidejia"}};{{/if_eq_or}}
import Hello from '@/components/Hello'{{#if_eq_or lintConfig "airbnb" lintConfig "yidejia"}};{{/if_eq_or}}

Vue.use(Router){{#if_eq_or lintConfig "airbnb" lintConfig "yidejia"}};{{/if_eq_or}}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq_or lintConfig "airbnb" lintConfig "yidejia"}};{{/if_eq_or}}
