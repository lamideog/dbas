import { useState} from "react";
import { Card, Form, Input, Button, message } from "antd";

function Entry() {

	const success = () => {
		message.success('Successful');
	};
	
	const error = () => {
		message.error('Error');
	};
	

	const [loading, setloading] = useState(false)

	const onFinish = (values) => {
    console.log(values);

    setloading(true)

    const options = {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		}

		fetch('https://brunches-database.herokuapp.com/', options)
			.then(res=>{
				if(res.status === 200){
					// setloading(false)
					success()
				}else{
					error()
				}
				setloading(false)
			})
  };

	return ( 
		<div className="d-flex justify-content-center align-items-center" style={{height:'85vh', width:'100%'}}>
			<div className="row d-flex justify-content-center">
				<div className="col-md-6 col-12 d-flex">
					<Card title="Enter Information">
						<Form id='myForm' onFinish={onFinish}>
							<div className='container-fluid py-4 px-4'>
								<div className='row'>
									<div className='col-md-12'>
										<Form.Item name='fname' rules={[{required:true}]} label='First Name'>
											<Input />
										</Form.Item>
									</div>
									
									<div className='col-md-12'>
										<Form.Item name='lname' rules={[{required:true}]} label='Last Name'>
											<Input />
										</Form.Item>
									</div>

									<div className='col-md-12'>
										<Form.Item name='email' rules={[{required:true, type:'email'}]} label='Email '>
											<Input />
										</Form.Item>
									</div>

									{/* <div className='col-12'>
										Phone Number
									</div> */}
									<div className='col-12'>
										<Form.Item name='number' rules={[{required:true, message:'Invalid Phonenumber' ,pattern: new RegExp(/(070[0-9]{8}|080[0-9]{8}|090[0-9]{8}|081[0-9]{8}|091[0-9]{8})/)}]} label='Phone' >
											<Input placeholder='Phone Number' />
										</Form.Item>
									</div>

									<div className='col-12'>
										<Form.Item>
											<div className='text-center'>
												<Button type="primary" htmlType='submit' loading={loading}>
													SUBMIT
												</Button>
											</div>
										</Form.Item>
									</div>

								</div>
							</div>
						</Form>
					</Card>   
				</div>
			</div>
		</div>
		);
}

export default Entry;
        