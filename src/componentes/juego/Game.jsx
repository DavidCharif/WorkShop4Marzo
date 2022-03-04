import React from 'react'
import styled from 'styled-components'
import { List } from '../lista/Lista'

const DivStyled = styled.div`
  background-color: aqua;

`

const Game = () => {
  return (
    <DivStyled><h1>Pagina secreta de usuarios</h1>
    <List/>
    </DivStyled>
  )
}

export default Game