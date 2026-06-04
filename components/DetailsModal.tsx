"use client";

interface DetailsModalProps {
    isOpen: boolean;
    title: string;
    details: Record<string, string | number>;
    onClose: () => void;
}

export default function DetailsModal({
    isOpen,
    title,
    details,
    onClose,
}: DetailsModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                    >
                        ×
                    </button>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(details).map(([key, value]) => (
                            <div key={key} className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">
                                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                                </p>
                                <p className="text-lg font-semibold text-gray-900">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
