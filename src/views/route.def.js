import AbsComponent from "./core/abstract/component.abs.js";
import LoginPage from "./pages/auth/login.js";
import RegisterPage from "./pages/auth/register.js";
import HomePage from "./pages/user/home/page.js";


export class RouteNotFoundPage extends AbsComponent{
    render(){
        return `<h1>Not Found</h1>`;
    }
}

const routes = [
    { path: '/', component: new HomePage() },
    { path: '/login', component: new LoginPage() },
    { path: '/register', component: new RegisterPage() }
]
export default routes