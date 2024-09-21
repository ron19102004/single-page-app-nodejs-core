import routes, { RouteNotFoundPage } from "./route.def.js"

const routerLoader = () => {
    const routeMatches = routes
        .map(route => ({ route: route, isMatches: location.pathname === route.path }))
        .find(potential => potential.isMatches)
    if (!routeMatches) {
        return new RouteNotFoundPage()
    }
    return routeMatches.route.component;

}
const renderComponent = () => {
    const root = document.getElementById("root")
    root.innerHTML = routerLoader().render()
    return root
}
const navigate = to => {
    history.pushState(null, null, location.origin + to)
    renderComponent()
}
const isRoute = match =>{
    return location.pathname === match
}
window.addEventListener('popstate',renderComponent)
document.addEventListener('DOMContentLoaded', _ => {    
    renderComponent().addEventListener('click', ev => {        
        if (ev.target.matches('[link-route]')) {
            ev.preventDefault()
            navigate(ev.target.getAttribute('href'))
        }
    })
})
const routeTools = {
    navigate: navigate,
    isRoute :isRoute
}
export default routeTools