import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links =<>
        <li><NavLink to="/" className='hover:text-[#17BE0A] text-lg font-semibold'>Home</NavLink></li>
        <li><NavLink to ="/listed-books" className='text-lg font-semibold'>Listed Books</NavLink></li>
        <li><NavLink to="/pages-to-read" className='text-lg font-semibold'>Pages To Read</NavLink></li>
        <li><NavLink to="/recommendation" className='text-lg font-semibold'>Recommendation</NavLink></li>
        <li><NavLink to="/challenges" className='text-lg font-semibold'>Challenges</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar mt-6 md:mt-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                            <a className="btn btn-primary bg-[#23BE0A] rounded-lg border-0 text-white mt-3 h-fit">Sign In</a>
                            <a className="btn btn-primary bg-[#59C6D2] rounded-lg border-0 text-white mt-3">Sign Up</a>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold text-[#131313]">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end md:flex md:flex-row gap-3 hidden">
                    <a className="btn btn-primary bg-[#23BE0A] rounded-lg border-0 text-white">Sign In</a>
                    <a className="btn btn-primary bg-[#59C6D2] rounded-lg border-0 text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;