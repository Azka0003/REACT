export default function NavBar(){
    return (
        <header>
            <nav>
                <img src="/src/images/reactlogo.png" alt="ReactLogo" width="40px" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}

// Rule of thumb for React:
// Inside src/ → must use import (relative path, not starting from src/).
// Inside public/ → use string path starting with /, not src/.