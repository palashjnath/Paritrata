import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import Images from "./Images";


const geo = navigator.geolocation.getCurrentPosition((position) => {
  console.log('latitude is: ', position.coords.latitude);
  console.log('longitude is: ', position.coords.longitude);
}
);

export default function Navbar() {
  return (
    <Nav>
      {geo}
      <Images className= 'image'/>
    </Nav>
  );
}



/* <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div> */
const Nav = styled.nav`
  display: center;
  justify-content: space-between;
  height: 500px;
  width: 700px;
  color: black;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: black;
        
        letter-spacing: 0.2rem;
      }
    }
  }
  .image{
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: black;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;