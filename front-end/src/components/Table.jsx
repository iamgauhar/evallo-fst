import React from 'react'

const Table = ({ allContent }) => {
    
    return (
        <div className=''>
            <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        {/* <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th> */}
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Content</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Title</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allContent?.map((el) => {
                                            return <tr key={el._id} class="odd:bg-white even:bg-gray-100">

                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                   <div className='w-52 h-28'>
                                                   <img className='w-full h-full object-cover' src={el.contentUrl} alt="" />
                                                   </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{el.title}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{el.description}</td>

                                            </tr>
                                        })
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table