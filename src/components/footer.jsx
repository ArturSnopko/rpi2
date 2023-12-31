import React from 'react';
import '../styles/footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className= 'AllDevs'>
            <div className= 'Devs'>
                <div className = 'Developer'>
                    <img src="/images/cat3.jpg" alt=":(" className = 'DevImg'/>
                    <div className= 'DevInfo'>
                        {t('Artur')}
                        <a href="https://github.com/ArturSnopko" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon style={{ fontSize: '4.5vw', color: 'white', backgroundColor: '#01050a', borderRadius: '100vw' }} />
                        </a>
                    </div>

                </div>

                <div className = 'Developer'>
                    <img src="/images/cat.webp" alt=":(" className = 'DevImg'/>
                    <div className= 'DevInfo'>
                        {t('Dmitriy')}
                        <a href="https://github.com/minduction"target="_blank" rel="noopener noreferrer">
                            <GitHubIcon style={{ fontSize: '4.5vw', color: 'white', backgroundColor: '#01050a', borderRadius: '100vw' }} />
                        </a>
                    </div>
               </div>
            </div>
            <div className = 'Developer' style = {{alignSelf:"center"}}>
                <img src="/images/cat2.jpeg" alt=":(" className = 'DevImg'/>
                <div className= 'DevInfo'>
                    {t('Stanislav')}
                    <a href="https://github.com/Tivistius" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon style={{ fontSize: '4.5vw', color: 'white', backgroundColor: '#01050a', borderRadius: '100vw' }} />
                    </a>
                </div>

            </div>
        </div>

    );
};

export default Footer;