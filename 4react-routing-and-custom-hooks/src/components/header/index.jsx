export default function Header() {
    return (
        <header>
            <div>
                Home Page
            </div>
            <ul style={{ display: "flex", gap: "20px", lifeStyle: "none" }}>
                <li>Recipes</li>
                <li>Comments</li>
            </ul>
        </header>
    )
}

// now nest we create the layout page