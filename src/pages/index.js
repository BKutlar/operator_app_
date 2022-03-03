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

    return (
        <>
            
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