import globus from '../../../public/assets/pngegg.png';

function Header() {
    return (
        <div className="header">
            <img src={globus} alt="icon of the earth" width="128px"/>
            <h1>Clouds Journey Log</h1>
        </div>
    );
}

export default Header;