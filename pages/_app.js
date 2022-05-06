/* pages/_app.js */
import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <h1>NFT Marketplace</h1>
        <div>
          <Link href='/'>
          <a className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
          </Link>
          <Link href='/create-nft'>
            <a>Sell NFT</a>
          </Link>
          <Link href='/my-nfts'>
            <a>My NFTs</a>
          </Link>
          <Link href='/dashboard'>
            <a>Dashboard</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
