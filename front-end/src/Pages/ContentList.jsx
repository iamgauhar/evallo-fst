import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Table from '../components/Table'
import { orderListApi } from '../../utils/ApiUrls'
import Cookies from 'js-cookie'

const ContentList = () => {
    const [content, setContent] = useState([])
    const getAllContents = async () => {

        try {
            const contentList = await fetch(orderListApi, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${JSON.parse(Cookies.get()?.token)}`,
                    "Content-Type": "application/json",
                },
            })
            const response = await contentList.json()
            if (response.status) {
                // console.log(response)
               setContent(response.contents)

            }
        } catch (error) {
            setMsg(error.message)
            setIsMsg(true)
        }
    }

    useEffect(() => {
        getAllContents()
    }, [])
    return (
        <div >
            <div className='w-3/5 m-auto bg-slate-200 p-2 rounded-md my-4'>
                <Table allContent={content} />
            </div>
        </div>
    )
}

export default ContentList