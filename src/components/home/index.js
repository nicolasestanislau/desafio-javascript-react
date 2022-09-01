import React from "react";
import Card from "../Card";
import "./style.scss";
import axios from "axios";

/* const array =[];
axios.get('http://localhost:3000/products')
.then(res => {
  console.log(res);
  console.log(res.data[0].title);
  array = res.data
}) */




console.log("array ", data);
var data = [];
const getData = async () => {
  var f1_data = await fetch("http://localhost:3000/products").then((res) =>
    res.json()
  );
  data.push(f1_data);

  /*   const f2_data = await fetch("https://swapi.dev/api/people/2/")
    .then((res) => res.json());
  data.push(f2_data.name); */

  console.log(data[0]);
  data[0].map((element, index) => {
    console.log(data);
    console.log(element.title);
    <Card image={element.image} />
    console.log(index);
  });
};
getData(data);
const Home = ({data}) => {
  return (
    
    <div className="home-container">
{/*       {data.map((element, index) => {
        console.log(data);
        console.log(element.title);
        console.log(index);
      })}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
};

export default Home;
