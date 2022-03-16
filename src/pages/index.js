import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import SidebarLeft from '../components/SideBarleft/SidebarLeft';
const Home = () => {

    const [isOpen, setIsOpen] = useState(false); 

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const user = JSON.parse(localStorage.getItem('user')) ?? {};
    return (
        <>
            <p>{user.email}</p>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            {/* <InfoSection /> */}
            {/* <Services /> */}
            <SidebarLeft />
            
            <Footer />
        </>
    );
}

export default Home;