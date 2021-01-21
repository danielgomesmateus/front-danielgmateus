import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import PageNotFound from '../views/PageNotFound'

import Contacts from '../views/Contacts/Contacts'

import ListProjects from '../views/Projects/ListProjects'
import ViewProject from '../views/Projects/ViewProject'
import ListCategoriesProjects from '../views/Projects/ListCategoriesProjects'

import ViewPage from '../views/Pages/ViewPage'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: Home, 
      meta: {
        title: 'danielgmateus - Página inicial',
        metaTags: [
          {
            name: 'description',
            content: 'danielgmateus - Página Inicial'
          },
          {
            property: 'og:description',
            content: 'danielgmateus - Página Inicial'
          }
        ]
      } 
    },
    { 
      path: '*', 
      component: PageNotFound, 
      meta: {
        title: 'danielgmateus - Página não encontrada', 
        metaTags: [
          {
            name: 'description',
            content: 'danielgmateus - 404 - Página não encontrada'
          },
          {
            property: 'og:description',
            content: 'danielgmateus - 404 - Página não encontrada'
          }
        ]
      }
    },
    { 
      path: '/pagina-nao-encontrada', 
      component: PageNotFound, 
      meta: {
        title: 'danielgmateus - Página não encontrada', 
        metaTags: [
          {
            name: 'description',
            content: 'danielgmateus - 404 - Página não encontrada.'
          },
          {
            property: 'og:description',
            content: 'danielgmateus - 404 - Página não encontrada.'
          }
        ]
      }
    },
    { 
      path: '/fale-conosco', 
      component: Contacts, 
      meta: {
        title: 'danielgmateus - Fale conosco', 
        metaTags: [
          {
            name: 'description',
            content: 'danielgmateus - Entre em contato'
          },
          {
            property: 'og:description',
            content: 'danielgmateus - Entre em contato'
          }
        ]
      }
    },
    { 
      path: '/projetos', 
      component: ListProjects, 
      meta: {
        title: 'danielgmateus - Projetos', 
        metaTags: [
          {
            name: 'description',
            content: 'danielgmateus - Projetos'
          },
          {
            property: 'og:description',
            content: 'danielgmateus - Projetos'
          }
        ]
      }
    },
    { 
      path: '/projeto/:slug', 
      component: ViewProject, 
      meta: {
        title: 'danielgmateus - Projeto', 
        metaTags: [
          {
            name: 'description',
            content: 'danielgmateus - Projeto'
          },
          {
            property: 'og:description',
            content: 'danielgmateus - Projeto'
          }
        ]
      }
    },
    { 
      path: '/projeto-categoria/:slug', 
      component: ListCategoriesProjects, 
      meta: {
        title: 'danielgmateus - Categorias', 
        metaTags: [
          {
            name: 'description',
            content: 'danielgmateus - Categorias'
          },
          {
            property: 'og:description',
            content: 'danielgmateus - Categorias'
          }
        ]
      }
    },
    { 
      path: '/pagina/:slug', 
      component: ViewPage, 
      meta: {
        title: 'danielgmateus - Página', 
        metaTags: [
          {
            name: 'description',
            content: 'danielgmateus - Página'
          },
          {
            property: 'og:description',
            content: 'danielgmateus - Página'
          }
        ]
      }
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})