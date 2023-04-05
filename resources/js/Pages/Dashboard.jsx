import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import ShoppingList from '@/Pages/ShoppingList/ShoppingList'

export default function Dashboard ({ auth, items }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">買い物リスト</h2>}
        >
            <Head title="Dashboard"/>
            <div className="flex-1 px-4 py-2">
                <ShoppingList
                    items={items}
                />
            </div>
        </AuthenticatedLayout>
    )
}
