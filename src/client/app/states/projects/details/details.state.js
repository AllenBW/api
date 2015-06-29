(function() {
  'use strict';

  angular.module('app.states')
    .run(appRun);

  /** @ngInject */
  function appRun(routerHelper, navigationHelper) {
    routerHelper.configureStates(getStates());
    navigationHelper.navItems(navItems());
    navigationHelper.sidebarItems(sidebarItems());
  }

  function getStates() {
    return {
      'projects.details': {
        url: '/:projectId',
        templateUrl: 'app/states/projects/details/details.html',
        controller: StateController,
        controllerAs: 'vm',
        title: 'Project Details',
        resolve: {
          project: resolveProjects,
          products: resolveProducts,
          staff: resolveStaff
        }
      }
    };
  }

  function navItems() {
    return {};
  }

  function sidebarItems() {
    return {};
  }

  /** @ngInject */
  function resolveProjects($stateParams, Project) {
    return Project.get({
      id: $stateParams.projectId,
      'includes[]': ['alerts', 'approvals', 'approvers', 'services', 'memberships', 'group_ids', 'project_answers']
    }).$promise;
  }

  /** @ngInject */
  function resolveStaff(Staff) {
    return Staff.getCurrentMember(
      {'includes[]': ['groups']}
    ).$promise;
  }

  /** @ngInject */
  function resolveProducts(Product) {
    return Product.query().$promise;
  }

  /** @ngInject */
  function StateController($state, lodash, logger, project, products, VIEW_MODES, AddGroup, Toasts, $stateParams) {
    var vm = this;

    vm.title = 'Project Details';
    vm.project = project;
    vm.products = products;

    vm.viewMode = vm.viewMode || VIEW_MODES.list;

    vm.activate = activate;
    vm.openAddGroup = openAddGroup;
    vm.approve = approve;
    vm.reject = reject;
    vm.groupToAdd = {};

    activate();

    function activate() {
      // Temporary! Merge products onto services
      tempMergeProductsOntoServices();
      logger.info('Activated Project Details View');
    }

    function approve() {
      $state.reload();
    }

    function reject() {
      $state.transitionTo('projects.list');
    }

    // Private

    function tempMergeProductsOntoServices() {
      angular.forEach(vm.project.services, mergeOnProduct);

      function mergeOnProduct(service) {
        service.product = lodash.find(products, findProduct);

        function findProduct(product) {
          return product.id === service.product_id;
        }
      }
    }

    function openAddGroup() {
      AddGroup.showModal().then(updateGroups);

      function updateGroups(group) {
        vm.groupToAdd = group.id;
        console.log(lodash.findIndex(vm.project.groups, vm.groupToAdd));

        if (lodash.findIndex(vm.project.groups, vm.groupToAdd) !== -1 ) {
          Toasts.error('Group already associated with this project.');
        } else {
          vm.project.group_ids.push(vm.groupToAdd);
          //
          //vm.filteredProject = lodash.omit(vm.project, 'created_at', 'updated_at', 'deleted_at', 'services', 'domain',
          //  'url', 'state', 'state_ok', 'problem_count', 'account_number', 'resources', 'icon', 'status', 'users',
          //  'order_history', 'cc', 'staff_id', 'approved', 'project_answers');
          //
          //for (var prop in vm.filteredProject) {
          //  if (vm.filteredProject[prop] === null) {
          //    delete vm.filteredProject[prop];
          //  }
          //}
          vm.project.$update(saveSuccess, saveFailure);
        }
      }

      function saveSuccess() {
        Toasts.toast('Project Groups Updated.');
        $state.go(project.details, {id: $stateParams.projectId});
      }

      function saveFailure() {
        Toasts.error('Server returned an error while updating.');
      }
    }
  }
})
();
