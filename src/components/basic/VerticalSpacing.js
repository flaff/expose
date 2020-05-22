import { styled } from "linaria/react"

const VerticalSpacing = styled.div`
> * {
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
}
`

export default VerticalSpacing
