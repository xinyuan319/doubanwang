import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Audio from '../pages/Audio/Audio'
import Broadcast from '../pages/Broadcast/Broadcast'
import Group from '../pages/Group/Group'
import Mine from '../pages/Mine/Mine'

import film from '../pages/Audio/children/film'
import city from '../pages/Audio/children/city'
import music from '../pages/Audio/children/music'
import read from '../pages/Audio/children/read'
import tv from '../pages/Audio/children/tv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/audio',
      name: 'audio',
      component: Audio,
      children:[
        {path: '', component: film},
        {path: 'film', component: film},
        {path: 'city', component: city},
        {path: 'music', component: music},
        {path: 'read', component: read},
        {path: 'tv', component: tv},
      ]
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }

  ]
})
