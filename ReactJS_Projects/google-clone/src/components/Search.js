import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";

function Search() {
  return (
    <Container>
      <SearchInput>
        <SearchIcon />
        <Input />
        <MicIcon />
      </SearchInput>
      <SearchButtons>
        <Button variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </SearchButtons>
    </Container>
  );
}

export default Search;

const Container = styled.div``;

const SearchInput = styled.div`
display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 30px;
  padding: 10px 20px;
  border-radius: 999px;
  width: 75vw;
  margin: 0 auto;
  margin-top: 40px;
  max-width: 560px;

  {MicIcon} {
    color: gray;
  }
  `;

const Input = styled.input`
  flex: 1;
  padding: 10px 20px;
  font-size: medium;
  border: none;

  &:focus {
    outline: none;
  }
`;

const SearchButtons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  button {
    margin: 5px;
    padding: 7px 15px;
    background-color: #f8f8f8;
    border: 1px solid white;
    text-transform: inherit;
    color: #5f6368;

    &:hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
      background-color: #f8f8f8;
      border: 1px solid #c6c6c6;
      color: #222;
    }
  }
`;