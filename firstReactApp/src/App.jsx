import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from "./Greeter.jsx"
import Die from "./Die.jsx"
import RandListItem from './RandListItem'
import DoubleDice from './DoubleDice'
import PrettyText from './PrettyText'
import PrettyList from './PrettyList'
import SlotMachine from './SlotMachine'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import ClickerCustom from './ClickerCustom'

function App() {
  const [count, setCount] = useState(0)

  const items = [
    {id :1 ,name:"Milk", quantity:4, completed:true},
    {id :2 ,name:"Eggs", quantity:12, completed:true},
    {id :3 ,name:"Tomato", quantity:6, completed:false},
    {id :4 ,name:"Carrots", quantity:2, completed:false},
  ]

  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];


  return (
    <>
      {/* <Greeter person="Amna" from="Nadia"/>     
      <Greeter person="Minaal" from="Nadia"/> 
      <Greeter/>
      <Greeter person="Omair"/> 
       */}
      {/* To pass as a number */}
      {/* <Die numSides={20}/>
      <Die numSides={40}/>
      <Die />
       */}
      
       {/* <RandListItem myList={[1,2,3,4,5,6,7,8,9,10]}/> 
       <RandListItem myList={["omair","nadia","amna","minaal"]} />*/}
       {/* pass in a JS Object 
       <RandListItem myList={{a:1, b:2, c:3}} />
       */}
      {/*<DoubleDice numSide={4} />
       <DoubleDice numSide={4} /> */}
      
      {/* <PrettyText mycolor="magenta" text="Its complicated" myfontSize="30px"/>
      <PrettyText mycolor="blue" text="It definitely is" myfontSize="40px"/>
      <PrettyList colorList = {["red","green","blue","coral"]}/>
      <PrettyList colorList = {["olivegreen","MediumSeaGreen","Violet","DodgerBlue"]}/>
     */}
    
     {/* <SlotMachine item1="🌸" item2="🌸" item3="🌻"/>
     <SlotMachine item1="🌸" item2="🌸" item3="🌸"/> */}

     {/* <ShoppingList items={items}/> */}

     {/* <PropertyList properties={properties}/> */}
    
     <Clicker/>
     <Form/> 
     <ClickerCustom text="DONT CLICK" message="DO not click on me" />
    </>
  )
}

export default App
