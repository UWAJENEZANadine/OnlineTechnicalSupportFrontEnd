import React from 'react'
import "../css/Footer.css";
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <div className='Footer grid grid-cols-3'>
            <div>
                <a href=''>
                    <MailIcon className='border-solid border-2 border-[#ad01b0;] rounded-full'/> Email
                </a>
            </div>
            <div>
                <a href=''>
                    <ChatIcon className='border-solid border-2 border-[#ad01b0;] rounded-full'/> Chat support

                </a>
            </div>
            <div className='space-x-3'>
                <TwitterIcon className='text-blue-600 '/>
                <FacebookIcon className='text-blue-500'/>
                <InstagramIcon className='text-red-400'/>
                <LinkedInIcon className='text-blue-700'/>


            </div>
           
        </div>
    )
}
export default Footer;
