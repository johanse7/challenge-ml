import styled from "styled-components"
import { respondTo } from "../../theme/base/Mixins"
import { displays } from "../../theme/base/Variables"

const ContentCategoriesStyled = styled.section`
  ${displays.flexWrap};
  gap: 0.3rem;
  margin-top: 1rem;

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
