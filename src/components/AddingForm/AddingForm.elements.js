import styled from 'styled-components';

export const FormArea = styled.div`
  width: 80%;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FormSide = styled.div`
  width: 45%;
  height: 320px;
`;

export const AddInput = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  color: #999;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const AddTextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
  height: 100px;
  outline: none;
  color: #999;
  margin-top: 10px;
`;

export const FormButton = styled.input`
  padding: 10px 30px;
  background-color: #0084ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  float: right;
  margin-right: 110px;
  margin-top: 20px;
  cursor: pointer;
  position: absolute;
  top: 75%;
  left: 82.3%;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  color: #000;
`;
