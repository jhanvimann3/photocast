import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = ({showSidebar, toggle}) => {
    return (
        <div className={showSidebar? 'sidebar open' : 'sidebar'}>
            <div className='proper'>
                <button>Change Units of Measurement</button>
                <button>Accesability Setting</button>
                <button>Change Units of Measurement</button>
            </div>
            <button id="close" onClick={toggle}/>
        </div>
    )
}

export default Sidebar
