import { useState } from 'react'
import styled from 'styled-components'
const RoleDice = ({currentDice,rollDice}) => {

  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`./images/dice/dice_${currentDice}.png`} alt='dice1'/>
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}
`