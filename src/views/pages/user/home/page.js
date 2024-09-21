import NavBarComponent from "../../../components/navbar.component.js";
import AbsComponent from "../../../core/abstract/component.abs.js";

export default class HomePage extends AbsComponent{
    render(){
       return (`
            ${NavBarComponent()}
        
        `)
    }
}