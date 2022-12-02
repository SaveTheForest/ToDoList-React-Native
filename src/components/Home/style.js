import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #272430;
`;
export const Header = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  margin: 8%;
`;
export const Search = styled.TextInput`
  width: 94%;
  height: 48px;
  background-color: #8871fd;
  align-self: center;
  border-radius: 15px;
  padding-left: 25px;
  color: #fff;
`;
export const AddTaskButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-self: flex-end;
  bottom: 130%;
  left: -8%;
`;
export const Line = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: #c1c1c1;
`;

export const Status = styled.Text`
    color: #fff;
    margin: 6%;
    font-size: 16px;
`
