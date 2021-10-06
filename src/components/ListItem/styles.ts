import styled from "styled-components";

type ContainerProps = {
  done: boolean
};

export const Container = styled.div( ( {done}:ContainerProps ) => (
  `
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #20212C;

  input{
    width: 25px;
    height: 25px;
    margin: 5px 10px;
  }

  label{
    color: white;
    text-decoration: ${ done ? 'line-through' : 'initial' };
  }
`  
) );