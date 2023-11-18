import React, {useState} from 'react';
import styles from './main.module.scss'
import test from '../../Img/test.png'
import character from '../../Img/char.png'
import Product from "../../Components/Main/Product";
import SearchItem from "../../Components/Main/SearchItem";
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { PersonModel } from '../../Components/Models/PersonModel';
import { OrbitControls } from '@react-three/drei';
import { PantsModel } from '../../Components/Models/Pants';
import { ShirtModel } from '../../Components/Models/ShirtModel';
import { Character } from '../../Components/Models/Character';
import { Suspense } from 'react';
const Main = () => {
    const [color, setColor] = useState("#000")

    const menuItems = ["футболки","штаны","ботинки","худи","свитшоты","юбки" ]
    const items = [
        [
            {src:"./tshirts/tshirt.png",name:"Футболка"},
            {src:"./tshirts/tshirt_red.png",name:"Футболка"},
            {src:"./tshirts/tshirt_green.png",name:"Футболка"},
            {src:"./tshirts/tshirt_blue.png",name:"Футболка"}
        ],
        [
            {src:"./jeans/jeans.png",name:"Джинсы"},
            {src:"./jeans/jeans_red.png",name:"Джинсы"},
            {src:"./jeans/jeans_green.png",name:"Джинсы"},
            {src:"./jeans/jeans_blue.png",name:"Джинсы"},

        ],
        [
            {src:"./boots.png",name:"Ботинки"},
            {src:"./boots.png",name:"Ботинки"},
            {src:"./boots.png",name:"Ботинки"},
            {src:"./boots.png",name:"Ботинки"},
        ],
        [
            {src:"./hoodie.png",name:"Худи"},
            {src:"./hoodie.png",name:"Худи"},
            {src:"./hoodie.png",name:"Худи"},
            {src:"./hoodie.png",name:"Худи"},
            {src:"./hoodie.png",name:"Худи"},
            {src:"./hoodie.png",name:"Худи"},
        ],
        [
            {src:"./sweatshirts/sweatshirt_black.png",name:"Свитшот"},
            {src:"./sweatshirts/sweatshirt_red.png",name:"Свитшот"},
            {src:"./sweatshirts/sweatshirt_green.png",name:"Свитшот"},
            {src:"./sweatshirts/sweatshirt_blue.png",name:"Свитшот"},
            {src:"./sweatshirts/sweatshirt_white.png",name:"Свитшот"},

        ],
        [
            {src:"./ubka.png",name:"Юбка"},
            {src:"./ubka.png",name:"Юбка"},
            {src:"./ubka.png",name:"Юбка"},
            {src:"./ubka.png",name:"Юбка"},
            {src:"./ubka.png",name:"Юбка"},
            {src:"./ubka.png",name:"Юбка"},
            {src:"./ubka.png",name:"Юбка"},

        ],
    ]
    const [selectedCategory,setSelectedCategory] = useState(0)
    return (
        <div className={styles.items}>
            <div>
                <div>
                    <h1 className={styles.title}>Настройки поиска:</h1>
                    <ul className={styles.search}>
                        {
                            menuItems.map((item,index)=>{
                                 return (<li className={`${styles.search_item} ${selectedCategory === index?styles.active:""}` }
                                             onClick={()=>{
                                                 setSelectedCategory(index)
                                             }}>{item} </li>)
                            })
                        }
                    </ul>
                    <div className={styles.search_more}>
                        <p>
                            больше настроек
                        </p>
                        <img className={styles.search_more_plus} src="./plus.png" alt=""/>
                    </div>
                    <hr className={styles.line}/>
                </div>
                <div className={styles.products}>
                    <h1 className={styles.title}>Товары:</h1>
                    <ul className={styles.products_list}>
                        {
                            items[selectedCategory].map((item,index)=>{
                                return (
                                        <Product img={item.src}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className={styles.character}>
            <button onClick={(e) => {setColor("#00ff00")}}> Зеленый</button>
            <button onClick={(e) => {setColor("#ff0000")}}> Красный</button>
            <Canvas style={{
                backgroundColor: '#aaa'
            }}>
                <ambientLight/>
                <Suspense>
                    <Character position={[0, -3, 0]} rotation={[0, 0, 0]} color={color}/>
                </Suspense>

                
                <OrbitControls 
                maxPolarAngle = {-Math.PI / 2} 
                minPolarAngle = {Math.PI / 2}
                enablePan = {false}
                enableZoom = {false}
                />
            </Canvas>
            </div>

        </div>
    );
};

export default Main;