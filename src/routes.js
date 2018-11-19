import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue';

export const routes = [
  { path: '', component: Home },

  { path: '/user', component: User, children: [
      { path: '/details', component: UserDetail },
      // { path: ':id', component: UserEdit},
      {path: '/edit', component: UserEdit, name: 'userEdit'}


    ]},

  { path: '*', redirect: '/'}
  // wildcard operator for redirects
];
