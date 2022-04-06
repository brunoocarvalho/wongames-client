import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
	title: 'GameCard',
	component: GameCard,
	args: {
		title: 'GTA V',
		developer: 'Rockstar Games',
		img: 'https://compass-ssl.xbox.com/assets/a0/4f/a04f2744-74d9-4668-8263-e0261fbea869.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg',
		price: 'R$ 90,00'
	},
	argTypes: {
		onType: {
			onFav: {
				action: 'clicked'
			},
			ribbon: {
				type: 'string'
			}
		}
	}
} as Meta

export const Basic: Story<GameCardProps> = (args) => (
	<div style={{ width: '30rem', margin: '0 auto' }}>
		<GameCard {...args} />
	</div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
	<div style={{ width: '30rem', margin: '0 auto' }}>
		<GameCard {...args} />
	</div>
)

WithRibbon.args = {
	ribbon: '20% OFF',
	ribbonSize: 'small',
	ribbonColor: 'primary'
}
