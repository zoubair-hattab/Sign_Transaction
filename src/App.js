import Web3 from 'web3';
import counterAbi from './artifacts/contracts/Counter.sol/Counter.json';
import { useEffect, useState } from 'react';
function App() {
  const web3 = new Web3('https://rpc.holesky.ethpandaops.io');
  const contractAddress = '0x18b59f4348EA78CcAF548eCfBd126e0E274B91D0';
  const contract = new web3.eth.Contract(counterAbi.abi, contractAddress);
  const [event, setEvent] = useState([]);
  const [value, setValue] = useState();
  const signTranstion = async () => {
    const accounts = await web3.eth.getAccounts();
    const _from = accounts[0];
    const privateKey =
      'Here, you should have your private key and ensure there are funds available; otherwise, the transaction will fail.';
    const tx = {
      from: _from,
      to: contractAddress,
      gas: 50000,
      data: contract.methods.increment(value).encodeABI(),
    };
    const signature = await web3.eth.accounts.signTransaction(tx, privateKey);
    await web3.eth.sendSignedTransaction(signature.rawTransaction);
  };
  useEffect(() => {
    const loadData = async () => {
      const events = await contract.getPastEvents('Increment', {
        fromBlock: 0,
        toBlock: 'latest',
      });
      const data = events?.map((ev) => ev?.returnValues.counter);
      setEvent(data);
    };
    loadData();
  });
  return (
    <div className="app">
      <div className="content">
        <h3>Transaction Information</h3>
        {event?.map((r, i) => (
          <p key={i}>Value From Event:{r}</p>
        ))}
        <div className="input">
          <input
            type="text"
            name="value"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter a value Here"
          />
          <button onClick={signTranstion}>sign Transtion</button>
        </div>
      </div>
    </div>
  );
}

export default App;
