import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FigmaIcon from '../../../img/icons/FigmaIcon'

const SocialLinks = () => {
    return (
        <>
            <style>{`
                .social-link-figma:hover circle {
                    fill: var(--color-primary-main) !important;
                }
                .social-link-figma:hover path {
                    fill: var(--color-background-default) !important;
                }
                .social-link-icon:hover {
                    color: var(--color-primary-main) !important;
                }
            `}</style>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3rem',
            }}>
                <a
                    href="https://www.figma.com/files/project/45598373"
                    className="btn social-link-figma"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <FigmaIcon
                        iconStyle={{
                            fill: 'var(--color-background-default)',
                        }}
                        style={{
                            color: 'var(--color-primary-dark)',
                            fontSize: '2.75rem',
                            transition: 'color 0.3s ease',
                        }}
                    />
                </a>

                <a
                    href="www.linkedin.com/in/kseniia-voitikh"
                    className="btn social-link-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <LinkedInIcon
                        style={{
                            color: 'var(--color-primary-dark)',
                            fontSize: '3rem',
                            transition: 'color 0.3s ease',
                        }}
                    />
                </a>

                <a
                    href="https://github.com/Ksy-Ksy-V"
                    className="btn social-link-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <GitHubIcon
                        style={{
                            color: 'var(--color-primary-dark)',
                            fontSize: '3rem',
                            transition: 'color 0.3s ease',
                        }}
                    />
                </a>
            </div>
        </>
    )
}

export default SocialLinks
