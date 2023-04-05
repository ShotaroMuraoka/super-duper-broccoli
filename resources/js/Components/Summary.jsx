export default function Summary() {
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        2022-04-01
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Payment for rent
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $1,000.00
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        2022-04-05
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Grocery shopping
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $100.00
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        2022-04-15
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Salary
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $2,500.00
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
};
