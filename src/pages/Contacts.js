const Contacts = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Contacts</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Russia</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+79999999999">+7 (999) 999 99 99</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:user@user.com">user@user.com</a></p>
                        </li>
                        {/* <li className="content-list__item">
                            <h2 className="title-2">XXXXXX</h2>
                            <p>XXXXXX</p>
                        </li> */}
                    </ul>

                </div>
            </main>
        </>
    );
}

export default Contacts;