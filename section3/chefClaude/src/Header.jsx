import chefClaude from "../../images/chef-claude-icon.png";

export default function Header()
{
    return(
        <header>
            {/* <img src="/src/Section3/images/chef-claude-icon.png" alt="chef-claude-icon" /> */}
            <img src={chefClaude} alt="chef-claude-icon" />
            <h1>Chef Claude</h1>
        </header>
    );

}

