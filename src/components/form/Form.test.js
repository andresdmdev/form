import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import App from "../App";

beforeEach(() => {
    render(<App />)
})

const requiredInputElements = (firstName, lastName, email, password, confirmPassword) => {
    const firstNameElement = screen.getByRole('textbox', {
        name: /first name/i
    })
    const lastNameElement = screen.getByRole('textbox', {
        name: /last name/i
    })
    const emailElement = screen.getByRole('textbox', {
        name: /email/i
    })
    const passwordElement = screen.getByTestId('password')

    const confirmPasswordElement = screen.getByTestId('confirmPassword')

    userEvent.type(firstNameElement, firstName)
    userEvent.type(lastNameElement, lastName)
    userEvent.type(emailElement, email)
    userEvent.type(passwordElement, password)
    userEvent.type(confirmPasswordElement, confirmPassword)

    expect(firstNameElement).toHaveValue(firstName)
    expect(lastNameElement).toHaveValue(lastName)
    expect(emailElement).toHaveValue(email)
    expect(passwordElement).toHaveValue(password)
    expect(confirmPasswordElement).toHaveValue(confirmPassword)
}

const submitBtn = () => {
    const submitElement = screen.getByRole('button')

    userEvent.click(submitElement)
}

describe('Testing Card Component', () => {
    
    it("should show a card element with required inputs", async () => {
        
        requiredInputElements('Andres', 'Marquez', 'andres@gmail.com', 'Wm12345A$', 'Wm12345A$')

        submitBtn()

        const smallCardElement = await screen.findByTestId('smallCard')

        expect(smallCardElement).toBeInTheDocument()

        const fullNameElement = await screen.findByText('Andres Marquez')
        const emailCardElement = await screen.findByText('andres@gmail.com')
        
        expect(fullNameElement).toBeInTheDocument()
        expect(emailCardElement).toBeInTheDocument()

        const btnCardElements = await screen.findAllByRole('button')

        userEvent.click(btnCardElements[0])

        const smallCardElementAgain = await screen.findByTestId('smallCard')

        expect(smallCardElementAgain).toBeInTheDocument()

    })

    it("should show a card element with all elements", async () => {
        
        requiredInputElements('Cesar', 'Marquez', 'cesar@gmail.com', 'Wm12345A$', 'Wm12345A$')

        submitBtn()

        const smallCardElement = await screen.findByTestId('smallCard')

        expect(smallCardElement).toBeInTheDocument()

        const fullNameElement = await screen.findByText('Cesar Marquez')
        const emailCardElement = await screen.findByText('cesar@gmail.com')
        
        expect(fullNameElement).toBeInTheDocument()
        expect(emailCardElement).toBeInTheDocument()

        const btnCardElements = await screen.findAllByRole('button')

        userEvent.click(btnCardElements[0])

        const smallCardElementAgain = await screen.findByTestId('smallCard')

        expect(smallCardElementAgain).toBeInTheDocument()

    })
})