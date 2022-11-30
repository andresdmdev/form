import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import App from '../../App'

beforeEach(() => {
    render(<App />)
})

describe('Should render occupation test', () => {
    test('Should select one option', () => {

        const occupationELement = screen.getByTestId('occupation')

        userEvent.selectOptions(occupationELement, 'Programmer')

        expect(screen.getByRole('option', { name: 'Student'}).selected).toBe(false)
        expect(screen.getByRole('option', { name: 'Doctor'}).selected).toBe(false)
        expect(screen.getByRole('option', { name: 'Programmer'}).selected).toBe(true)
    })
})