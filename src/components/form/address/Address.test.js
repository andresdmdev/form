import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from "../../App";

describe('Should render address component correctly', () => {
    it('Should input address component correctly', () => {
        render (<App />)

        const addressElement = screen.getByTestId('address')

        userEvent.type(addressElement, 'Asoc. Viviendas Santa Rosa Mz. M Lt. 5 - San Juan de Miraflores, Lima')

        expect(addressElement).toHaveValue('Asoc. Viviendas Santa Rosa Mz. M Lt. 5 - San Juan de Miraflores, Lima')
        expect(addressElement).not.toHaveValue('')
    })
})
