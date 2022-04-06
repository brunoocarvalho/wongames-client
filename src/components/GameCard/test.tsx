import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
	title: 'GTA V',
	developer: 'Rockstar Games',
	img: 'https://compass-ssl.xbox.com/assets/a0/4f/a04f2744-74d9-4668-8263-e0261fbea869.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg',
	price: 'R$ 90,00'
}

describe('<GameCard />', () => {
	it('shoudl to render correctly', () => {
		renderWithTheme(<GameCard {...props} />)

		expect(
			screen.getByRole('heading', { name: props.title })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: props.developer })
		).toBeInTheDocument()
		expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
			'src',
			props.img
		)
		expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
	})

	it('should render price in label', () => {
		renderWithTheme(<GameCard {...props} />)

		expect(screen.getByText(props.price)).not.toHaveStyle({
			textDecoration: 'line-through',
			color: '#8F8F8F'
		})

		expect(screen.getByText(props.price)).toHaveStyle({
			backgroundColor: '#3CD3C1'
		})
	})

	it('should render price with promotional price', () => {
		renderWithTheme(<GameCard {...props} promotionalPrice="R$ 60,00" />)

		expect(screen.getByText('R$ 90,00')).toHaveStyle({
			textDecoration: 'line-through'
		})

		expect(screen.getByText('R$ 60,00')).not.toHaveStyle({
			textDecoration: 'line-through'
		})
	})

	it('should render a filled favorite icon when favorite is true', () => {
		renderWithTheme(<GameCard {...props} favorite />)

		expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
	})

	it('should call onFav when favorite is clicked', () => {
		const onFav = jest.fn()
		renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

		fireEvent.click(screen.getAllByRole('button')[0])

		expect(onFav).toBeCalled()
	})

	it('should render Ribbon', () => {
		renderWithTheme(
			<GameCard
				{...props}
				ribbon="My Ribbon"
				ribbonColor="secondary"
				ribbonSize="small"
			/>
		)

		const ribbon = screen.getByText(/my ribbon/i)

		expect(ribbon).toHaveStyle({
			backgroundColor: '#3CD3C1',
			height: '2.6rem',
			fontSize: '1.2rem'
		})
		expect(ribbon).toBeInTheDocument()
	})
})
