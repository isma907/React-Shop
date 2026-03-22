import Header from "../components/Header"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {children}
            </div>
        </>
    )
}
