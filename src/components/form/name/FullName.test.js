import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import App from '../../App'

describe('should render firstName component', () => {
    test('should input at least three letters for the first name', () => {

        render(<App />)

        const firstNameElement = screen.getByRole('textbox', {
            name: /first name/i
        })

        const doneIcon = screen.queryByTestId('checkIcon')

        expect(doneIcon).not.toBeInTheDocument()

        userEvent.type(firstNameElement, 'William')

        expect(firstNameElement.value).toBe('William')

        const errorIconAgain = screen.getByTestId('checkIcon')

        expect(errorIconAgain).toBeInTheDocument()

        const errorMsg = screen.queryByText(/first name must be between 3 and 25 characters/i)

        expect(errorMsg).not.toBeInTheDocument()
    })

    test('should show an error if the input dont have more than three letters', async () => {

        render(<App />)

        const firstNameElement = screen.getByRole('textbox', {
            name: /first name/i
        })

        const errorIcon = screen.queryByTestId('checkIcon')

        expect(errorIcon).not.toBeInTheDocument()

        userEvent.type(firstNameElement, 'Wi')

        const errorIconAgain = screen.getByTestId('checkIcon')

        expect(errorIconAgain).toBeInTheDocument()

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        const errorMsg = await screen.findByText(/first name must be between 3 and 25 characters/i)

        expect(errorMsg).toBeInTheDocument()
    })

    test('should show an error if the input dont have any letter', async () => {

        render(<App />)

        const firstNameElement = screen.getByRole('textbox', {
            name: /first name/i
        })

        expect(firstNameElement.value).toBe('')

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        const errorMsg = await screen.findByText(/Input your first name./i)

        expect(errorMsg).toBeInTheDocument()
    })
})

describe('should render lastName component', () => {
    test('should input at least three letters for the last name', () => {

        render(<App />)

        const lastNameElement = screen.getByRole('textbox', {
            name: /last name/i
        })

        const doneIcon = screen.queryByTestId('checkIcon')

        expect(doneIcon).not.toBeInTheDocument()

        userEvent.type(lastNameElement, 'Marquez')

        expect(lastNameElement.value).toBe('Marquez')

        const errorIconAgain = screen.getByTestId('checkIcon')

        expect(errorIconAgain).toBeInTheDocument()

        const errorMsg = screen.queryByText(/last name must be between 3 and 25 characters/i)

        expect(errorMsg).not.toBeInTheDocument()
    })

    test('should show an error if the input dont have more than three letters', async () => {

        render(<App />)

        const lastNameElement = screen.getByRole('textbox', {
            name: /last name/i
        })

        const errorIcon = screen.queryByTestId('checkIcon')

        expect(errorIcon).not.toBeInTheDocument()

        userEvent.type(lastNameElement, 'Ma')

        const errorIconAgain = screen.getByTestId('checkIcon')

        expect(errorIconAgain).toBeInTheDocument()

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        const errorMsg = await screen.findByText(/last name must be between 3 and 25 characters/i)

        expect(errorMsg).toBeInTheDocument()
    })

    test('should show an error if the input dont have any letter', async () => {

        render(<App />)

        const lastNameElement = screen.getByRole('textbox', {
            name: /last name/i
        })

        expect(lastNameElement.value).toBe('')

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        const errorMsg = await screen.findByText(/Input your last name./i)

        expect(errorMsg).toBeInTheDocument()
    })
})