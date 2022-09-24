import Header from '~/Components/Component/Header/Header';
import SideBar from '~/Components/Component/SideBar/SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
