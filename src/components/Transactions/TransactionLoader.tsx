
export default function TransactionLoader(): JSX.Element {
    return (
        <div className="p-2">
            <div className="animate-pulse flex gap-8  mb-4">
                <div>
                    <div className='rounded-full w-16 h-16 bg-secondary'></div>
                </div>
                <div className="w-full mt-2">
                    <div className="bg-secondary h-2 w-full rounded mb-2"></div>
                    <div className="bg-secondary h-2 w-full rounded mb-2"></div>
                    <div className="bg-secondary h-2 w-full rounded mb-2"></div>
                    <div className="bg-secondary h-2 w-full rounded mb-2"></div>
                </div>
            </div>
        </div>

    )
}
