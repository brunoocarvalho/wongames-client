import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailsProps } from '.'

export default {
	title: 'GameDetails',
	component: GameDetails,
	parameters: {
		backgrounds: {
			default: 'won-dark'
		}
	},
	args: {
		platforms: ['windows', 'mac', 'linux']
	},
	argTypes: {
		platforms: {
			control: {
				type: 'inline-check',
				options: ['windows', 'mac', 'linux']
			}
		}
	}
} as Meta

export const Basic: Story<GameDetailsProps> = (args) => (
	<div>
		<GameDetails {...args} />
	</div>
)
