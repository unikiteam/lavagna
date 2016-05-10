(function() {
	
	
	var services = angular.module('lavagna.services');
	
	services.factory('BulkOperationModal', function ($mdDialog, Card, User, BulkOperations) {
		
		function moveTo(toMove, location) {
			var confirm = $mdDialog.confirm().title('FIXME MOVE TO ' + location)
	          .textContent('FIXME MOVE TO ' + location)
	          .ariaLabel('FIXME MOVE TO ' + location)
	          .ok('FIXME OK')
	          .cancel('FIXME CANCEL');
			
			$mdDialog.show(confirm).then(function() {
				for(var columnId in toMove) {
					Card.moveAllFromColumnToLocation(columnId, toMove[columnId], location);
				}
			}, function() {});
		}
		
		
		
		return {
			moveToArchive : function(toMove) {
				moveTo(toMove, 'ARCHIVE');
			},
			moveToBacklog : function(toMove) {
				moveTo(toMove, 'BACKLOG');
			},
			moveToTrash : function(toMove) {
				moveTo(toMove, 'TRASH');
			},
			
			assignTo: function(cards, applyIfPresent) {
				
				applyIfPresent = applyIfPresent || angular.noop;
				
				$mdDialog.show({
					template: '<lvg-dialog-select-user flex="column" layout="column" dialog-title="title" action="action"></lvg-dialog-select-user>',
					controller: function($scope) {
						$scope.title = 'ASSIGN';
						$scope.action = function(user) {
							BulkOperations.assign(cards, user).then(applyIfPresent);
						}
					}
				});
			},
			
			removeAssignTo: function(cards, applyIfPresent) {
				applyIfPresent = applyIfPresent || angular.noop;
				
				$mdDialog.show({
					template: '<lvg-dialog-select-user flex="column" layout="column" dialog-title="title" action="action"></lvg-dialog-select-user>',
					controller: function($scope) {
						$scope.title = 'REMOVE ASSIGN';
						$scope.action = function(user) {
							BulkOperations.removeAssign(cards, user).then(applyIfPresent);
						}
					}
				});
			},
			
			reAssignTo: function(cards, applyIfPresent) {
				
				applyIfPresent = applyIfPresent || angular.noop;
				
				$mdDialog.show({
					template: '<lvg-dialog-select-user flex="column" layout="column" dialog-title="title" action="action"></lvg-dialog-select-user>',
					controller: function($scope) {
						$scope.title = 'REASSIGN';
						$scope.action = function(user) {
							BulkOperations.reassign(cards, user).then(applyIfPresent);
						}
					}
				});
			},
			
			setDueDate : function(cards, applyIfPresent) {
				applyIfPresent = applyIfPresent || angular.noop;
				$mdDialog.show({
					template: '<lvg-dialog-select-date flex="column" layout="column" dialog-title="title" action="action"></lvg-dialog-select-date>',
					controller: function($scope) {
						$scope.title = 'SET DUE DATE';
						$scope.action = function(dueDate) {
							BulkOperations.setDueDate(cards, dueDate).then(applyIfPresent);
						}
					}
				});
			},
			
			removeDueDate: function removeDueDate(cards, applyIfPresent) {
				var confirm = $mdDialog.confirm().title('FIXME REMOVE DUE DATE')
		          .textContent('FIXME REMOVE DUE DATE')
		          .ariaLabel('FIXME REMOVE DUE DATE')
		          .ok('FIXME OK')
		          .cancel('FIXME CANCEL');
				
				$mdDialog.show(confirm).then(function() {
					applyIfPresent = applyIfPresent || angular.noop;
					BulkOperations.removeDueDate(cards).then(applyIfPresent);
				}, function() {});
			},
			
			setMilestone: function(cards, applyIfPresent) {
				applyIfPresent = applyIfPresent || angular.noop;
				$mdDialog.show({
					template: '<lvg-dialog-select-milestone flex="column" layout="column" dialog-title="title" action="action"></lvg-dialog-select-milestone>',
					controller: function($scope) {
						$scope.title = 'SELECT MILESTONE';
						$scope.action = function(milestone) {
							BulkOperations.setMilestone(cards, milestone).then(applyIfPresent);
						}
					}
				});				
			},
			
			removeMilestone: function(cards, applyIfPresent) {
				var confirm = $mdDialog.confirm().title('FIXME REMOVE MILESTONE')
		          .textContent('FIXME REMOVE MILESTONE')
		          .ariaLabel('FIXME REMOVE MILESTONE')
		          .ok('FIXME OK')
		          .cancel('FIXME CANCEL');
				
				$mdDialog.show(confirm).then(function() {
					applyIfPresent = applyIfPresent || angular.noop;
					BulkOperations.removeMilestone(cards).then(applyIfPresent);
				}, function() {});
			}
		};
	})
	
	
})();