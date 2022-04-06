import { screen } from '@testing-library/react'
import 'jest-styled-components'

import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
	it('it should render a white heading by default', () => {
		renderWithTheme(<Heading>Won games</Heading>)

		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
			color: '#FAFAFA'
		})
	})

	it('it should render a black heading by default', () => {
		renderWithTheme(<Heading color="black">Won games</Heading>)

		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
			color: '#030517'
		})
	})

	it('it should render a  heading with a line to the left side', () => {
		renderWithTheme(<Heading lineLeft>Won games</Heading>)

		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
			'border-left': '0.7rem solid #F231A5				'
		})
	})

	it('it should render a  heading with a line at the bottom', () => {
		renderWithTheme(
			<Heading lineLeft lineBottom>
				Won games
			</Heading>
		)

		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
			'border-bottom',
			'0.5rem solid #F231A5',
			{
				modifier: '::after'
			}
		)
	})

	it('it should render a  heading with a small size', () => {
		renderWithTheme(<Heading size="small">Won games</Heading>)

		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
			'font-size': '1.6rem'
		})
	})

	it('it should render a  heading with a huge size', () => {
		renderWithTheme(<Heading size="huge">Won games</Heading>)

		expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
			'font-size': '5.2rem'
		})
	})

	it('it should render a  heading with a primary line color', () => {
		renderWithTheme(
			<Heading lineColor="primary" lineLeft lineBottom>
				Won games
			</Heading>
		)

		const heading = screen.getByRole('heading', { name: /won games/i })

		expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
		expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
			modifier: '::after'
		})
	})

	it('it should render a  heading with a secondary line color', () => {
		renderWithTheme(
			<Heading lineColor="secondary" lineLeft lineBottom>
				Won games
			</Heading>
		)

		const heading = screen.getByRole('heading', { name: /won games/i })

		expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
		expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
			modifier: '::after'
		})
	})
})
