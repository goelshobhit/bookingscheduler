import { createGlobalStyle } from 'styled-components';

export const LoaderStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  outline: none;
}

body {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right,#00C9FF ,#75cd7e);
}
.preloader {
position: relative;
margin: 100px auto;
width: 200px;
height: 200px;
}
.load-1 {
position: absolute;
top: 0;
left: 0;
width: 200px;
height: 200px;
border-radius: 50%;
border-width: 10px;
border-style: solid;
border-color: #fff;
border-top-color: #55be9b;
border-bottom-color: #55be9b;
animation: load1 1s linear infinite;
}
.load-2 {
position: absolute;
top: 0;
left: 0;
margin: 25px;
width: 150px;
height: 150px;
border-radius: 50%;
border-width: 10px;
border-style: solid;
border-color: #fff;
border-top-color: #55be9b;
border-bottom-color: #55be9b;
animation: load1 1.5s linear infinite;
}
.load-3 {
position: absolute;
top: 0;
left: 0;
margin: 50px;
width: 100px;
height: 100px;
border-radius: 50%;
border-width: 10px;
border-style: solid;
border-color: #fff;
border-top-color: #55be9b;
border-bottom-color: #55be9b;
animation: load1 2s linear infinite;
}
.load-4 {
position: absolute;
top: 0;
left: 0;
margin: 70px;
width: 60px;
height: 60px;
border-radius: 50%;
border-width: 10px;
border-style: solid;
border-color: #fff;
border-top-color: #55be9b;
border-bottom-color: #55be9b;
background-color: #55be9b;
animation: load1 2.5s linear infinite;
}
.load-5 {
position: absolute;
top: 0;
left: 0;
margin: 95px;
width: 30px;
height: 30px;
border-radius: 50%;
background-color: #fff;
}

@keyframes load1 {
50% {
}
100% {
  transform: rotate(360deg);
}
}


`;
