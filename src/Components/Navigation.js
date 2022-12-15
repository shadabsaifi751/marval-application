import React, { useState, useRef, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import marval from "../Accects/Logo.svg"
import "../App.css"
import OutsideClickHandler from 'react-outside-click-handler';

const Navigation = () => {
    const outClickRef = useRef(null)
    const [navState, setNavState] = useState( false);
    const [scroll, setScroll] = useState(false);
    const navigate = useNavigate()
    const AuthToken = localStorage.getItem('token')

    const [windowWidth, setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function () {
        setWidth(this.innerWidth);
    });

    useEffect(() => {
        function handleClickOutside(event) {
            if (navState && outClickRef.current && !outClickRef.current.contains(event.target)) {
                setNavState(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [navState])


    // console.log(AuthToken, "line37")
    const handlelogin = () => {
        navigate('/login')
        setNavState(false);
        location.reload()
    }
    const signOut = () => {
        localStorage.removeItem('token')
        navigate('/')
        setNavState(false);
        location.reload()
    }



    return (
        <>
            <nav className={`z-20 w-full fixed top-0 left-0 transition duration-150 ease-in-out ${navState ? 'navopen' : 'navclosed'} ${scroll ? "backdropcolor" : "raised"}`}>
                <div className="max-w-screen-xl px-4 sm:px-8 py-2 sm:py-2 m-auto flex justify-between">
                    <div className="logo">
                        <Link to="/" className="p-0">
                            <img src={marval} className="img-fluid" alt="" />
                        </Link>
                    </div>
                    <div className={`flex items-center ${navState ? 'overlay' : ''}`}>
                        <ul ref={outClickRef}>
                            {(windowWidth > 992) ? (
                                <>
                                    {
                                        AuthToken ? (
                                            <>
                                                <li>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/movies">Movies</Link>
                                                </li>
                                                <li>
                                                    <Link to="/series">Series</Link>
                                                </li>
                                                <li>
                                                    <Link to="/hollywood">Hollywood</Link>
                                                </li>
                                                <li>
                                                    <Link to="/bollywood">Latest trailor</Link>
                                                </li>
                                            </>
                                        ) : ""
                                    }
                                    {
                                        !AuthToken ? (
                                            <button className="border border-solid border-white text-white py-2 px-5 rounded-lg" onClick={handlelogin}>Login</button>
                                        ) : (
                                            <button className="border border-solid border-white text-white py-2 px-5 rounded-lg" onClick={signOut}>Logout</button>
                                        )
                                    }
                                </>
                            ) :
                                ""
                            }
                            {(windowWidth < 992) ? (
                                <>
                                    {
                                        AuthToken ? (
                                            <>
                                                <li>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/movies">Movies</Link>
                                                </li>
                                                <li>
                                                    <Link to="/series">Series</Link>
                                                </li>
                                                <li>
                                                    <Link to="/hollywood">Hollywood</Link>
                                                </li>
                                                <li>
                                                    <Link to="/bollywood">Bollywood</Link>
                                                </li>
                                            </>) : ""}
                                    {
                                        !AuthToken ? (
                                            <button className="border border-solid border-white text-white py-2 px-5 rounded-lg mt-5" onClick={handlelogin}>Login</button>
                                        ) : (
                                            <button className="border border-solid border-white text-white py-2 px-5 rounded-lg mt-5" onClick={signOut}>Logout</button>
                                        )
                                    }
                                </>
                            ) :
                                ""
                            }
                        </ul>
                    </div>
                    <div ref={outClickRef} className="phone-menu " onClick={() => setNavState(!navState)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* <button className='py-2 px-2 backdrop-blur bg-red-200 text-red-50 rounded'>scroll top</button> */}
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation