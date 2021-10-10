import styled from "styled-components"

export const TitleDescription = styled.h3`
  color: ${({ theme }) => theme.palette.black};
  font-weight: 600;
  font-size: 1.75rem;
  margin: 1.5rem 0;
`
export const DescriptionStyled = styled.p`
  color: ${({ theme }) => theme.palette.grey30};
  font-size: 1rem;
  max-width: 600px;
`
