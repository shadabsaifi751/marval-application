import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const style = {
    footer: `flex flex-wrap  gap-4 justify-center lg:justify-between items-center py-2 bg-slate-800`
}

const Footer = () => {
    const [scrolltop,setScrollTop] = useState(false)

    window.addEventListener('scroll', () => {
        setScrollTop(window.scrollY === 0)
     });
    return (
        <footer className={style.footer}>
            <div className="container mx-auto xl:px-4">
                <div className={style.footer }>
                <p className=" lg:mb-0">Marvel ©2022 MARVEL</p>
                
                <div className="flex gap-5 items-center text-white">
                    <Link to="#" className="font-normal text-sm">Term of Services</Link>
                    <Link to="#" className="font-normal text-sm">Privacy Policy</Link>
                </div>
                
                </div>
            </div>
        </footer>
    )
}

export default Footer