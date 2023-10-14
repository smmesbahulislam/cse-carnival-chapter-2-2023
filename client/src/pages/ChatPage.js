import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios';

const ChatPage = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [selectedIntern, setSelectedIntern] = useState(null);
    const [allIntern, setAllIntern] = useState([]); // [{name: 'Intern 1', id: 1}, {name: 'Intern 2', id: 2}

    const fetchAllIntern = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/intern/all-intern`)
            setAllIntern(res.data.interns)
            // console.log(res.data.interns);
            // res.data.interns.map(())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllIntern();
    }, [])

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer("left", false)}
            onKeyDown={toggleDrawer("left", false)}
        >
            <List>
                {allIntern.map((intern) => (
                    <ListItem key={intern._id} disablePadding>
                        <ListItemButton onClick={() => handleInternClick(intern)}>
                            {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                            <ListItemText primary={intern.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const handleInternClick = (intern) => {
        toggleDrawer(false);
        setSelectedIntern(intern);
        // alert(`Clicked on ${intern.name}`);
    };

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Interns</Button>



            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawerContent}
            </Drawer>
        </div>
    );
};

export default ChatPage;
