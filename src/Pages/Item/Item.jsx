import React, {Suspense, useState} from 'react';
import styles from "./item.module.scss"
import star from "../../Img/star.svg";
import size_type from "../../Img/size_type.svg"
import {useParams} from "react-router-dom";
import {Character} from "../../Components/Models/Character";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "react-three-fiber";
const Item = () => {
    const params = useParams()
    const items = [
        {src:"/tshirts/tshirt",name:"Футболка",id:1},
        {src:"/jeans/jeans",name:"Джинсы",id:2},
        {src:"/boots",name:"Ботинки",id:3},
        {src:"/hoodie",name:"Худи",id:4},
        {src:"/sweatshirts/sweatshirt",name:"Свитшот",id:5},
        {src:"/ubka",name:"Юбка",id:6},
    ]
    const colors = {
        default:{
            hex:"#1C1C1C",
            color:""
        },
        green:{
            hex:"#008000",
            color:"_green"
        },
        red:{
            hex:"#B00000",
            color:"_red"
        },
        blue:{
            hex:"#0000FF",
            color:"_blue"
        },
        white:{
            hex:"#FFFAFA",
            color:"_white"
        },

    }
    const [fit,setFit] = useState(false)
    const sizes = [40,42,44,46,48,50,52,54,56,58]
    const [selectedColor,setSelectedColor] = useState(colors.default)
    console.log(items[params.id].src)
    return (
        <div className={styles.items}>
            <div className={styles.character_model}>
                <Canvas style={{
                    backgroundColor: '#aaa'}}>
                    <ambientLight/>
                    <Suspense>
                        <Character position={[0, -3, 0]} color={selectedColor.hex} selectedCategoryId = {params.id}/>
                    </Suspense>


                    <OrbitControls
                        maxPolarAngle = {-Math.PI / 2}
                        minPolarAngle = {Math.PI / 2}
                        enablePan = {false}
                        enableZoom = {false}
                    />
                </Canvas>
            </div>
            <div className={styles.character}>
                {fit? null:<img src={`${items[params.id - 1].src + selectedColor.color}.png`} className={styles.character_item} alt="photo"/>}
            </div>
            <div className={styles.description}>
                <h1 className={styles.description_title}>Кайфовая футболка </h1>
                <div className={styles.description_subtitle}>
                    <button className={styles.description_rating}>
                        <img className={styles.description_rating_star} src={star} alt="a"/>
                        5.0
                    </button>
                    <p className={styles.article}>
                        #35-6723-4457-8993
                    </p>
                </div>
                <p className={styles.description_info}>Кайфовая футболка из кайфовой ткани для дикого кайфа,можно кайфово носить, кафово стирать, кайфово кайфовать</p>
                <p className={styles.description_color}>Цвет:</p>
                <div className={styles.colors}>
                    <div className={styles.color} style={{
                        backgroundColor:"#008000"
                    }} onClick={()=> {
                    setSelectedColor(colors.green)
                    }}>
                    </div>
                    <div className={styles.color} style={{
                        backgroundColor:"#B00000"
                    }} onClick={()=> {
                        setSelectedColor(colors.red)
                    }}>
                    </div>
                    <div className={styles.color} style={{
                        backgroundColor:"#0000FF"
                    }} onClick={()=> {
                        setSelectedColor(colors.blue)
                    }}>
                    </div>
                    <div className={styles.color} style={{
                        backgroundColor:"#1C1C1C"
                    }} onClick={()=> {
                        setSelectedColor(colors.default)
                    }}>
                    </div>
                </div>
                <div className={styles.description_size}>
                    <h2 className={styles.sizes_title}>Размер:</h2>
                    <img src={size_type} className={styles.sizes_type}>
                    </img>
                </div>
                <div className={styles.sizes_container}>
                    {
                        sizes.map((size,index)=>{
                            return <div key={index} className={styles.sizes_container_item}>{size}</div>
                        })
                    }
                </div>
                <button className={styles.button} onClick={(e)=>{
                    setFit((prev)=>{
                        return !prev
                    })
                }}>{fit?"Отменить примерку":"Примерить"}</button>
                <div className={styles.buy }>
                    <button className={styles.buy_button}>Купить</button>
                    <div className={styles.buy_price}>1500Р</div>
                </div>
            </div>


        </div>


    );
};

export default Item;