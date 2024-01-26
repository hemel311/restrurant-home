import React from "react";
import { Card,CardImg,CardImgOverlay,CardBody,CardTitle } from "reactstrap";
const MenuList=props=>{
    // console.log(props)
    return(
        <div>
            <Card style={{margin:"10px"}}>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.item.name}
                        src={props.item.image}
                        style={{opacity:"0.5"}}
                    />
                    <CardImgOverlay>
                        <CardTitle>{props.item.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}
export default MenuList;