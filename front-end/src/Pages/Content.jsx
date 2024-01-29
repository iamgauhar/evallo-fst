import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { orderPlaceApi } from '../../utils/ApiUrls'
import Cookies from 'js-cookie'
const Content = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [isMsg, setIsMsg] = useState(false)
    const [msg, setMsg] = useState("")
    const [fileContent, setFileContent] = useState([])

    const handleFiles = (e) => {
        const files = e.target.files;

        setFileContent(files);
    };

    const navigate = useNavigate()

    const placeContent = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", desc)
        formData.append("files", fileContent[0])

        const token = JSON.parse(Cookies.get()?.token)
        console.log(token)

        try {
            const doOrder = await fetch(orderPlaceApi, {
                // mode: 'no-cors',
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                body: formData
            })
            const response = await doOrder.json()
            console.log(response)
            if (response.status) {
                setIsMsg(true)
                setMsg(response.response)
                setTimeout(() => {
                    setIsMsg(false)
                    // navigate("/order")
                }, 3000);

            }
        } catch (error) {
            setMsg(error.message)
            setIsMsg(true)
        }
    }
    return (
        <div>
            <div className='h-screen flex justify-center items-center flex-col'>
                <div className="w-1/2 rounded-2xl bg-slate-100 mb-4">
                    <div className="flex flex-col gap-2 p-8">
                        <p className="text-center text-3xl text-gray-900 mb-4">ADD CONTENT NOW</p>

                        <div className="flex items-center justify-center w-full">
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" onChange={handleFiles} />
                            </label>
                        </div>

                        <input onChange={(e) => setTitle(e.target.value)} className="bg-slate-100 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-300" type='text' placeholder="Title" />
                        <textarea onChange={(e) => setDesc(e.target.value)} className="bg-slate-100 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-300" type='text' placeholder="Description" />
                        <button onClick={placeContent} className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Upload Content</button>

                    </div>
                    {
                        isMsg ? <p className='bg-green-400 px-2 text-white'>{msg}</p> : ""
                    }
                </div>
                <div className="w-80 rounded-2xl bg-slate-100">

                    <Link to="/content-list"><button className=" w-full inline-block cursor-pointer rounded-md bg-gray-500 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">All Content</button></Link>

                </div>



            </div>
        </div>
    )
}

export default Content