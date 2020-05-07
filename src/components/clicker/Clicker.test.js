import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";
import '@testing-library/jest-dom'
import Clickers from "./Clickers";
import {getByTestId} from "@testing-library/dom";

afterEach(cleanup)

it("display the count", () => {
    const {getByTestId} = render(<Clickers/>)
    expect(getByTestId("count")).toHaveTextContent("0");
})

it("increments count", () => {
    const {getByTestId, getByText} = render(<Clickers/>)
    fireEvent.click(getByText("Up"))
    expect(getByTestId("count")).toHaveTextContent("1");
})

it("decrements count", () => {
    const {getByTestId, getByText} = render(<Clickers/>)
    fireEvent.click(getByText("Down"))
    expect(getByTestId("count")).toHaveTextContent("-1");
})

it("decrements count two times", () => {
    const {getByTestId, getByText} = render(<Clickers/>)
    fireEvent.click(getByText("Down"))
    fireEvent.click(getByText("Down"))
    expect(getByTestId("count")).toHaveTextContent("-2");
})
