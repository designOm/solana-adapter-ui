import React from 'react'
import { styled } from '@mui/system'

export default function Connected() {
  return (
    <StyledDiv>
      <h1>Wallet Connected Sucessfully</h1>
    </StyledDiv>
  )
}


const StyledDiv = styled('div')`
  width:100%;
  height:calc(100vh - 70px);
  display:flex;
  align-items:center;
  justify-content:center;
`