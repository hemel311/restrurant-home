import React from "react";
import LoadComment from "./Loadcomment";
import { Card,CardImg,CardImgOverlay,CardBody,CardTitle,CardText } from "reactstrap";

const DishDetails=props=>{
    return(
        <div>
            <Card style={{marginTop:"10px"}}>
                <CardImg src={props.dish.image}
                          alt={props.dish.name}
                        />
                <CardBody style={{textAlign:"left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>Price: {props.dish.price}Tk.</CardText>
                    <hr/>
                    <LoadComment comments={props.dish.comments}/>
                    </CardBody>         
            </Card>
        </div>
    )
}
export default DishDetails;