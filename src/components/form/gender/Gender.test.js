import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import App from '../../App'

beforeEach(() => {
    render(<App />)
})

const optionElementsFn = (selected, total) => {

    const optionGenderElements = screen.getAllByRole('radio')

    expect(optionGenderElements).toHaveLength(total)

    userEvent.click(optionGenderElements[selected])

    return { optionGenderElements }
}

describe('should render Gender component', () => {
    it('should select a gender', () => {

        const { optionGenderElements } = optionElementsFn(0, 3)

        expect(optionGenderElements[0]).toBeChecked()
    })

    it('should select just one option', () => {

        const { optionGenderElements } = optionElementsFn(0, 3)

        expect(optionGenderElements[0]).toBeChecked()

        userEvent.click(optionGenderElements[1])

        expect(optionGenderElements[0]).not.toBeChecked()
        expect(optionGenderElements[2]).not.toBeChecked()
        expect(optionGenderElements[1]).toBeChecked()
    })
})