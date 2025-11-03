import logo from '../assets/logo.png';
function Header() { return ( <div className="text-start justify-center flex items-center bg-[#202A44] py-1"> <img src={logo} alt="Movie4kU Logo" className="h-[200px] w-[300px]  cursor-pointer" onClick={() => window.location.reload()} /> </div> ); }
export default Header;
