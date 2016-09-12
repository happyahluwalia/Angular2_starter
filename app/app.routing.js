System.register(['@angular/router', './navbar.component', './posts.component', './users.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, navbar_component_1, posts_component_1, users_component_1;
    var routes, routedComponents;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: 'navbar', component: navbar_component_1.NavBarComponent },
                { path: 'posts', component: posts_component_1.PostsComponent },
                { path: 'users', component: users_component_1.UsersComponent },
                { path: "", redirectTo: "navbar", pathMatch: "full" },
                { path: "*", redirectTo: "navbar", pathMatch: "full" }
            ];
            exports_1("routedComponents", routedComponents = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map