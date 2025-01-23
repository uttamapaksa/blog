'use client';

import { SetStateAction, useState } from 'react';

export default function StackedBarNode() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<SetStateAction<number>>) => {
    const value = parseInt(e.target.value);
    setter(isNaN(value) ? 0  : value);
  };

  return (
    <div className='px-5'>
      <div className="flex gap-x-3">
        <input
          className="p-3 border border-red-400 bg-transparent"
          style={{ width: '120px', height: '50px' }}
          value={value1}
          onChange={(e) => changeNumber(e, setValue1)} 
        />
        <input
          className="p-3 border border-yellow-400 bg-transparent"
          style={{ width: '120px', height: '50px' }}
          value={value2}
          onChange={(e)=>changeNumber(e, setValue2)}
          />
        <input
          className="p-3 border border-green-400 bg-transparent"
          style={{ width: '120px', height: '50px' }}
          value={value3}
          onChange={(e)=>changeNumber(e, setValue3)}
        />
      </div>
      <br /><br />
      <div className="flex gap-2" style={{ height: '15px' }}>
        {value1 + value2 + value3 == 0 &&
          <div className="bg-gray-200 rounded-md" style={{ width: '100%' }} />
        }
        {value1 + value2 + value3 > 0 &&
          <>
            <div className="bg-red-500 rounded-md" style={{ width: `${(value1 / (value1 + value2 + value3)) * 100}%` }} />
            <div className="bg-yellow-500 rounded-md" style={{ width: `${(value2 / (value1 + value2 + value3)) * 100}%` }} />
            <div className="bg-green-500 rounded-md" style={{ width: `${(value3 / (value1 + value2 + value3)) * 100}%` }} />
          </>
        }
      </div>
      <br />
      <div className="flex gap-x-3" style={{height: '13px'}}>
        <div className="bg-red-500 rounded-md" style={{ aspectRatio: '1'}} />
        <span>{value1}</span>&ensp;
        <div className="bg-yellow-500 rounded-md" style={{ aspectRatio: '1'}} />
        <span>{value2}</span>&ensp;
        <div className="bg-green-500 rounded-md" style={{ aspectRatio: '1'}} />
        <span>{value3}</span>&ensp;
      </div>
    </div>
  );
}
