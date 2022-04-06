import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined'
import { Search as SearchIcon } from '@styled-icons/material-outlined'
import { Close as CloseIcon } from '@styled-icons/material-outlined'

import * as S from './styles'

import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'

export type MenuProps = {
	username?: string
}

const Menu = ({ username }: MenuProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<S.Wrapper>
			<MediaMatch lessThan="medium">
				<S.IconWrapper onClick={() => setIsOpen(true)}>
					<MenuIcon aria-label="open menu" />
				</S.IconWrapper>
			</MediaMatch>

			<S.LogoWrapper>
				<Logo hideOnMobile />
			</S.LogoWrapper>

			<MediaMatch greaterThan="medium">
				<S.MenuNav>
					<S.MenuLink href="#">Home</S.MenuLink>
					<S.MenuLink href="#">Explore</S.MenuLink>
				</S.MenuNav>
			</MediaMatch>

			<S.MenuGroup>
				<S.IconWrapper>
					<SearchIcon aria-label="search" />
				</S.IconWrapper>
				<S.IconWrapper>
					<ShoppingCartIcon aria-label="open shopping cart" />
				</S.IconWrapper>
				{!username && (
					<MediaMatch greaterThan="medium">
						<Link href="/sign-in" passHref>
							<Button as="a">Sign in</Button>
						</Link>
					</MediaMatch>
				)}
			</S.MenuGroup>

			<S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
				<CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
				<S.MenuNav>
					<S.MenuLink href="#">Home</S.MenuLink>
					<S.MenuLink href="#">Explore</S.MenuLink>
					{!!username && (
						<>
							<S.MenuLink href="#">My account</S.MenuLink>
							<S.MenuLink href="#">Wishlist</S.MenuLink>
						</>
					)}
				</S.MenuNav>
				{!username && (
					<S.RegisterBox>
						<Link href="/sign-in" passHref>
							<Button fullWidth size="large">
								Sign in now
							</Button>
						</Link>
						<span>or</span>
						<Link href="/sign-up" passHref>
							<S.CreateAccount title="Sign up">Sign Up</S.CreateAccount>
						</Link>
					</S.RegisterBox>
				)}
			</S.MenuFull>
		</S.Wrapper>
	)
}

export default Menu
