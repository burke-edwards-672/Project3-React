//Used on homepage to contain the buttons in the main section.

export default function Panel({children, className}) {
    return (
        <div className="container text-center">
            <div className={className}>
                {children}
            </div>
        </div>
    )
}