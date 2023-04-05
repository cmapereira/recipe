import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Category = () => {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  gap: 2rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  text-decoration: none;
  background: linear-gradient(35deg, teal, gray);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  margin-bottom: 50px;

  h4{
    color: white;
    font-size: 0.75rem;
    padding: 5px 0;
  }

  svg{
    color: white;
    font-size: 1.5rem;
  }

  &:hover{
    background: linear-gradient(35deg, orange, crimson);
  }
`
export default Category