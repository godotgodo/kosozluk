import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import data from '../../data.json';
import { NavLink } from 'react-router-dom';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const bugun=data.bugun;
    const isilanlari=data.isilani;
    const duyurular=data.duyurular;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="w-full lg:hidden">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Bugün" {...a11yProps(0)} />
                    <Tab label="Duyurular" {...a11yProps(1)} />
                    <Tab label="İş ilanları" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ul className='ml-4'>
                    {bugun.map(baslik =>
                        <li key={baslik.baslikid} className="my-4">
                            <NavLink to={`baslik/${baslik.baslikid}`} className="text-darklighttext">
                            {baslik.baslikname} 5
                            </NavLink>
                            </li>
                    )}
                </ul>

            </TabPanel>
            <TabPanel value={value} index={1}>

                <ul className='ml-4'>
                    {
                        duyurular.map(duyuru =>
                            <li className='text-gray-300 font-medium my-4' key={duyuru.duyuruid}>
                                <NavLink to={`duyurular/${duyuru.duyuruid}`}>
                                    !{duyuru.duyuruname}
                                </NavLink>

                            </li>
                        )
                    }
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ul className='ml-4'>
                    {
                        isilanlari.map(isilani =>
                            <li className='text-gray-300 font-medium my-4' key={isilani.isilanid}>
                                <NavLink to={`isilanlari/${isilani.isilanid}`}>
                 >{isilani.isilaniname}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </TabPanel>
        </div>
    );
}
