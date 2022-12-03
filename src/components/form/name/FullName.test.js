import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import App from '../../App'

beforeEach(() => {
    render(<App />)
})

const inputElement = (name, text) => {
    const nameElement = screen.getByRole('textbox', {
        name: name
    })

    userEvent.type(nameElement, text)
    expect(nameElement).toHaveValue(text)
}

const iconElement = (id) => {
    const icon = screen.queryByTestId(id)

    return {icon}
}

const msgElement = (text) => {
    const msg = screen.queryByText(text)

    return {msg}
}

describe('should render firstName component', () => {
    test('should input at least three letters for the first name', () => {

        inputElement(/first name/i, 'William')

        const { icon:errorIcon } = iconElement('errorIcon')

        expect(errorIcon).not.toBeInTheDocument()

        const { icon } = iconElement('checkIcon')

        expect(icon).toBeInTheDocument()

        const { msg } = msgElement(/first name must be between 3 and 25 characters/i)

        expect(msg).not.toBeInTheDocument()
    })

    test('should show an error if the input dont have more than three letters', async () => {

        inputElement(/first name/i, 'Wi')

        const { icon:errorIcon } = iconElement('errorIcon')

        expect(errorIcon).toBeInTheDocument()

        const { icon } = iconElement('checkIcon')

        expect(icon).not.toBeInTheDocument()

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        const errorMsg = await screen.findByText(/first name must be between 3 and 25 characters/i)

        expect(errorMsg).toBeInTheDocument()
    })

    test('should show an error if the input dont have any letter', async () => {

        inputElement(/first name/i, '')

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        const errorMsg = await screen.findByText(/Input your first name./i)

        expect(errorMsg).toBeInTheDocument()
    })
})

describe('should render lastName component', () => {
    test('should input at least three letters for the last name', () => {

        inputElement(/last name/i, 'Marquez')   

        const { icon:errorIcon } = iconElement('errorIcon')

        expect(errorIcon).not.toBeInTheDocument()

        const { icon } = iconElement('checkIcon')

        expect(icon).toBeInTheDocument()

        const errorMsg = screen.queryByText(/last name must be between 3 and 25 characters/i)

        expect(errorMsg).not.toBeInTheDocument()
    })

    test('should show an error if the input dont have more than three letters', async () => {

        inputElement(/last name/i, 'Ma')   

        const { icon:errorIcon } = iconElement('errorIcon')

        expect(errorIcon).toBeInTheDocument()

        const { icon } = iconElement('checkIcon')

        expect(icon).not.toBeInTheDocument()

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        const errorMsg = await screen.findByText(/last name must be between 3 and 25 characters/i)

        expect(errorMsg).toBeInTheDocument()
    })

    test('should show an error if the input dont have any letter', async () => {

        iconElement(/last name/i, '')

        const submitBtn = screen.getByRole('button')

        userEvent.click(submitBtn)

        const errorMsg = await screen.findByText(/Input your last name./i)

        expect(errorMsg).toBeInTheDocument()
    })
})