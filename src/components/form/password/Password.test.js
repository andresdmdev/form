import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import App from '../../App'

const passwordElement = (id, text) => {
    const passwordElement = screen.getByTestId(id)
        
    userEvent.type(passwordElement, text)

    const value = passwordElement.value

    return {value}
}

const errorMsg = async (text) => {
    const errorMsg = await screen.findByText(text)

    expect(errorMsg).toBeInTheDocument()
}

beforeEach(() => {
    render(<App />)
})


describe('Testing password component', () => {

    test('Should input a correct password', () => {
        
        passwordElement('password','Wm12345A$')

        const doneIcon = screen.getByTestId('checkIcon')

        expect(doneIcon).toBeInTheDocument()
    })

    test('Should show an error if the password in not correct', async () => {

        passwordElement('password','Wm12$78')

        const errorIcon = screen.getByTestId('checkIcon')

        expect(errorIcon).toBeInTheDocument()

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        expect(errorIcon).toBeInTheDocument()

        errorMsg(/Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in/i)
    })

    test('Should show an error if the password do not submited', async () => {

        passwordElement('password','')

        const errorIcon = screen.queryByTestId('checkIcon')

        expect(errorIcon).not.toBeInTheDocument()

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        errorMsg(/input your password/i)
    })
})

describe('Testing confirm password component', () => {

    test('Should input the confirm password', () => {
        
        const { value: password } = passwordElement('password','Wm12345A$')

        const { value: confirmPassword } = passwordElement('confirmPassword', 'Wm12345A$')

        const samePassword = password === confirmPassword

        expect(samePassword).toBeTruthy()

        const doneIcon = screen.getAllByTestId('checkIcon')

        expect(doneIcon.length).toBe(2)
    })

    test('Should show an error if passwords do not match', async () => {
        
        const { value: password } = passwordElement('password','Wm12345A$')

        const { value: confirmPassword } = passwordElement('confirmPassword', 'Wm12345A')

        const samePassword = password === confirmPassword

        expect(samePassword).toBeFalsy()

        const doneIcon = screen.getAllByTestId('checkIcon')

        expect(doneIcon.length).toBe(2)

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        errorMsg(/passwords do not match/i)
    })

    test('Should show an error if confirm password is not submited', async () => {
        
        const { value: password } = passwordElement('password','Wm12345A$')

        const { value: confirmPassword } = passwordElement('confirmPassword', '')

        const samePassword = password === confirmPassword

        expect(samePassword).toBeFalsy()

        const doneIcon = screen.getAllByTestId('checkIcon')

        expect(doneIcon.length).toBe(1)

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        errorMsg(/confirm your password./i)
    })
})