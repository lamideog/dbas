import {React, useState, useEffect} from 'react';
import { Table, Layout, Menu, Pagination, Input, Form, Button, Card } from 'antd';


 

function TableData() {

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      responsive: ['md'],
    },
    {
      title: 'Phone Number',
      dataIndex: 'phonenumber',
      key: 'phonenumber',
      responsive: ['md'],
    },
  ];
   

  const [data, setdata] = useState()
  const [page, setpage] = useState(1)
  const [total, settotal] = useState()
  const [pagesize, setpagesize] = useState(0)
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [email, setemail] = useState('')
  const [number, setnumber] = useState('')
  const [current, setcurrent] = useState(1)
  const [loading, setloading] = useState(true)

  useEffect(()=>{
    fetch(`https://brunches-database.herokuapp.com/?page=${page}&fname=${fname}&lname=${lname}&email=${email}&number=${number}`)
    .then(res => res.json())
    // .then((result)=>{console.log(result)})
    .then((result)=>{
      settotal(result.total)
      setpagesize(result.pageSize)
      setdata(result.data, setloading(false))
    })
    // .then(setloading(false))
  },[page, fname, lname, email, number])

  
  function onChange(page){
    // console.log(page);
    setloading(true)
    setcurrent(page)
    setpage(page)
  }

  const onFinish = (values) => {
    console.log('Success:', values);

    setfname(values.fname)
    setlname(values.lname)
    setemail(values.email)
    setnumber(values.number)
  };

  return ( 
    <>
      <Form onFinish={onFinish} layout='inline' size='small'>
        <div className='d-flex'>
          <div>
            <Form.Item label='First Name' name='fname'>
              <Input />
            </Form.Item>
          </div>
          <div>
            <Form.Item label='Last Name' name='lname'>
              <Input />
            </Form.Item>
          </div>
          <div>
            <Form.Item label='Email' name='email'>
              <Input />
            </Form.Item>
          </div>
          <div>
            <Form.Item label='Number' name='number'>
              <Input />
            </Form.Item>
          </div>
          <div>
            <Form.Item>
              <Button htmlType='submit'>Search</Button>
            </Form.Item>
          </div>
        </div>
      </Form>
      <Card>
        <Table dataSource={data} columns={columns} pagination={false} loading={loading} />
      </Card>
      <br />
      <Pagination
        total={total}
        current={current}
        pageSize={pagesize}
        onChange={onChange}
      />
    </>
  );
}

export default TableData;