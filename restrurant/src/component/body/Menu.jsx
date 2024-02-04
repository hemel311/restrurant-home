import React,{Component} from "react";
import DISHES from "../../data/dishes";
import MenuList from "./MenuList";
import DishDetails from "./DishDetails";
import { Card,CardColumns,Modal,ModalBody,ModalFooter,Button } from "reactstrap";
class Menu extends Component
{
    state={
        dishes:DISHES,
        selectedDish:null,
        modalOpen:false
    }
    onDishSelect=dish=>{
        this.setState({selectedDish:dish,
        
            modalOpen: !this.state.modalOpen 
        } 
            
            )

    }
    toggleModal=()=>{
        this.setState({
            modalOpen:!this.state.modalOpen
        })
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
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {detail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>

            </div>
        )
    }
}
export default Menu
