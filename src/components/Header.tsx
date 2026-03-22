import { Link } from "react-router";

export default function Header() {
    return (
        <header className="main-navbar bg-white shadow-sm">
            <div className="mx-auto max-w-2xl p-8 px-4 lg:max-w-7xl lg:px-8 ">
                <nav className="flex items-center justify-between gap-4">
                    <div className="text-xl font-bold cursor-pointer">
                        <Link to="/">MiEcommerce</Link>
                    </div>
                    {/* <div>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="border border-gray-300 px-3 py-1 min-h-15
                            min-w-80
                               rounded-2xl
                            "
                        />
                    </div> */}
                </nav>
            </div>
        </header>
    )
}
