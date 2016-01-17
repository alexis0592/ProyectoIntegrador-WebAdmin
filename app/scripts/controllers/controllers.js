/**
 * Created by Cristian Correa, Yefry Calderon, Daniela Serna
 */
angular.module('ubicameUdeaApp.controllers', [])
//CONTROLLERS BLOQUES
	.controller('BloqueListController', function ($scope, $state, popupService, $window, Bloque) {
		$scope.bloques = Bloque.query();
		$scope.deleteBloque = function (bloque) {
			if (popupService.showPopup('¿Realmente quiere eliminar este registro?')) {
				bloque.$delete(function () {
					$scope.bloques = Bloque.query();
				});
			}
		};
	})
	.controller('BloqueViewController', function ($scope, $stateParams, Bloque) {
		$scope.bloque = Bloque.get({id : $stateParams.id});
	})
	.controller('BloqueCreateController', function ($scope, $state, $stateParams, Bloque) {
		$scope.bloque = new Bloque();
		$scope.addBloque = function () {
			$scope.bloque.$save(function () {
				$state.go('bloques');
			});
		};
	})
	.controller('BloqueEditController', function ($scope, $state, $stateParams, Bloque) {
		$scope.updateBloque = function () {
			$scope.bloque.$update(function () {
				$state.go('bloques');
			});
		};
		$scope.loadBloque = function () {
			$scope.bloque = Bloque.get({id : $stateParams.id});
		};
		$scope.loadBloque();
	})

//CONTROLLERS TIPOS DE UNIDAD
	.controller('TipoUnidadListController', function ($scope, $state, popupService, $window, TipoUnidad) {
		$scope.tiposUnidad = TipoUnidad.query();
		$scope.deleteTipoUnidad = function (tipoUnidad) {
			if (popupService.showPopup('¿Realmente quiere eliminar este registro?')) {
				tipoUnidad.$delete(function () {
					$scope.tiposUnidad = TipoUnidad.query();
				});
			}
		};
	})
	.controller('TipoUnidadViewController', function ($scope, $stateParams, TipoUnidad) {
		$scope.tipoUnidad = TipoUnidad.get({id : $stateParams.id});
	})
	.controller('TipoUnidadCreateController', function ($scope, $state, $stateParams, TipoUnidad) {
		$scope.tipoUnidad = new TipoUnidad();
		$scope.addTipoUnidad = function () {
			$scope.tipoUnidad.$save(function () {
				$state.go('tiposUnidad');
			});
		};
	})
	.controller('TipoUnidadEditController', function ($scope, $state, $stateParams, TipoUnidad) {
		$scope.updateTipoUnidad = function () {
			$scope.tipoUnidad.$update(function () {
				$state.go('tiposUnidad');
			});
		};
		$scope.loadTipoUnidad = function () {
			$scope.tipoUnidad = TipoUnidad.get({id : $stateParams.id});
		};
		$scope.loadTipoUnidad();
	})

//CONTROLLERS UNIDAD
	.controller('UnidadListController', function ($scope, $state, popupService, $window, $location, Unidad) {
		$scope.unidades = Unidad.query();
		$scope.deleteUnidad = function (unidad) {
			if (popupService.showPopup('¿Realmente quiere eliminar este registro?')) {
				unidad.$delete(function () {
					$scope.unidades = Unidad.query();
				});
			}
		};
	})
	.controller('UnidadViewController', function ($scope, $stateParams, Unidad) {
		$scope.unidad = Unidad.get({id : $stateParams.id});
	})
	.controller('UnidadCreateController', function ($scope,$http, $state, $stateParams, Unidad) {
		$http.get("https://ubicame-udea.herokuapp.com/tiposunidad").success(function(response) {
        	$scope.tiposUnidad = response;
			console.log($scope.tiposUnidad);
    	}).error(function(err){
			console.log(err);
		});
		
		$scope.changed = function(item){
			$scope.unidad.tipoUnidad = item;
			$scope.tipoUnidadSeleccionada;
		};
	
		$scope.unidad = new Unidad();	
		$scope.addUnidad = function () {
			$scope.unidad.$save(function () {
				$state.go('unidades');
			});
		};
	})
	.controller('UnidadEditController', function ($scope, $state, $stateParams, Unidad) {
		$scope.updateUnidad = function () {
			$scope.unidad.$update(function () {
				$state.go('unidades');
			});
		};
		$scope.loadUnidad = function () {
			$scope.unidad = Unidad.get({id : $stateParams.id});
		};
		$scope.loadUnidad();
	})
