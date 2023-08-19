import { ethers } from 'ethers'

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <div className='nav__brand'>
                <h1>W3-Store</h1>
            </div>

            <input
                type="text"
                className="nav__search"
            />

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}

            <ul className='nav__links'>
                <li><a href="#Clothing & Jewelry">Clothing</a></li>
                <li><a href="#Clothing & Jewelry">Accessories</a></li>
                <li><a href="#Electronics & Gadgets">Electronics</a></li>
                <li><a href="#Electronics & Gadgets">Gadgets</a></li>
                <li><a href="#Toys & Gaming">Toys</a></li>
                <li><a href="#Toys & Gaming">Gaming</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;