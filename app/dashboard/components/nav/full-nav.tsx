import { Nav } from "./nav";
import { SignOutButton } from "./signout";
import { UserNav } from "./user-nav";

export async function FullNav() {
    
    return (
        <Nav>
            <UserNav>
            </UserNav>
        </Nav>
    )
}