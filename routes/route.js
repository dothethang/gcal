let app = angular.module("myApp", ["ngRoute"])
app.config(function ($routeProvider) {
    $routeProvider
        .when(
            "/home",
            {
                templateUrl: "/views/index.html"
            })
        .when(
            "/home/m1s1",
            {
                templateUrl: "/views/m1s1.html"
            })
        .when(
            "/home/m1s2",
            {
                templateUrl: "/views/m1s2.html"
            })
        .when(
            "/home/m1s3",
            {
                templateUrl: "/views/m1s3.html"
            })
        .when(
            "/home/m1s4",
            {
                templateUrl: "/views/m1s4.html"
            })
        .when(
            "/home/m1s5",
            {
                templateUrl: "/views/m1s5.html"
            })
        .when(
            "/home/m1s6",
            {
                templateUrl: "/views/m1s6.html"
            })
        .when(
            "/home/m1s7",
            {
                templateUrl: "/views/m1s7.html"
            })
        .when(
            "/home/page_cal_tool",
            {
                templateUrl: "/views/page_cal_tool.html"
            })

        .otherwise({
            redirectTo: "/home"
        })
})