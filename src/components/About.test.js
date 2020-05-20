import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { navigate } from "gatsby";
import About from "./About"

const setup = props => {
  const screen = render(<About {...props} />);
  return {
    getSeeExhibitionsButton: () => screen.getByText(/see my exhibitions/i),
    ...screen
  }
}

it('navigates to experience page on "see my exhibitions" button click', () => {
  const { getSeeExhibitionsButton } = setup();
  
  fireEvent.click(getSeeExhibitionsButton());

  expect(navigate).toHaveBeenCalledWith('/experience');
})
