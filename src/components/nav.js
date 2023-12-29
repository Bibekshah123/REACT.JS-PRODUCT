import {Link} from 'react-router-dom'
export const Nav=()=>{
    return (
        <header>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Product</Link>

            </nav>
        </header>
    )
}