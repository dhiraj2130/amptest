

describe('Main Controller', function () {
    var scope,mainController;
    var testData = ['Sean','Yaw','Lucy','Eric','Rory','Hayley'];

    beforeEach(function () {
        angular.mock.module('app');

        inject(function ($rootScope,  $controller) {
            scope = $rootScope.$new();
            mainController = $controller('MainController',{$scope:scope});
        });
    });

    it('should set up initial data', function () {
        expect(scope).toBeDefined();
        expect(scope.peopleList).toBeDefined();
        expect(scope.peopleList.length).toEqual(6);
        expect(scope.peopleList).toEqual(testData);
        expect(scope.title).toEqual("AMP Test");
    });
});
