import React from 'react'
import Tabletop from './Tabletop'
import { orderData } from './data'

function Table() {
    return (
        <div className='bg-white px-3 pt-3 pb-2 rounded-lg grid gap-4'>
            <Tabletop />
            <div className="relative overflow-x-auto text-slate-500">
                <table className="w-full text-sm text-left rtl:text-right bg-gray-200">
                    <thead className="text-xm font-medium rounded uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Order ID
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Transaction ID
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Refund Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-right font-medium">
                                Order Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.map((order) => (
                            <tr key={order.id} className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-slate-8   00 whitespace-nowrap">
                                    #{order.id}
                                </th>
                                <td className="px-6 py-4 flex items-center gap-2 text-gray-600">
                                    {order.status === "Successful" && <div className='h-2.5 w-2.5 rounded-full bg-green-500' />}
                                    {order.status === "Processing" && <div className='h-2.5 w-2.5 rounded-full bg-gray-500' />}
                                    {order.status === "Failed" && <div className='h-2.5 w-2.5 rounded-full bg-red-500' />}
                                    {order.status}
                                </td>
                                <td className="px-6 py-4 text-slate-500">
                                    {order.transactionID}
                                </td>
                                <td className="px-6 py-4 text-slate-500">
                                    {order.refundDate}
                                </td>
                                <td className="px-6 py-4 text-right text-gray-600">
                                    {order.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table