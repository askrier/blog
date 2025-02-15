export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // Width dimension stolen from Medium
        <div style={{ width: "680px", maxWidth: "100%", margin: "auto" }}>
            {children}
        </div>
    );
}
