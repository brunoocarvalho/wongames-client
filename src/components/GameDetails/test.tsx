import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
	developer: 'Different Tales',
	releaseDate: '2020-11-21T23:00:00',
	platforms: ['windows', 'mac', 'linux'],
	publisher: 'Walkabout',
	rating: 'FREE',
	genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
	it('should render headings', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(
			screen.getByRole('heading', { name: /developer/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /release date/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /platforms/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /publisher/i })
		).toBeInTheDocument()
		expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()
		expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
	})

	it('should render platform icons', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
		expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
		expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
	})

	it('should render the formated date', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
	})

	it('should render free rating when FREE', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText(/FREE/i)).toBeInTheDocument()
	})

	it('should render 18+ rating when pegi18', () => {
		renderWithTheme(<GameDetails {...props} rating="pegi18" />)

		expect(screen.getByText(/18\+/i)).toBeInTheDocument()
	})

	it('should render a genre', () => {
		renderWithTheme(<GameDetails {...props} />)

		expect(screen.getByText(/narrative/i)).toBeInTheDocument()
	})
})
