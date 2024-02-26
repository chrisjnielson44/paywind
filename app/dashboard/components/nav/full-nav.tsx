import { Nav } from "./nav";
import { UserNav } from "./user-nav";

export async function FullNav() {
    
    return (
        <Nav>
            <UserNav>
            </UserNav>
        </Nav>
    )
}