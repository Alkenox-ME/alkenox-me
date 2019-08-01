import * as React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { nox } from './theme/NoxTheme';
import { List, Item, P } from './atoms/text';
import { Box } from './atoms/grid';
import navbg from '../static/images/bg-nav2.png';
import mark from '../static/images/logo-mark-icon.svg';

type LayoutProps = {
    children?: any;
    title?: string;
};

const Navbar: React.FC<LayoutProps> = () => {
    const NavLink = styled(Link)`
        color: ${nox.main.color.fg.text};
        transition: all 1s ease-in-out;
        :hover {
            color: ${nox.main.color.solid.black};
            transition: all 0.5s ease-in-out;
        }
    `;

    return (
        <Box zindex={1000} bg={'rgba(0,0,0,1)'} height={'8vh'} position={'fixed'} top={'0'}>
            <List p={'0'} m={'0'} style={{ listStyle: 'none', display: 'flex' }}>
                <img src={mark} alt={'alkenox-me'} width={'4%'} height={'4%'} />
                <P p={'0'} m={'0 12vw 0 0'}>
                    alkenox-me
                </P>
                <Item p={'0'} m={'0'}>
                    <P p={'0'} m={'0'}>
                        <NavLink to={'/'}>Home</NavLink>
                    </P>
                </Item>
                <Item p={'0'} m={'0'} title={'Our Branding Service'}>
                    <NavLink to={'/branding-service'}>Branding</NavLink>
                </Item>
                <Item p={'0'} m={'0'} title={'Content Creation'}>
                    <NavLink to={'/content-creation'}>Content</NavLink>
                </Item>
                <Item p={'0'} m={'0'}>
                    <NavLink to={'/about-us'}>About</NavLink>
                </Item>
                <Item p={'0'} m={'0'}>
                    <NavLink to={'/contact-us'}>Contact</NavLink>
                </Item>
            </List>
        </Box>
    );
};

export default Navbar;
