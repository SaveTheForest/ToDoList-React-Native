import styled from "styled-components";

export const Container = styled.TouchableOpacity`

  width:94% ;
   
   
  align-self: center;
  margin-top: 8px;
  
  align-items: center;
  border-radius: 15px;
  flex-direction: row;
  padding-left: 15px;
`;
export const TaskText = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 15px;

    padding-top: 15px;
    padding-bottom: 15px;

`
export const ButtonComplete = styled.TouchableOpacity`
   
    border-radius: 25px;
    background-color: #FFF;
    align-self: baseline;
    margin-top: 15px;
`
export const TaskDate = styled.Text`
    color: #fff;
    padding-top: 15px;
    padding-bottom: 10px;
    font-size: 14px;
    align-self: flex-end;
    margin-left: 50px;
    position: absolute;
    

`
export const ButtonDelete = styled.TouchableOpacity`
   height: 20px;
   width: 20px;
   align-self: auto;
    border-radius: 25px;
    background-color: #FFF;
    margin-top: 15px;
`

export const AlertAreaDelete = styled.View`
align-items: center;
    height: 32%;
    width: 90%;
    align-self: center;
    border-radius: 25px;
    background-color: #7C61FF;
    top:65%;
   
`





