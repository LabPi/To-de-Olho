angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.obras', {
    url: '/informacoes',
    views: {
      'tab1': {
        templateUrl: 'templates/obras.html',
        controller: 'obrasCtrl'
      }
    }
  })

  .state('tabsController.favoritas', {
    url: '/favoritas',
    views: {
      'tab2': {
        templateUrl: 'templates/favoritas.html',
        controller: 'favoritasCtrl'
      }
    }
  })

  .state('tabsController.contatos', {
    url: '/contato',
    views: {
      'tab3': {
        templateUrl: 'templates/contatos.html',
        controller: 'contatosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('combateACorrupcao', {
    url: '/index',
    templateUrl: 'templates/combateACorrupcao.html',
    controller: 'combateACorrupcaoCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.nomeDaObra'
      2) Using $state.go programatically:
        $state.go('tabsController.nomeDaObra');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/obra
      /page1/tab2/obra
  */
  .state('tabsController.nomeDaObra', {
    url: '/obra',
    views: {
      'tab1': {
        templateUrl: 'templates/nomeDaObra.html',
        controller: 'nomeDaObraCtrl'
      },
      'tab2': {
        templateUrl: 'templates/nomeDaObra.html',
        controller: 'nomeDaObraCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.comentarios'
      2) Using $state.go programatically:
        $state.go('tabsController.comentarios');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/comentarios
      /page1/tab2/comentarios
  */
  .state('tabsController.comentarios', {
    url: '/comentarios',
    views: {
      'tab1': {
        templateUrl: 'templates/comentarios.html',
        controller: 'comentariosCtrl'
      },
      'tab2': {
        templateUrl: 'templates/comentarios.html',
        controller: 'comentariosCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.fotos'
      2) Using $state.go programatically:
        $state.go('tabsController.fotos');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/fotos
      /page1/tab2/fotos
  */
  .state('tabsController.fotos', {
    url: '/fotos',
    views: {
      'tab1': {
        templateUrl: 'templates/fotos.html',
        controller: 'fotosCtrl'
      },
      'tab2': {
        templateUrl: 'templates/fotos.html',
        controller: 'fotosCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/index')

  

});