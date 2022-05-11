import { Outlet, Link } from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css'; 
import {Layout, Menu} from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className="App" style={{height:'100vh'}}>
      <Layout style={{height:'100vh'}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo" style={{height:'32px', margin:'16px', background: 'rgba(255, 255, 255, 0.2)'}} />
          
          <Menu
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['socials']}
            mode="inline"
            theme="dark"
            style={{
              marginTop:'5px',
              alignItems:'center',
              marginTop:'50px'
            }}
          >
            
            <Menu.Item key="1">
              <Link to="/table">Table</Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/entry">Entry</Link>
            </Menu.Item>
          </Menu>
          
        </Sider>
        <Layout>
          {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
