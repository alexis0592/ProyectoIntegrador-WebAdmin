
angular.module('ubicameUdeaApp', ['ui.router', 'ngResource', 'ubicameUdeaApp.controllers', 'ubicameUdeaApp.services']);

angular.module('ubicameUdeaApp').config(function ($stateProvider, $httpProvider) {
    $stateProvider.state('bloques', {
        url: '/bloques',
        templateUrl: 'views/bloques.html',
        controller: 'BloqueListController'
    }).state('viewBloque', {
    url: '/bloques/:id/view',
    templateUrl: 'views/bloque-view.html',
    controller: 'BloqueViewController'
    }).state('newBloque', {
        url: '/bloques/new',
        templateUrl: 'views/bloque-add.html',
        controller: 'BloqueCreateController'
    }).state('editBloque', {
        url: '/bloques/:id/edit',
        templateUrl: 'views/bloque-edit.html',
        controller: 'BloqueEditController'
    });
  
  $stateProvider.state('tiposUnidad', {
        url: '/tiposUnidad',
        templateUrl: 'views/tipos_unidad.html',
        controller: 'TipoUnidadListController'
    }).state('viewTipoUnidad', {
    url: '/tiposUnidad/:id/view',
    templateUrl: 'views/tipos_unidad-view.html',
    controller: 'TipoUnidadViewController'
    }).state('newTipoUnidad', {
        url: '/tiposUnidad/new',
        templateUrl: 'views/tipos_unidad-add.html',
        controller: 'TipoUnidadCreateController'
    }).state('editTipoUnidad', {
        url: '/tiposUnidad/:id/edit',
        templateUrl: 'views/tipos_unidad-edit.html',
        controller: 'TipoUnidadEditController'
    });
  
  $stateProvider.state('unidades', {
        url: '/unidades',
        templateUrl: 'views/unidades.html',
        controller: 'UnidadListController'
    }).state('viewUnidad', {
    url: '/unidades/:id/view',
    templateUrl: 'views/unidades-view.html',
    controller: 'UnidadViewController'
    }).state('newUnidad', {
        url: '/unidades/new',
        templateUrl: 'views/unidades-add.html',
        controller: 'UnidadCreateController'
    }).state('editUnidad', {
        url: '/unidades/:id/edit',
        templateUrl: 'views/unidades-edit.html',
        controller: 'UnidadEditController'
    });
  
  $stateProvider.state('departamentos', {
        url: '/departamentos',
        templateUrl: 'views/departamentos.html',
        controller: 'DepartamentoListController'
    }).state('viewDepartamento', {
    url: '/departamentos/:id/view',
    templateUrl: 'views/departamentos-view.html',
    controller: 'DepartamentoViewController'
    }).state('newDepartamento', {
        url: '/departamentos/new',
        templateUrl: 'views/departamentos-add.html',
        controller: 'DepartamentoCreateController'
    }).state('editDepartamento', {
        url: '/departamentos/:id/edit',
        templateUrl: 'views/departamentos-edit.html',
        controller: 'DepartamentoEditController'
    });
  
  $stateProvider.state('ubicaciones', {
        url: '/ubicaciones',
        templateUrl: 'views/ubicaciones.html',
        controller: 'UbicacionListController'
    }).state('viewUbicacion', {
    url: '/ubicaciones/:id/view',
    templateUrl: 'views/ubicaciones-view.html',
    controller: 'UbicacionViewController'
    }).state('newUbicacion', {
        url: '/ubicaciones/new',
        templateUrl: 'views/ubicaciones-add.html',
        controller: 'UbicacionCreateController'
    }).state('editUbicacion', {
        url: '/ubicaciones/:id/edit',
        templateUrl: 'views/ubicaciones-edit.html',
        controller: 'UbicacionEditController'
    });
  
  $stateProvider.state('usuarios', {
        url: '/usuarios',
        templateUrl: 'views/usuarios.html',
        controller: 'UsuarioListController'
    }).state('viewUsuario', {
    url: '/usuarios/:id/view',
    templateUrl: 'views/usuarios-view.html',
    controller: 'UsuarioViewController'
    }).state('newUsuario', {
        url: '/usuarios/new',
        templateUrl: 'views/usuarios-add.html',
        controller: 'UsuarioCreateController'
    }).state('editUsuario', {
        url: '/usuarios/:id/edit',
        templateUrl: 'views/usuarios-edit.html',
        controller: 'UsuarioEditController'
    });
  
  $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
    });
  
  $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
    });
  
}).run(function ($state) {
  $state.go('home');
});
