import React from 'react'
import {
    IconButton,
    Menu,
    MenuItem,
    Typography,
    ListItemIcon,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import ModeSwitchBtn from './../SwithModeBtn/ModeSwithBtn'

const SmallMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const location = useLocation()
    const currentPath = location.pathname

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const navLinks = [
        { path: '/', label: 'Home', icon: <CottageOutlinedIcon /> },
        {
            path: '/portfolio',
            label: 'Portfolio',
            icon: <DesignServicesOutlinedIcon />,
        },
        {
            path: '/contact',
            label: 'Contact',
            icon: <LocationOnOutlinedIcon />,
        },
    ]

    return (
        <>
            <IconButton
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ color: 'primary.dark' }}
            >
                <MenuIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {navLinks.map((link) => (
                    <MenuItem
                        key={link.path}
                        component={Link}
                        to={link.path}
                        onClick={handleMenuClose}
                        sx={{
                            backgroundColor:
                                currentPath === link.path
                                    ? 'primary.light'
                                    : 'transparent',
                            color:
                                currentPath === link.path
                                    ? 'primary.dark'
                                    : 'inherit',
                            '&:hover': {
                                backgroundColor: 'primary.light',
                                color: 'primary.dark',
                            },
                            transition:
                                'background-color 0.3s ease, color 0.3s ease',
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                color:
                                    currentPath === link.path
                                        ? 'primary.dark'
                                        : 'inherit',
                            }}
                        >
                            {link.icon}
                        </ListItemIcon>
                        <Typography variant="inherit">{link.label}</Typography>
                    </MenuItem>
                ))}

                <MenuItem>
                    <ModeSwitchBtn>
                        <Typography variant="inherit">Change mode</Typography>
                    </ModeSwitchBtn>
                </MenuItem>
            </Menu>
        </>
    )
}

export default SmallMenu
