

const Navbar = ({ title, icon }) => {
    return (
        <div className='navbar bg-primary'>
            <div className='container'>
            <h1>
                <i className={icon} /> {title}
            </h1>
            </div>
        </div>
    );
}

Navbar.defaultProps = {
    title: 'Parking slot booking system',
    icon: 'fa-solid fa-square-parking'
}

export default Navbar;