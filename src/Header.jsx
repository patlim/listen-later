import React from "react"
import styled from "styled-components"

const Header = () => {
  const HeaderWrapper = styled.div`
    width: 30%;
    float: left;
    padding: 10px 0 0 20px;
  `
  const Header = styled.header`
    color: #000;
    font-family: Avenir;
    font-size: 50px;
    font-style: oblique;
    font-weight: 900;
  `
  const Form = styled.form`
    width: 70%;
    align-self: center;
    margin: auto;
    padding-top: 20px;
  `
  const InputLink = styled.input`
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: left;
    height: 25px;
    width: 50%;
    border-radius: 100px;
    background-color: lightgrey;
    border: 0;
    font-size: 15px;
    margin: 10px 0 0 20px;
    padding: 10px 10px;
  `
  const InputTag = styled.input`
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 25px;
    width: 100px;
    border-radius: 100px;
    background-color: lightgrey;
    border: 0;
    font-size: 15px;
    margin: 10px 0 0 10px;
  `
  const Submit = styled.input`
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 25px;
    width: 100px;
    border-radius: 100px;
    background-color: lightgrey;
    border: 0;
    font-size: 15px;
    margin: 10px 0 0 20px;
  `

  return (
    <>
      <HeaderWrapper>
        <Header>LISTEN LATER</Header>
      </HeaderWrapper>
      <Form>
        <InputLink type="text" placeholder="add a link, then listen later" />
        <InputTag type="text" placeholder="add tags" />
        <Submit type="submit" />
      </Form>
    </>
  )
}

export default Header