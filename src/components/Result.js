import React from 'react'
import { useSelector } from 'react-redux'
import {Table} from 'antd'
import 'antd/dist/antd.css';
const Result=()=>{

    const repos=useSelector(state=>state.repos.data)
    console.log("REPOS:",repos)
    repos.map((item)=>{
        console.log("ITEM:",item)
    })
    
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Stars',
          dataIndex: 'stargazers_count',
          key: 'stars',
        },
        {
            title: 'Link',
            dataIndex: 'html_url',
            key: 'link',
            render:html_url=>{
                return <a href={html_url} target="_blank">{html_url}</a>
            }
        }
      ];
    
    return (
        <>
        <h1>Result</h1>
        <Table dataSource={repos} columns={columns} />
        </>
    )

}
export default Result