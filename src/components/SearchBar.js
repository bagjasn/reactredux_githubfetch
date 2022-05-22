import React,{useState} from 'react'
import Axios from 'axios'
import { useDispatch,useSelector} from 'react-redux'
import {getRepos} from '../redux/repos'
import 'antd/dist/antd.css';
import { UserOutlined,SearchOutlined } from '@ant-design/icons';
import { Row, Col ,Input,Button,Tooltip} from 'antd';    
const SearchBar=()=>{
    const dispatch=useDispatch()
    const [searchInput,setSearchInput]=useState('')

    function handleChange(e){setSearchInput(e.target.value)}
    
    async function handleClick(val){
        const result=await Axios.get(`https://api.github.com/users/${val}/repos`)
        dispatch(getRepos(result.data)) 
    }
    const onSearch = value =>{
        handleClick(value)
    }

const {Search}=Input  
  
    return (
        <div style={{padding:"20px"}}>
            <Row>
                <Col span={5} offset={10}>
                <Search prefix={<UserOutlined />} placeholder="Username" enterButton  onSearch={onSearch} />
                </Col>
        
            </Row>
     
        </div>
    )
}
export default SearchBar