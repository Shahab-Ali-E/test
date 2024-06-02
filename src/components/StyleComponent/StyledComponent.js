import styled from "styled-components/native";

export const CustomText = styled.Text`
    color:${(props)=>props.color|| 'black'};
    fontWeight:${(props)=>props.fontWeight};
    fontSize: ${(props)=>props.fontSize || '15px'};
    marginLeft:${(props)=>props ? props.marginLeft:0 || ''};
`;

export const CustomView = styled.View`
  flex:1;
  flexDirection:${(props)=>props.flexDirection || 'column'};
  gap:${(props)=>props.gap || '0px'};
  justifyContent:${(props)=>props.justifyContent || ''};
  alignItems:${(props)=>props.alignItems || ''};
  background-color: ${(props)=>props.bg || '#dfd2f2'};
  padding: ${(props)=>props.padding || '20px'};
  margin: ${(props)=>props.margin || '15px'};
  border-radius: 20px;
  elevation: 7;
`;

export const HeadingView = styled.View`
  flex:1;
  flexDirection:${(props)=>props.flexDirection || 'row'};
  justifyContent:${(props)=>props.justifyContent || 'center'};
  alignItems:${(props)=>props.alignItems || 'center'};
  margin:${(props)=>props.margin || '10px'};
  padding:${(props)=>props.padding || '10px'};
  borderRadius:${(props)=>props.borderRadius || '28px'};
  borderColor:${(props)=>props.borderColor || '#7116f1'};
  backgroundColor:${(props)=>props.backgroundColor || '#f7f2ff'};
  borderWidth:${(props)=>props.borderWidth || '3px'};
`;

