import { useEffect, useState } from "react";
import { PantsModel } from "./Pants";
import { PersonModel } from "./PersonModel";
import { ShirtModel } from "./ShirtModel";
import { useFrame, useThree } from "react-three-fiber";
import { Sweatshirt } from "./Sweatshirt";

 
export function Character(props) {
    const [position, setPosition] = useState();
    const [rotation, setRotation] = useState([0, 0, 0]);


    useEffect(() => {
        setPosition(props.position)
    }, [props.position])

    useEffect(() => {
        setRotation(props.rotation)
    }, [props.rotation])



    return( 
        <>
            <PersonModel position = {position} rotation = {rotation} scale ={[1 * 3, 1 * 3, 1 * 3]}/>
            <PantsModel position = {position} rotation = {rotation} color={props.color} scale ={[1 * 3, 1 * 3, 1 * 3]}/>
            {/* <ShirtModel position = {position} rotation = {rotation} scale ={[1 * 3, 1 * 3, 1.075 * 3]}/> */}
            <Sweatshirt position = {position} rotation = {rotation} color={props.color} scale ={[1.01 * 3, 1 * 3, 1.085 * 3]}/>
        </>
    )
}