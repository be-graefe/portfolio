'use client'

const titles: Record<string, string> = {
    '/': 'B. E. Graefe',
    '/about': 'About Me',
    '/gallery': 'Gallery',
}

export default function Header() {
    return (
        <header className={"leather-dark seam-b stitch-b h-16"}>
            <div className={"container mx-auto h-full flex items-center justify-between pb-2"}>
                <h1>{titles[window.location.pathname] || 'Default Title'}</h1>
            </div>
            <nav>

            </nav>
        </header>
    )
}