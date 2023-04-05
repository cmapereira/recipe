import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const Search = () => {

    const [input, setInput] = useState("")

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input 
                onChange={(e)=> setInput(e.target.value)} 
                type = 'text' 
                value={input}>
            </input>
        </div>
    </FormStyle>
  )
}

export default Search

const FormStyle = styled.form`
    width: 100%;

    div{
        width: 400px;
        position: relative;
        margin: 0 auto;
    }

    input{
        width: 100%;
        border: none;
        background: linear-gradient(35deg, teal, gray);
        font-size: 1rem;
        color: white;
        padding: 5px 40px; 
        border: none;
        border-radius: 1rem;
        outline: none;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`