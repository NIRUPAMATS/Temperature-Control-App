import React,{useState} from 'react'

const App=()=>{
  const [temperature,setTemperature]=useState(10)
  const [temperatureColour,setTemperatureColour]=useState('cold')

  const increaseTemp=()=>{
    if(temperature===30)return
    const newTemp=temperature+1
    if(newTemp>=15){
      setTemperatureColour('hot')
    }
    setTemperature(newTemp)
  }
  const decreaseTemp=()=>{
    if(temperature===-10)return
    const newTemp=temperature-1
    if(newTemp<15){
      setTemperatureColour('cold')
    }
    
    setTemperature(newTemp)
  }

  return <div className='app-container'>
    <div className="temperature-display-container">
      <div className={`temperature-display ${temperatureColour}`}>{temperature}°C
      </div>
    </div>
    <div className="button-container">
      <button onClick={()=>increaseTemp()}>+</button>
      <button onClick={()=>decreaseTemp()}>-</button>
    </div>
  </div>
}
export default App