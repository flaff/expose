import { styled } from "linaria/react"

const Spacing = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: 0 1rem 0 0;
    &:last-child {
        margin-right: 0;
    }
  }
`
export default Spacing
