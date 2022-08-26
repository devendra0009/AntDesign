//Davendra component content to display on web

import React from 'react'
import { Table } from 'antd';
import { useState } from 'react';
import { useFetchData } from '@ant-design/pro-components';
import { useEffect } from 'react';

const Davendra = () => {
    const [dataArr,setDataArr]=useState()
    
    //columns made
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

      //fetching data using mock api hosted at local host 8000
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
      
      //everytime this component is rendered this will runs initially
      useEffect(() => {  
        fetchData();
      }, [])
      
  return (
    <div>
        //displaying table 
        <Table columns={columns} dataSource={dataArr} />
    </div>
  )
}

export default Davendra
