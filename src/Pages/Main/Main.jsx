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
const Main = () => {
    const menuItems = ["футболки","штаны","ботинки","худи","свитшоты","юбки" ]
    const items = [
        [
            {src:"./tshirt.png",name:"Футболка"},
            {src:"./tshirt.png",name:"Футболка"},
            {src:"./tshirt.png",name:"Футболка"},
            {src:"./tshirt.png",name:"Футболка"},
            {src:"./tshirt.png",name:"Футболка"},
            {src:"./tshirt.png",name:"Футболка"},
            {src:"./tshirt.png",name:"Футболка"},
        ],
        [
            {src:"./jeans.png",name:"Джинсы"},
            {src:"./jeans.png",name:"Джинсы"},
            {src:"./jeans.png",name:"Джинсы"},
            {src:"./jeans.png",name:"Джинсы"},

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
            {src:"./sweatshot.png",name:"Свитшот"},
            {src:"./sweatshot.png",name:"Свитшот"},
            {src:"./sweatshot.png",name:"Свитшот"},
            {src:"./sweatshot.png",name:"Свитшот"},
            {src:"./sweatshot.png",name:"Свитшот"},

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
                <img src={character} className={styles.character_img} alt=""/>
            </div>

        </div>
    );
};

export default Main;