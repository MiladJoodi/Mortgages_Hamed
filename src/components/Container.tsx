
interface IContainer {
    children: React.ReactNode
}

const Container = ({children} : IContainer) => {
    return (
        <div className="container max-w-7xl mx-auto bg-white dark:bg-gray-300 rounded-xl shadow-sm flex flex-col gap-4">
            {children}
        </div>
    );
}

export default Container;