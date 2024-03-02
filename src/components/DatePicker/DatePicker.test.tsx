import React from "react";
import {DatePicker} from "./DatePicker";
import {fireEvent, render} from "@testing-library/react";

describe('DatePicker', () => {
    test('renders a date picker', () => {
        render(<DatePicker/>);
    });

    test('opens picker on button click', () => {
        const {getByLabelText, getByRole} = render(<DatePicker/>);
        fireEvent.click(getByLabelText(/pick a date/i));
        expect(getByRole('dialog')).toBeEmptyDOMElement();
    });

    test('selects a date', () => {
        const {getByLabelText, getByText} = render(<DatePicker/>);
        fireEvent.click(getByLabelText(/pick a date/i)); // Open the date picker
        // This assumes your date picker initializes on the current month and that today's date is selectable
        const today = new Date();
        const todayString = today.getDate().toString();
        fireEvent.click(getByText(todayString)); // Select today's date
        // More assertions can be added to check if the date is correctly selected
    });
});
