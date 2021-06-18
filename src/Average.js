import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('평균 계산');

  if (numbers.length === 0) {
    return 0;
  } else {
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  }
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current.focus();
    },
    [list, number]
  );

  const onEnterKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        onInsert();
      }
    },
    [onInsert]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        value={number}
        onChange={onChange}
        onKeyPress={onEnterKeyPress}
        ref={inputEl}
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
