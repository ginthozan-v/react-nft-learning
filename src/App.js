import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [activePunk, setActivePunk] = useState()

  const getMyNfts = async () => {
    const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x0f3bECB1D931D05995ddCa7E2F9E94720f0e0eA4&order_direction=asc')
    setPunkListData(openseaData.data.assets)
    setActivePunk(openseaData.data.assets[0])
  }

  useEffect(() => {
    return getMyNfts()
  }, [])

  return (
    <div className="app">
      <Header />
      <Main activePunk={activePunk} />
      <PunkList punkListData={punkListData} selectPunk={setActivePunk} />
    </div >
  );
}

export default App;
