export default function Header() {
    return (
        <header className="Header">
            <img src="/src/images/reactlogo.png" className="nav-logo" alt="reactlogo" width="300" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}