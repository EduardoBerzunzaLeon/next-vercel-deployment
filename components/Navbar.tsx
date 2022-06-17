import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css'

interface MenuItemsProps {
    text: string,
    href: string
}

const menuItems: MenuItemsProps[] = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];


export const Navbar = () => (
    <nav className={styles['menu-container']}>
        {
            menuItems.map(({ text, href }) => (
                <ActiveLink key={ href } text={ text } href={ href }/>
            ))
        }
    </nav>
)

export default Navbar