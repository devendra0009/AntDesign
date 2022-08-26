//Davendra component content to display on web

import React from 'react'
import { Table } from 'antd';
import { useState } from 'react';
import { useFetchData } from '@ant-design/pro-components';
import { useEffect } from 'react';

const Davendra = () => {
    const [dataArr,setDataArr]=useState()
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Link',
          dataIndex: 'link', 
          key: 'link',
        },
      ];

      const fetchData=()=>{
        try {
            fetch('http://localhost:8000/api/dave/')
            .then(res=>res.json())
            .then(res=>{ console.log(res);
                setDataArr(res);
            })
        } catch (error) {
            
        }
      }
      
      useEffect(() => {  
        fetchData();
      }, [])
      
  return (
    <div>
        <Table columns={columns} dataSource={dataArr} />
    </div>
  )
}

export default Davendra