import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const GenerateReport = ({ reportName, filterParams }) => {
  const { t, i18n } = useTranslation(['analytics', 'common']);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  
  const [showModal, setShowModal] = useState(false);
  const [reportType, setReportType] = useState('pdf');

  // Detectar cambios de idioma
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setSelectedLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDownload = () => {
    // TODO: Implementar lógica de descarga según reportType
    console.log('Descargando reporte:', {
      type: reportType,
      reportName,
      lang: selectedLanguage,
      filters: filterParams
    });
    
    // Aquí puedes implementar tu lógica de descarga personalizada
    closeModal();
  };

  // Estilos CSS
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      backgroundColor: '#eff6ff',
      border: '1px solid #bfdbfe',
      borderRadius: '8px',
      color: '#1e40af',
      fontWeight: '500',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      boxShadow: '0 1px 2px rgba(37, 99, 235, 0.1)',
      outline: 'none'
    },
    buttonHover: {
      backgroundColor: '#dbeafe',
      borderColor: '#93c5fd',
      boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)'
    },
    modalOverlay: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: '16px'
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      maxWidth: '448px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto'
    },
    modalHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px'
    },
    modalTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    modalIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: '#2563eb',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    closeButton: {
      color: '#9ca3af',
      cursor: 'pointer',
      transition: 'color 0.2s ease-in-out',
      background: 'none',
      border: 'none',
      outline: 'none'
    },
    formatGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px'
    },
    formatButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px',
      border: '2px solid',
      borderRadius: '12px',
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer',
      textAlign: 'left',
      backgroundColor: 'transparent',
      outline: 'none'
    },
    buttonGroup: {
      display: 'flex',
      gap: '12px',
      marginTop: '24px'
    },
    cancelButton: {
      flex: 1,
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      color: '#374151',
      borderRadius: '12px',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'background-color 0.2s ease-in-out',
      outline: 'none'
    },
    downloadButton: {
      flex: 1,
      padding: '12px 16px',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'background-color 0.2s ease-in-out',
      outline: 'none'
    }
  };

  // Componentes SVG
  const DownloadOutlined = ({ style, animated }) => (
    <svg 
      style={{
        ...style,
        ...(animated ? { animation: 'downloadBounce 0.6s ease-in-out infinite' } : {})
      }} 
      width="14" 
      height="14" 
      fill="currentColor" 
      viewBox="0 0 1024 1024"
    >
      <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"/>
    </svg>
  );
  DownloadOutlined.propTypes = { style: PropTypes.object, animated: PropTypes.bool };

  const CloseIcon = () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const FileTextIcon = ({ style }) => (
    <svg style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
  FileTextIcon.propTypes = { style: PropTypes.object };

  const FileSpreadsheetIcon = ({ style }) => (
    <svg style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
  FileSpreadsheetIcon.propTypes = { style: PropTypes.object };

  const [isHovered, setIsHovered] = useState(false);

  // RENDER
  return (
    <>
      <style>
        {`
          @keyframes downloadBounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(4px);
            }
          }
        `}
      </style>
      
      <div style={styles.container}>
        <button
          onClick={() => setShowModal(true)}
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {})
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <DownloadOutlined animated={isHovered} />
          <span>{t('export.export') || 'Exportar Reporte'}</span>
        </button>
      </div>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={{ padding: '24px' }}>
              <div style={styles.modalHeader}>
                <div style={styles.modalTitle}>
                  <div style={styles.modalIcon}>
                    <DownloadOutlined style={{ color: 'white' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', margin: 0 }}>
                    {t('export.exportReport') || 'Exportar Reporte'}
                  </h2>
                </div>
                <button onClick={closeModal} style={styles.closeButton}>
                  <CloseIcon />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Formato de exportación */}
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '12px' }}>
                    {t('export.exportFormat') || 'Formato de exportación'}
                  </label>
                  <div style={styles.formatGrid}>
                    <button
                      onClick={() => setReportType('pdf')}
                      style={{
                        ...styles.formatButton,
                        ...(reportType === 'pdf' ? { borderColor: '#dc2626', backgroundColor: '#fef2f2' } : { borderColor: '#e5e7eb' })
                      }}
                    >
                      <FileTextIcon style={{ width: '20px', height: '20px', color: reportType === 'pdf' ? '#dc2626' : '#9ca3af' }} />
                      <div>
                        <div style={{ fontWeight: '500', color: reportType === 'pdf' ? '#991b1b' : '#374151' }}>PDF</div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>{t('export.forPresentations') || 'Para presentaciones'}</div>
                      </div>
                    </button>
                    <button
                      onClick={() => setReportType('excel')}
                      style={{
                        ...styles.formatButton,
                        ...(reportType === 'excel' ? { borderColor: '#10b981', backgroundColor: '#ecfdf5' } : { borderColor: '#e5e7eb' })
                      }}
                    >
                      <FileSpreadsheetIcon style={{ width: '20px', height: '20px', color: reportType === 'excel' ? '#059669' : '#9ca3af' }} />
                      <div>
                        <div style={{ fontWeight: '500', color: reportType === 'excel' ? '#064e3b' : '#374151' }}>Excel</div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>{t('export.forAnalysis') || 'Para análisis'}</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Separador */}
                <div style={{
                  height: '2px',
                  backgroundColor: '#e5e7eb',
                  margin: '0'
                }}></div>

                {/* Vista Previa */}
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '12px'
                  }}>
                    {t('export.reportPreview') || 'Vista previa del reporte'}
                  </div>
                  <div style={{
                    backgroundColor: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: '8px',
                    padding: '12px 16px'
                  }}>
                    <div style={{
                      fontSize: '13px',
                      color: '#1e40af'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '8px'
                      }}>
                        <span style={{ fontWeight: '600' }}>{t('filters.year') || 'Año'}:</span>
                        <span style={{ fontWeight: '600' }}>{filterParams?.year || t('filters.all') || 'Todos'}</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '8px'
                      }}>
                        <span style={{ fontWeight: '600' }}>{t('filters.month') || 'Mes'}:</span>
                        <span style={{ fontWeight: '600' }}>{filterParams?.month || t('filters.all') || 'Todos'}</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <span style={{ fontWeight: '600' }}>{t('filters.department') || 'Departamento'}:</span>
                        <span style={{ fontWeight: '600' }}>{filterParams?.department || t('filters.all') || 'Todos'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={styles.buttonGroup}>
                <button onClick={closeModal} style={styles.cancelButton}>
                  {t('common.cancel') || 'Cancelar'}
                </button>
                <button
                  onClick={handleDownload}
                  style={styles.downloadButton}
                >
                  <DownloadOutlined style={{ width: '16px', height: '16px' }} />
                  {t('export.download') || 'Descargar'} {reportType.toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

GenerateReport.propTypes = {
  reportName: PropTypes.string.isRequired,
  filterParams: PropTypes.object
};

GenerateReport.defaultProps = {
  filterParams: {}
};

export default GenerateReport;
