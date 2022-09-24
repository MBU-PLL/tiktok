import Header from '~/Components/Component/Header/Header';
function UploadLayout({ children }) {
    return (
        <div>
            <Header />
            <h2>upload layout</h2>
            {children}
        </div>
    );
}

export default UploadLayout;
