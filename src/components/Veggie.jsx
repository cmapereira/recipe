import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import {Link} from 'react-router-dom'

const Veggie = () => {

  const[veggie, setVeggie] = useState([]);

  useEffect(() => {
      getVeggie();
  },[])

  const getVeggie = async () => {

      const check = localStorage.getItem("veggieValues")

      if (check) {
          setVeggie(JSON.parse(check))
      } else {

          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`)
          const data = await api.json()
          localStorage.setItem("veggieValues", JSON.stringify(data.recipes))
          setVeggie(data.recipes)

      }
      console.log(process.env.REACT_APP_API_KEY)
  }

  return (
    <div className="container">
      <Wraper>
            <h4>Veggie Recipes</h4>
        </Wraper>

        <Splide options= {{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '50px',
        }}>
            {veggie.map((item)=>{
                return(
                    <SplideSlide key={item.id}>
                        <Card>
                            <Link to={'/recipes/' + item.id}>
                                <p>{item.title}</p>
                                <img src={item.image} alt={item.title} />
                                <Gradient />
                            </Link>
                        </Card>
                    </SplideSlide>
                )
            })}
        </Splide>
    </div>
  )
}

const Wraper = styled.div`
    color: teal;
    text-align: start;
    width: 100%;
    margin-bottom: 50px;

    h4{
      padding-left: 10px;
      margin-top: 50px;
  }
`;

const Card = styled.div`
    height: 300px;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;

    img{
        border-radius: 25px;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7))
`;

export default Veggie