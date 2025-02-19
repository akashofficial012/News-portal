import Image from "next/image"
import { Link2 } from "lucide-react"

export default function NewsDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 ">
        {/* Total News Card */}
        <div className="bg-white rounded-lg shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] p-6 ">
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold">50</div>
            <div className="text-sm text-gray-500">Total News</div>
          </div>
        </div>

        {/* Pending News Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold">50</div>
            <div className="text-sm text-gray-500">Pending News</div>
          </div>
        </div>

        {/* Active News Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold">50</div>
            <div className="text-sm text-gray-500">Active News</div>
          </div>
        </div>

        {/* Deactive News Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold">50</div>
            <div className="text-sm text-gray-500">Deactive news</div>
          </div>
        </div>

        {/* Writers Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-bold">50</div>
            <div className="text-sm text-gray-500">Writers</div>
          </div>
        </div>
      </div>

      {/* Recent News Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Recent News</h2>
          <button className="text-sm text-blue-600 hover:underline">View all</button>
        </div>

        <div className="bg-white border rounded-lg overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">NO</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TITLE
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  IMAGE
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CATEGORY
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DESCRIPTION
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
                <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ACTIVE
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3, 4].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 max-w-[200px] truncate">
                    India gets its longest glass b...
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-19%20183026-LOtLiwd0J8wOabkWXnzFIdY9Xjn28M.png"
                      alt="News thumbnail"
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Travel</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-[200px] truncate">
                    You all must have wa...
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">October 10, 2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="p-2 hover:bg-gray-100 rounded-md">
                      <Link2 className="h-4 w-4 text-green-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

