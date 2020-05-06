import React from "react";
import ReactDOM from 'react-dom'
import Button from "./Button";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom'

it("renders without crashing", ()=>{
    const div = document.createElement("div")
    ReactDOM.render(<Button>Test</Button>, div)
})

it("renders button correctly", ()=>{
    const {getByTestId} = render(<Button label="click me please">Lable</Button>)
    expect(getByTestId('button')).toHaveTextContent("click me please")
})

it("renders button correctly", ()=>{
    const {getByTestId} = render(<Button label="save">Lable</Button>)
    expect(getByTestId('button')).toHaveTextContent("save")
})
