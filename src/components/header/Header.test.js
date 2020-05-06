import React from 'react'
import ReactDOM from 'react-dom'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from "./Header";

afterEach(cleanup)

it("renders", () => {
    const {asFragment} = render(<Header text="Hello!"/>)
    expect(asFragment()).toMatchSnapshot();
})

it("inserts text in h1", () => {
    const { getByTestId, getByText } = render(<Header text="Zhenja!" />)
    //expect(getByTestId("h2tag")).toHaveTextContent("Zhenja!")
    //expect(getByText('Zhenja!')).toHaveClass("fancy-h1")
    expect(getByTestId('h2tag')).toHaveClass("fancy-h1")
})
