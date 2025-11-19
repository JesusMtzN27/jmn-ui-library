import React, { useState } from 'react';
import { Layout, Menu, Input, Table, Card, Row, Col, Badge, Typography, Space, Button } from 'antd';
import { 
  MenuOutlined, 
  SearchOutlined, 
  SettingOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  FolderOpenOutlined,
  CodeOutlined
} from '@ant-design/icons';
import { 
  Zap, 
  Code, 
  Layers, 
  Grid, 
  Package, 
  FolderOpen, 
  Book, 
  Settings as SettingsIcon,
  FileCode 
} from 'lucide-react';
import './App.css';

const { Sider, Header, Content } = Layout;
const { Title, Text } = Typography;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'buttons', name: 'Buttons', count: 8, color: '#3b82f6', icon: <Zap size={20} /> },
    { id: 'forms', name: 'Forms', count: 12, color: '#10b981', icon: <Code size={20} /> },
    { id: 'layouts', name: 'Layouts', count: 6, color: '#8b5cf6', icon: <Layers size={20} /> },
    { id: 'navigation', name: 'Navigation', count: 10, color: '#f97316', icon: <Grid size={20} /> },
    { id: 'data', name: 'Data Display', count: 15, color: '#ec4899', icon: <Package size={20} /> },
    { id: 'modals', name: 'Modals & Overlays', count: 7, color: '#06b6d4', icon: <FolderOpen size={20} /> },
    { id: 'hooks', name: 'Custom Hooks', count: 20, color: '#eab308', icon: <Book size={20} /> },
    { id: 'utils', name: 'Utilities', count: 18, color: '#ef4444', icon: <SettingsIcon size={20} /> }
  ];

  const statsData = [
    { value: 96, label: 'Componentes', color: '#3b82f6' },
    { value: 20, label: 'Hooks', color: '#8b5cf6' },
    { value: 18, label: 'Utilidades', color: '#10b981' },
    { value: 8, label: 'Categorías', color: '#f97316' }
  ];

  const recentComponents = [
    { 
      key: '1',
      name: 'ModalDialog.jsx', 
      category: 'modals', 
      date: '19/11/2024', 
      size: '3.2kb', 
      color: '#06b6d4' 
    },
    { 
      key: '2',
      name: 'DataTable.jsx', 
      category: 'data', 
      date: '18/11/2024', 
      size: '5.8kb', 
      color: '#ec4899' 
    },
    { 
      key: '3',
      name: 'useForm.js', 
      category: 'hooks', 
      date: '15/11/2024', 
      size: '2.1kb', 
      color: '#eab308' 
    },
    { 
      key: '4',
      name: 'DropdownMenu.jsx', 
      category: 'navigation', 
      date: '14/11/2024', 
      size: '4.3kb', 
      color: '#f97316' 
    },
    { 
      key: '5',
      name: 'CardGrid.jsx', 
      category: 'layouts', 
      date: '12/11/2024', 
      size: '2.7kb', 
      color: '#8b5cf6' 
    },
    { 
      key: '6',
      name: 'useDebounce.js', 
      category: 'hooks', 
      date: '10/11/2024', 
      size: '1.2kb', 
      color: '#eab308' 
    }
  ];

  const menuItems = [
    {
      key: 'all',
      icon: <AppstoreOutlined />,
      label: 'Todos los componentes',
    },
    {
      key: 'recent',
      icon: <FileTextOutlined />,
      label: 'Recientes',
    },
    {
      key: 'categories',
      icon: <FolderOpenOutlined />,
      label: 'Por categorías',
    },
    {
      type: 'divider',
    },
    {
      key: 'categories-group',
      label: 'CATEGORÍAS',
      type: 'group',
      children: categories.map(cat => ({
        key: cat.id,
        label: (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Space>
              <span style={{ color: cat.color }}>{cat.icon}</span>
              <span>{cat.name}</span>
            </Space>
            <Text type="secondary" style={{ fontSize: '12px' }}>{cat.count}</Text>
          </div>
        ),
      })),
    },
  ];

  const columns = [
    {
      title: 'NOMBRE',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Space>
          <FileCode size={18} style={{ color: record.color }} />
          <Text strong>{text}</Text>
        </Space>
      ),
    },
    {
      title: 'CATEGORÍA',
      dataIndex: 'category',
      key: 'category',
      render: (text, record) => (
        <Badge 
          color={record.color} 
          text={text}
          style={{ 
            backgroundColor: `${record.color}20`,
            color: record.color,
            padding: '4px 12px',
            borderRadius: '4px',
            border: 'none'
          }}
        />
      ),
    },
    {
      title: 'FECHA',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'TAMAÑO',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'ACCIONES',
      key: 'actions',
      align: 'right',
      render: () => (
        <Button type="link" style={{ color: '#3b82f6' }}>
          Ver código
        </Button>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={256}
        className="app-sider"
        breakpoint="lg"
      >
        <div className="logo-container">
          <div className="logo-icon">
            <CodeOutlined style={{ fontSize: '24px', color: '#fff' }} />
          </div>
          {!collapsed && (
            <div className="logo-text">
              <Title level={5} style={{ color: '#fff', margin: 0 }}>JIMI UI Library</Title>
              <Text style={{ color: '#9ca3af', fontSize: '12px' }}>Componentes Personales</Text>
            </div>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['all']}
          items={menuItems}
          className="app-menu"
        />
      </Sider>

      <Layout>
        <Header className="app-header">
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <Input
              placeholder="Buscar componentes..."
              prefix={<SearchOutlined style={{ color: '#6b7280' }} />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              style={{ maxWidth: '500px' }}
            />
            <Button 
              type="text" 
              icon={<SettingOutlined />} 
              style={{ color: '#9ca3af' }}
            />
          </Space>
        </Header>

        <Content className="app-content">
          {/* Stats Cards */}
          <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
            {statsData.map((stat, index) => (
              <Col xs={12} sm={12} md={6} key={index}>
                <Card className="stat-card">
                  <Title level={2} style={{ color: stat.color, margin: 0 }}>
                    {stat.value}
                  </Title>
                  <Text type="secondary">{stat.label}</Text>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Categories Section */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <Title level={3} style={{ margin: 0 }}>Categorías</Title>
              <Button type="link">Ver todas</Button>
            </div>
            <Row gutter={[16, 16]}>
              {categories.map((category) => (
                <Col xs={24} sm={12} lg={6} key={category.id}>
                  <Card 
                    hoverable 
                    className="category-card"
                    style={{ borderColor: `${category.color}33` }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <div 
                        className="category-icon"
                        style={{ 
                          backgroundColor: `${category.color}20`,
                          color: category.color,
                        }}
                      >
                        {category.icon}
                      </div>
                      <Badge 
                        count={category.count} 
                        style={{ 
                          backgroundColor: `${category.color}20`,
                          color: category.color,
                          border: 'none'
                        }}
                      />
                    </div>
                    <Title level={5} style={{ marginBottom: '4px' }}>{category.name}</Title>
                    <Text type="secondary" style={{ fontSize: '13px' }}>
                      {category.count} componentes disponibles
                    </Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Recent Components Table */}
          <Card 
            title={<Title level={4} style={{ margin: 0 }}>Componentes Recientes</Title>}
            className="table-card"
          >
            <Table 
              columns={columns} 
              dataSource={recentComponents}
              pagination={false}
              className="components-table"
            />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
