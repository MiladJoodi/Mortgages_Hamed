
interface IContainer {
    children: React.ReactNode
}

const Container = ({children} : IContainer) => {
    return (
        <div className="container max-w-7xl mx-auto">
            {children}
        </div>
    );
}

export default Container;