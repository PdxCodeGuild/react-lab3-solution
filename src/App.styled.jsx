import styled, { css } from "styled-components";

export const PostContainer = styled.div`
  padding: ${(props) => props.padding || "1em"};
  
  ${(props) => (props.dark) ? 
    css`
      background-color: #333;
      color: #f3f3f3;
    `: 
    css`
      background-color: #f3f3f3;
      color: #333;
    `
  };
`;

export const PostTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;

  text-decoration: underline;
`;

export const PostBody = styled.div`
  padding: 1em 0;
`;

export const Input = styled.input`
  padding: 0.5em;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);

  margin-bottom: 1em;
`;
Input.defaultProps = {
  type: "text",
}
