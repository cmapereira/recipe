import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'


const Recipes = () => {

  let params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)

    const detailData = await data.json()
    setDetails(detailData)

    console.log(details)
  }

  useEffect(()=>{
    fetchDetails();
  },[params.name])

  return (
    <div className="container">
      <DetailWrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt="recipes image" />
        </div>
        <Info>
          <Button className = {activeTab === 'instructions' ? 'btn-active' : ''}
          onClick={()=> setActiveTab('instructions')}>Instructions</Button>

          <Button className = {activeTab === 'ingredients' ? 'btn-active' : ''}
          onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
          {activeTab === 'instructions' && (
            <div>
            <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <ul>
            {details.extendedIngredients.map((ingredient) =>
              <li key={ingredient.id}>{ingredient.original}</li>
            )}
            </ul>
          )}
          
          
          
        </Info>
      </DetailWrapper>
    </div>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .btn-active{
    background: teal;
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }

  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul{
    margin-top: 2rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: teal;
  background: white;
  border: 2px solid teal;
  margin-right: 2rem;
  margin-bottom: 2rem;
  font-wheight: 600;
  cursor: pointer;
`

const Info = styled.div`
  margin-left: 10rem;
`

export default Recipes