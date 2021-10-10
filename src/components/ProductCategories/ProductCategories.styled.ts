import styled from "styled-components"
import { respondTo } from "../../theme/base/Mixins"
import { displays } from "../../theme/base/Variables"

const ContentCategoriesStyled = styled.ul`
  ${displays.flexWrap};
  gap: 0.3rem;
  padding: 1rem 0 0 1rem;
  list-style: none;

  ${respondTo.sm`
    padding: 1rem 0 0 0;
  `}

  & .tag {
    color: ${({ theme }) => theme.palette.grey30};
    font-size: 0.9rem;
    position: relative;

    &::after {
      content: " >";
    }

    &:last-of-type {
      font-weight: 600;
      &::after {
        content: "";
      }
    }
  }
`

export default ContentCategoriesStyled
