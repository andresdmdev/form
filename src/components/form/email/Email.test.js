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

const iconElement = (id) => {
    const icon = screen.queryByTestId(id)

    return {icon}
}

beforeEach(() => {
    render(<App />)
})

describe('should render email component', () => {
    test('should input a correct email', () => {

        emailElement('andresdmf55@gmail.com')

        const {icon} = iconElement('checkIcon')

        expect(icon).toBeInTheDocument()

        const {icon:errorIcon} = iconElement('errorIcon')

        expect(errorIcon).not.toBeInTheDocument()

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)
    })

    it('should show an error if the input dont have email format', async () => {

        emailElement('andresdmf55gmail.com')

        const {icon} = iconElement('checkIcon')

        expect(icon).not.toBeInTheDocument()

        const {icon:errorIcon} = iconElement('errorIcon')

        expect(errorIcon).toBeInTheDocument()

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