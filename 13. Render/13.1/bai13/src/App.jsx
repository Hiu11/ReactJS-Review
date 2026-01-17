import './App.css'
import demoPic from "../src/assets/img/demo.png";
let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const wellCome = [
  "chao mung ban den voi react",
  "rat vui dc lam quen",
  "ban hay gioi thieu ban than di",
];

function ranDomTitle() {
  return Math.floor(Math.random() * wellCome.length);
}

function Header() {
  const title = wellCome[ranDomTitle()];
  return (
    <><h1>{title}</h1>
      <p>hom nay la: <strong>{today}</strong>. Thoi gian hien tai{" "}
        <strong>{time}</strong>
      </p></>
  )
}

const name = "Nam";
let issLogedIn = true;
let person = {
  name: "Lan",
  age: 20,
};

function DinamicValue(){
  return(
    <>
    <h2>xin chao nha {name}</h2>
    <p>ket qua: {1+2*5}</p>
    <p>{issLogedIn?"ban da dang nhap":"hay dang nhap"}</p>
    <p>Ten: {person.name}, tuoi: {person.age}</p>
    <img src={demoPic} alt=""/>
    </>
  )
};

function App() {
  return (
    <>
      <Header/>
      <DinamicValue/>
    </>
  )
}

export default App
