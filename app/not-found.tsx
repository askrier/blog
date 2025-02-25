export default function NotFoundPage() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "48px",
                flexWrap: "wrap-reverse",
                minHeight: "70vh",
            }}
        >
            <h1>404</h1>
            <h2>Page not found</h2>
        </div>
    );
}