//CONTROLLERS DEPARTAMENTOS
	.controller('DepartamentoListController', function ($scope, $state, popupService, $window, $location, Departamento) {
		$scope.departamentos = Departamento.query();
		$scope.deleteDepartamento = function (departamento) {
			if (popupService.showPopup('¿Realmente quiere eliminar este registro?')) {
				departamento.$delete(function () {
					$scope.departamentos = Departamento.query();
				});
			}
		};
	})
	.controller('DepartamentoViewController', function ($scope, $stateParams, Departamento) {
		$scope.departamento = Departamento.get({id : $stateParams.id});
	})
	.controller('DepartamentoCreateController', function ($scope,$http, $state, $stateParams, Departamento) {
		$http.get("https://ubicame-udea.herokuapp.com/unidades").success(function(response) {
        	$scope.unidades = response;
    	}).error(function(err){
			console.log(err);
		});
		
		$scope.changed = function(item){
			$scope.departamento.unidad = item;
			$scope.unidadSeleccionada;
		};
	
		$scope.departamento = new Departamento();	
		$scope.addDepartamento = function () {
			$scope.departamento.$save(function () {
				$state.go('departamentos');
			});
		};
	})
	.controller('DepartamentoEditController', function ($scope, $state, $stateParams, Departamento) {
		$scope.updateDepartamento = function () {
			$scope.departamento.$update(function () {
				$state.go('departamentos');
			});
		};
		$scope.loadDepartamento = function () {
			$scope.departamento = Departamento.get({id : $stateParams.id});
		};
		$scope.loadDepartamento();
	})

//CONTROLLERS UBICACIONES
	.controller('UbicacionListController', function ($scope, $state, popupService, $window, $location, Ubicacion) {
		$scope.ubicaciones = Ubicacion.query();
		$scope.deleteUbicacion = function (ubicacion) {
			if (popupService.showPopup('¿Realmente quiere eliminar este registro?')) {
				ubicacion.$delete(function () {
					$scope.ubicaciones = Ubicacion.query();
				});
			}
		};
	})
	.controller('UbicacionViewController', function ($scope, $stateParams, Ubicacion) {
		$scope.ubicacion = Ubicacion.get({id : $stateParams.id});
	})
	.controller('UbicacionCreateController', function ($scope,$http, $state, $stateParams, Ubicacion) {
		$http.get("https://ubicame-udea.herokuapp.com/unidades").success(function(response) {
        	$scope.unidades = response;
    	}).error(function(err){
			console.log(err);
		});
	
	$http.get("https://ubicame-udea.herokuapp.com/bloques").success(function(response) {
        	$scope.bloques = response;
    	}).error(function(err){
			console.log(err);
		});
	
	$http.get("https://ubicame-udea.herokuapp.com/departamentos").success(function(response) {
        	$scope.departamentos = response;
    	}).error(function(err){
			console.log(err);
		});
		
		$scope.changedUnidades = function(item){
			$scope.ubicacion.unidad = item;
			$scope.unidadSeleccionada;
		};
		
		$scope.changedDepartamentos = function(item){
			$scope.ubicacion.departamento = item;
			$scope.departamentoSeleccionada;
		};
		
		$scope.changedBloques = function(item){
			$scope.ubicacion.bloque = item;
			$scope.bloqueSeleccionada;
		};
	
		$scope.ubicacion = new Ubicacion();	
		$scope.addUbicacion = function () {
			$scope.ubicacion.$save(function () {
				$state.go('ubicaciones');
			});
		};
	})
	.controller('UbicacionEditController', function ($scope, $state, $stateParams, Ubicacion) {
		$scope.updateUbicacion = function () {
			$scope.ubicacion.$update(function () {
				$state.go('ubicaciones');
			});
		};
		$scope.loadUbicacion = function () {
			$scope.ubicacion = Ubicacion.get({id : $stateParams.id});
		};
		$scope.loadUbicacion();
	})
//CONTROLLERS USUARIOS
	.controller('UsuarioListController', function ($scope, $state, popupService, $window, Usuario) {
		$scope.usuarios = Usuario.query();
		$scope.deleteUsuario = function (usuario) {
			if (popupService.showPopup('¿Realmente quiere eliminar este registro?')) {
				usuario.$delete(function () {
					$scope.usuarios = Usuario.query();
				});
			}
		};
	})
	
	.controller('UsuarioViewController', function ($scope, $stateParams, Usuario) {
		$scope.usuario = Usuario.get({id : $stateParams.id});
	})
	.controller('UsuarioCreateController', function ($scope, $state, $stateParams, Usuario) {
		$scope.usuario = new Usuario();
		$scope.addUsuario = function () {
			$scope.usuario.$save(function () {
				$state.go('usuarios');
			});
		};
	})
	.controller('UsuarioEditController', function ($scope, $state, $stateParams, Usuario) {
		$scope.updateUsuario = function () {
			$scope.usuario.$update(function () {
				$state.go('usuarios');
			});
		};
		$scope.loadUsuario = function () {
			$scope.usuario = Usuario.get({id : $stateParams.id});
		};
		$scope.loadUsuario();
	});
