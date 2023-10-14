import React from 'react'
import { ChartContainer } from '@mui/x-charts';
import { AreaPlot, LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import './Admin.css';
import FaceIcon from '@mui/icons-material/Face';
import MedicationIcon from '@mui/icons-material/Medication';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PaidIcon from '@mui/icons-material/Paid';

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const AdminCard = ({name,value}) => {
  return (
    <div className='admin-card'>
    <div className='card-icon'
        style={{
            backgroundColor: name==='Appointments' ? '#8884d8' : name==='Doctors' ? '#82ca9d' : name==='Patients' ? '#ffc658' : '#ff7300'
        }}
    >
        {name==='Appointments' && <FaceIcon
            sx={{
                fontSize: '48px',
                marginBottom: '0px',
                color: '#fff'
            }}
        />}
        {name==='Doctors' && <MedicationIcon
            sx={{
                fontSize: '48px',
                marginBottom: '0px',
                color: '#fff'
            }}
        />}
        {name==='Patients' && <GroupAddIcon
            sx={{
                fontSize: '48px',
                marginBottom: '0px',
                color: '#fff'
            }}
        />}
        {name==='Earnings' && <PaidIcon
            sx={{
                fontSize: '48px',
                marginBottom: '0px',
                color: '#fff'
            }}
        />}
    </div>
    <div className='card-info'>
        <h1>{name}</h1>
        <h3>{value}</h3>
    </div>
    <div className='card-chart'>
    <ChartContainer
    width={395}
      height={200}
      series={[{ type: 'line', data: pData, area: true}]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root': {
          stroke: name==='Appointments' ? '#8884d8' : name==='Doctors' ? '#82ca9d' : name==='Patients' ? '#ffc658' : '#ff7300',
          strokeWidth: 7,
          
        },
        '.MuiMarkElement-root': {
          stroke: '#8884d8',
          scale: '0.6',
          fill: '#fff',
          strokeWidth: 2,
          
        },
        
        marginLeft: '-47px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      disableAxisListener
    >

        <LinePlot/>
        {/* <AreaPlot/> */}
      {/* <MarkPlot /> */}
    </ChartContainer>
    </div>
    </div>
  )
}

export default AdminCard