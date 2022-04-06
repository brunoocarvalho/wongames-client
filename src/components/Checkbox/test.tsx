import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
	it('should to render with label', () => {
		renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

		expect(screen.getByRole('checkbox')).toBeInTheDocument()
		expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
		expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
	})

	it('should to render without label', () => {
		renderWithTheme(<Checkbox />)

		expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
	})

	it('should dispatch onCheck when status changes', async () => {
		const onCheck = jest.fn()

		renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} />)

		expect(onCheck).not.toHaveBeenCalled()

		userEvent.click(screen.getByRole('checkbox'))

		await waitFor(() => {
			expect(onCheck).toHaveBeenCalledTimes(1)
		})

		expect(onCheck).toHaveBeenCalledWith(true)
	})

	it('should dispatch onCheck when status changes', async () => {
		const onCheck = jest.fn()

		renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} isChecked />)

		expect(onCheck).not.toHaveBeenCalled()

		userEvent.click(screen.getByRole('checkbox'))

		await waitFor(() => {
			expect(onCheck).toHaveBeenCalledTimes(1)
		})

		expect(onCheck).toHaveBeenCalledWith(false)
	})

	it('should to be accessible with tab', async () => {
		const onCheck = jest.fn()

		renderWithTheme(
			<Checkbox
				label="checkbox"
				labelFor="checkbox"
				onCheck={onCheck}
				isChecked
			/>
		)

		expect(document.body).toHaveFocus()

		userEvent.tab()

		expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
	})
})
