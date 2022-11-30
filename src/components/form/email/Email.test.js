import { screen, render, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import App from '../../App'

const emailElement = (text) => {
    const emailElement = screen.getByRole('textbox', {
        name: /email/i
    })

    const REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    const testEmail = REGEXP.test(text)

    userEvent.type(emailElement, text)

    if(testEmail){
        expect(testEmail).toBeTruthy()
    } else {
        expect(testEmail).toBeFalsy()
    }
}

const iconElementNotVisible = () => {
    const checkIcon = screen.queryByTestId('checkIcon')

    expect(checkIcon).not.toBeInTheDocument()
}

beforeEach(() => {
    render(<App />)
})

describe('should render email component', () => {
    test('should input a correct email', () => {

        iconElementNotVisible()

        emailElement('andresdmf55@gmail.com')

        const doneIconAgain = screen.getByTestId('checkIcon')

        expect(doneIconAgain).toBeInTheDocument()

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)
    })

    it('should show an error if the input dont have email format', async () => {

        iconElementNotVisible()

        emailElement('andresmf55gmail.com')

        const doneIconAgain = screen.getByTestId('checkIcon')

        expect(doneIconAgain).toBeInTheDocument()

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        await waitFor(() => {
            expect(screen.getByText(/email is not valid/i)).toBeInTheDocument()
        })
    })

    test('should show an error if the input dont have any letter', async () => {

        emailElement('')

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        await waitFor(() => {
            expect(screen.getByText(/Input your email./i)).toBeInTheDocument()
        })
    })
})