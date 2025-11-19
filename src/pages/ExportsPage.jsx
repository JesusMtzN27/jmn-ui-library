import React from 'react';
import { Card, Typography, Space, Divider, Row, Col } from 'antd';
import GenerateReport from '../components/exports/GenerateReport';
import { FileCode } from 'lucide-react';

const { Title, Text, Paragraph } = Typography;

const ExportsPage = () => {
  // Ejemplos de diferentes configuraciones de filtros
  const exampleFilters1 = {
    year: '2024',
    month: 'Noviembre',
    department: 'Ventas'
  };

  const exampleFilters2 = {
    year: '2023',
    month: 'Todos',
    department: 'Todos'
  };

  const exampleFilters3 = {
    year: '2024',
    month: 'Diciembre',
    department: 'Marketing'
  };

  return (
    <div style={{ padding: '24px', background: '#030712', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <Space align="center" size={16}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FileCode size={24} color="white" />
          </div>
          <div>
            <Title level={2} style={{ margin: 0, color: '#e5e7eb' }}>
              GenerateReport Component
            </Title>
            <Text style={{ color: '#9ca3af' }}>
              Componente para exportar reportes en PDF y Excel
            </Text>
          </div>
        </Space>
      </div>

      {/* Descripción */}
      <Card 
        style={{ 
          background: '#111827', 
          border: '1px solid #1f2937',
          marginBottom: '24px'
        }}
      >
        <Title level={4} style={{ color: '#e5e7eb', marginTop: 0 }}>
          📋 Descripción
        </Title>
        <Paragraph style={{ color: '#9ca3af', marginBottom: '16px' }}>
          Componente reutilizable que permite exportar reportes con filtros personalizados.
          Incluye un botón de exportación y un modal para seleccionar el formato (PDF o Excel)
          con vista previa de los filtros aplicados.
        </Paragraph>
        
        <Title level={5} style={{ color: '#e5e7eb', marginBottom: '12px' }}>
          ✨ Características:
        </Title>
        <ul style={{ color: '#9ca3af', marginLeft: '20px' }}>
          <li>Soporte para múltiples formatos (PDF y Excel)</li>
          <li>Vista previa de filtros aplicados</li>
          <li>Animaciones suaves y micro-interacciones</li>
          <li>Integración con i18next para internacionalización</li>
          <li>Estilos inline (sin dependencias de CSS externo)</li>
          <li>Completamente responsive</li>
        </ul>
      </Card>

      {/* Props */}
      <Card 
        style={{ 
          background: '#111827', 
          border: '1px solid #1f2937',
          marginBottom: '24px'
        }}
      >
        <Title level={4} style={{ color: '#e5e7eb', marginTop: 0 }}>
          🔧 Props
        </Title>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            color: '#e5e7eb'
          }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1f2937' }}>
                <th style={{ padding: '12px', textAlign: 'left', color: '#60a5fa' }}>Prop</th>
                <th style={{ padding: '12px', textAlign: 'left', color: '#60a5fa' }}>Tipo</th>
                <th style={{ padding: '12px', textAlign: 'left', color: '#60a5fa' }}>Requerido</th>
                <th style={{ padding: '12px', textAlign: 'left', color: '#60a5fa' }}>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #1f2937' }}>
                <td style={{ padding: '12px', color: '#a78bfa' }}>reportName</td>
                <td style={{ padding: '12px', color: '#9ca3af' }}>string</td>
                <td style={{ padding: '12px', color: '#10b981' }}>Sí</td>
                <td style={{ padding: '12px', color: '#9ca3af' }}>Nombre del reporte a exportar</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #1f2937' }}>
                <td style={{ padding: '12px', color: '#a78bfa' }}>filterParams</td>
                <td style={{ padding: '12px', color: '#9ca3af' }}>object</td>
                <td style={{ padding: '12px', color: '#ef4444' }}>No</td>
                <td style={{ padding: '12px', color: '#9ca3af' }}>Objeto con filtros aplicados (year, month, department, etc.)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Ejemplos de uso */}
      <Card 
        style={{ 
          background: '#111827', 
          border: '1px solid #1f2937',
          marginBottom: '24px'
        }}
      >
        <Title level={4} style={{ color: '#e5e7eb', marginTop: 0 }}>
          💻 Código de Uso
        </Title>
        <div style={{
          background: '#000000',
          padding: '16px',
          borderRadius: '8px',
          border: '1px solid #1f2937',
          overflowX: 'auto'
        }}>
          <pre style={{ margin: 0, color: '#a78bfa' }}>
{`import GenerateReport from './components/exports/GenerateReport';

// Uso básico
<GenerateReport 
  reportName="Reporte de Ventas"
  filterParams={{
    year: '2024',
    month: 'Noviembre',
    department: 'Ventas'
  }}
/>

// Sin filtros
<GenerateReport reportName="Reporte General" />`}
          </pre>
        </div>
      </Card>

      {/* Demos Interactivos */}
      <Title level={3} style={{ color: '#e5e7eb', marginBottom: '16px' }}>
        🎨 Demos Interactivos
      </Title>

      <Row gutter={[16, 16]}>
        {/* Demo 1 */}
        <Col xs={24} lg={12}>
          <Card 
            title={<Text style={{ color: '#e5e7eb' }}>Demo 1: Con todos los filtros</Text>}
            style={{ 
              background: '#111827', 
              border: '1px solid #1f2937',
              height: '100%'
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <Text style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>
                Filtros aplicados:
              </Text>
              <ul style={{ color: '#60a5fa', marginLeft: '20px' }}>
                <li>Año: 2024</li>
                <li>Mes: Noviembre</li>
                <li>Departamento: Ventas</li>
              </ul>
            </div>
            <GenerateReport 
              reportName="Reporte de Ventas"
              filterParams={exampleFilters1}
            />
          </Card>
        </Col>

        {/* Demo 2 */}
        <Col xs={24} lg={12}>
          <Card 
            title={<Text style={{ color: '#e5e7eb' }}>Demo 2: Filtros generales</Text>}
            style={{ 
              background: '#111827', 
              border: '1px solid #1f2937',
              height: '100%'
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <Text style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>
                Filtros aplicados:
              </Text>
              <ul style={{ color: '#60a5fa', marginLeft: '20px' }}>
                <li>Año: 2023</li>
                <li>Mes: Todos</li>
                <li>Departamento: Todos</li>
              </ul>
            </div>
            <GenerateReport 
              reportName="Reporte Anual"
              filterParams={exampleFilters2}
            />
          </Card>
        </Col>

        {/* Demo 3 */}
        <Col xs={24} lg={12}>
          <Card 
            title={<Text style={{ color: '#e5e7eb' }}>Demo 3: Departamento específico</Text>}
            style={{ 
              background: '#111827', 
              border: '1px solid #1f2937',
              height: '100%'
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <Text style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>
                Filtros aplicados:
              </Text>
              <ul style={{ color: '#60a5fa', marginLeft: '20px' }}>
                <li>Año: 2024</li>
                <li>Mes: Diciembre</li>
                <li>Departamento: Marketing</li>
              </ul>
            </div>
            <GenerateReport 
              reportName="Reporte Marketing"
              filterParams={exampleFilters3}
            />
          </Card>
        </Col>

        {/* Demo 4 */}
        <Col xs={24} lg={12}>
          <Card 
            title={<Text style={{ color: '#e5e7eb' }}>Demo 4: Sin filtros</Text>}
            style={{ 
              background: '#111827', 
              border: '1px solid #1f2937',
              height: '100%'
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              <Text style={{ color: '#9ca3af', display: 'block', marginBottom: '8px' }}>
                Sin filtros aplicados (uso por defecto)
              </Text>
            </div>
            <GenerateReport 
              reportName="Reporte General"
            />
          </Card>
        </Col>
      </Row>

      {/* Notas */}
      <Card 
        style={{ 
          background: '#111827', 
          border: '1px solid #1f2937',
          marginTop: '24px'
        }}
      >
        <Title level={4} style={{ color: '#e5e7eb', marginTop: 0 }}>
          📝 Notas de Implementación
        </Title>
        <ul style={{ color: '#9ca3af', marginLeft: '20px' }}>
          <li>El componente utiliza <code style={{ color: '#60a5fa' }}>react-i18next</code> para internacionalización</li>
          <li>Los estilos están completamente inline, no requiere CSS externo</li>
          <li>La función <code style={{ color: '#60a5fa' }}>handleDownload</code> debe ser implementada según tus necesidades</li>
          <li>Incluye animaciones CSS con keyframes para mejor UX</li>
          <li>Compatible con PropTypes para validación de props</li>
        </ul>
      </Card>
    </div>
  );
};

export default ExportsPage;
