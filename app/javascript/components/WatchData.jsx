// app/javascript/components/WatchData.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WatchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const response = await axios.post('/api/watch_data', {
          method: 'eth_blockNumber',
          params: []
        }, {
          headers: {
            'X-CSRF-Token': token,
            'Content-Type': 'application/json'
          }
        });
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1>Data from WatchData API</h1>
      <div style={{justifyContent: "center"}}>{data.result}</div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default WatchData;
