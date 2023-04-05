import React, { useState } from 'react'
import { router } from '@inertiajs/react'

export default function ShoppingList ({ items }) {
    const [newItem, setNewItem] = useState('')
    const addItem = (e) => {
        e.preventDefault()
        if (!newItem) return
        router.post('/items', { name: newItem })
        setNewItem('')
    }

    const toggleItemCompletion = index => {
        const itemId = items[index].id
        const newStatus = !items[index].completed
        router.patch(`/items/${itemId}`, { completed: newStatus })
    }

    const deleteItem = index => {
        const itemId = items[index].id
        router.delete(`/items/${itemId}`)
    }

    return (
            <div>
                <form onSubmit={addItem}>
                    <input
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="Enter a new item"
                    />
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5"
                             fill="currentColor"
                             viewBox="0 0 612.074 612.074"
                             xmlns="http://www.w3.org/1999/xlink"
                             xmlSpace="preserve"
                        >
                            <path fillRule="evenodd"
                                  d="M306.037,0C136.997,0,0,136.997,0,306.037s136.997,306.037,306.037,306.037s306.037-136.997,306.037-306.037 S475.077,0,306.037,0z M306.037,582.405c-153.019,0-276.368-124.165-276.368-276.368S153.834,29.669,306.037,29.669 s276.368,124.165,276.368,276.368S458.24,582.405,306.037,582.405z M440.587,310.042c0,8.011-6.379,14.39-14.39,14.39h-105.77 v104.955c0,8.011-6.379,14.39-14.39,14.39c-8.011,0-14.39-6.379-14.39-14.39V324.432h-105.77c-8.011,0-14.39-6.379-14.39-14.39 c0-8.011,6.379-14.39,14.39-14.39h104.955v-105.77c0-8.011,6.379-14.39,14.39-14.39c8.011,0,14.39,6.379,14.39,14.39v104.955 h104.955C434.208,294.837,440.587,302.032,440.587,310.042z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </form>
                <ul className="max-w-xl text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {items.map((item, index) => (
                        <li key={index}
                            className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input
                                    id={index}
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={() => toggleItemCompletion(index)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor={index}
                                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {item.name}
                                </label>
                                <button
                                    onClick={() => deleteItem(index)}
                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    )
}
