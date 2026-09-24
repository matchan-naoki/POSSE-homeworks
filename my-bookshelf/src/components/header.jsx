function Header() {
    return (
    <header className="flex justify-between bg-green-500">
        <h1 className="font-bold text-2xl text-center text-amber-400 m-2">My bookshelf</h1>
        <nav className="p-2 flex gap-2">
            <a href="/">ホーム</a>
            <a href="/">本について</a>
            <a href="/">サイト</a>
        </nav>
    </header>
    );
}

export default Header;