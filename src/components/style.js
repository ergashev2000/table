import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: gray;
  padding: 50px 0;

  table td {
    padding: 10px;
  }
`;

export const TableBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  height: 40px;
  width: -webkit-fill-available;
  padding: 2px 10px;
  border-radius: 10px;
  margin: 20px 0;

  :focus {
    border: 2px solid black;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  input[type="file"] {
    display: none;
  }

  span svg {
    font-size: 30px;
    color: #1678ed;
  }
`;

export const UploadIcon = styled.div`
  border: 2px solid;
  padding: 5px 20px;
  border-radius: 10px;
  transition: all 0.3s ease;
  :hover {
    color: #1678ed;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchMovies = styled.div`
  width: 50%;
`;

export const AddWrapper = styled.div``;

export const AddInputWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: gray;
  padding: 10px;
  transition: all 0.3s ease;
  border-radius: 10px;

  :hover {
    border: 2px solid ${({ rang }) => (rang ? rang : "black")};
  }
`;
