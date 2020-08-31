const types = [
    {
        name: 'Pelúcia',
        value: 1,
    },
    {
        name: 'Biscuit',
        value: 2,
    },
    {
        name: 'Acrílico',
        value: 3,
    },
];

const images = [
    {
        image: 'img/babyShark.jpg',
        description: 'Baby Shark',
        type: 2,
    },
    {
        image: 'img/squid.jpg',
        description: 'Tartaruga',
        type: 1,
    },
    {
        image: 'img/turtle.jpg',
        description: 'Polvo',
        type: 1,
    },
    {
        image: 'img/pikachu.jpg',
        description: 'Pikachu',
        type: 3,
    }
];

angular.module('app', []);
angular
    .module('app')
    .controller('AlbumCtrl', $scope => {
        $scope.title = 'Virtuosa';
        $scope.options = types;
        $scope.photos = images;
        $scope.changeType = () => {
            if (!$scope.type) {
                $scope.photos = images;
                return;
            }
            $scope.photos = images.filter(photo => photo.type === +$scope.type);
        };
    });
