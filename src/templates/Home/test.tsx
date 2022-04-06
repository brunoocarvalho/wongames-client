import '../../../.jest/match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
	banners: bannersMock,
	newGames: [gamesMock[0]],
	mostPopularHighlight: highlightMock,
	mostPopularGames: [gamesMock[0]],
	upcommingGames: [gamesMock[0]],
	upcommingHighligth: highlightMock,
	upcommingMoreGames: [gamesMock[0]],
	freeGames: [gamesMock[0]],
	freeHighligth: highlightMock
}

jest.mock('components/Showcase', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock Showcase"></div>
		}
	}
})

jest.mock('components/BannerSlider', () => {
	return {
		__esModule: true,
		default: function Mock() {
			return <div data-testid="Mock BannerSlider"></div>
		}
	}
})

describe('<Home />', () => {
	it('should render full home', () => {
		renderWithTheme(<Home {...props} />)

		expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
		expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
	})
})
