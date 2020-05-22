import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { navigate } from "gatsby";
import AboutSection from "./AboutSection"

const setup = props => {
  const screen = render(<AboutSection {...props} />);
  return {
    getSeeExhibitionsButton: () => screen.getByText(/see my exhibitions/i),
    ...screen
  }
}

it('navigates to "about" page on "see my exhibitions" button click', () => {
  const { getSeeExhibitionsButton } = setup();
  
  fireEvent.click(getSeeExhibitionsButton());

  expect(navigate).toHaveBeenCalledWith('/about');
})
