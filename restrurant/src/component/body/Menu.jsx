import React,{Component} from "react";
import DISHES from "../../data/dishes";
import MenuList from "./MenuList";
import DishDetails from "./DishDetails";
class Menu extends Component
{
    state={
        dishes:DISHES,
        selectedDish:null,
    }
    onDishSelect=dish=>{
        this.setState({selectedDish:dish})
    }
    render()
    {
        const menu=this.state.dishes.map(item=>{
            return(
                <MenuList 
                dish={item} 
                key={item.id}
                DishSelect={this.onDishSelect}/>
            )
        })
        let detail=null;
        if(this.state.selectedDish!=null)
        {
            detail=<DishDetails dish={this.state.selectedDish}/>
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {detail}
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu
