import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const fnInput = screen.getByPlaceholderText(/enter your first/i);
    const lnInput = screen.getByPlaceholderText(/enter your last/i);
    const addyInput = screen.getByPlaceholderText(/enter your street/i);
    const cityInput = screen.getByPlaceholderText(/enter your city/i);
    const stateInput = screen.getByPlaceholderText(/enter your state/i);
    const zipInput = screen.getByPlaceholderText(/enter your zip/i);

    // expect(screen.getByText(/Your new green friends will be shipped to:/i)).toBeInTheDocument();

    fireEvent.change(fnInput, { name: { value: 'zach'} });
    fireEvent.change(lnInput, { name: { value: 'peterson'} });
    fireEvent.change(addyInput, { name: { value: '505 oak'} });
    fireEvent.change(cityInput, { name: { value: 'elm'} });
    fireEvent.change(stateInput, { name: { value: 'NY'} });
    fireEvent.change(zipInput, { name: { value: '11111'} });

    const submitBtn = screen.getByRole('button', { name : /checkout/i });

    fireEvent.click(submitBtn);
    
    expect(screen.getByText(/Your new green friends will be shipped to:/i)).toBeInTheDocument();
});
