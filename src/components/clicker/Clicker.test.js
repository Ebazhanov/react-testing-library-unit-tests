import React from "react";
import {render, cleanup, fireEvent, waitForElement} from "@testing-library/react";
import '@testing-library/jest-dom'
import Clickers from "./Clickers";
import {findByText, getByTestId, wait, waitFor} from "@testing-library/dom";

afterEach(cleanup)

it("display the count", ()=> {
    const {getByTestId} = render(<Clickers/>)
    expect(getByTestId("count")).toHaveTextContent("0");
})

it("increments count", ()=>{
    const {getByTestId, getByText} = render(<Clickers/>)
    fireEvent.click(getByText("Up"))
    expect(getByTestId("count")).toHaveTextContent("1");
})

it("decrements count", ()=>{
    const {getByTestId, getByText} = render(<Clickers/>)
    fireEvent.click(getByText("Down"))
    expect(getByTestId("count")).toHaveTextContent("-1");
})

it("decrements count two times", async ()=>{
    const {getByTestId, getByText} = render(<Clickers/>)
    fireEvent.click(getByText("Down"))
    fireEvent.click(getByText("Down"))
    expect(getByTestId("count")).toHaveTextContent("-2");
})
