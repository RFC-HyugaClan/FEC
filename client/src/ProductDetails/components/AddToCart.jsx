import React, { useState, useRef } from 'react';

export default function AddToCart({ cp, currentStyle }) {
  const [curQty, setcurQty] = useState(Object.values(currentStyle.skus)[0].quantity);
  const [curSize, setCurSize] = useState(Object.values(currentStyle.skus)[0].size);
  const [currentIcon, setCurrentIcon] = useState('✩');
  const qtyInp = useRef({ value: null });
  const handleSelect = (e) => {
    const sku = e.target.value.split(',');
    setcurQty(sku[0]);
    setCurSize(sku[1]);
  };
  const addToCartHandler = (e) => {
    // add post request to server from here.
    e.preventDefault();
    alert(`${qtyInp.current.value} ${currentStyle.name} ${cp.name}'s has been added to your cart!`);
    console.log(qtyInp.current.value, curSize);
  };
  const iconToggle = () => {
    if (currentIcon === '✩') {
      setCurrentIcon('♡');
    }
    if (currentIcon === '♡') {
      setCurrentIcon('✩');
    }
  };
  return (
    <div style={{marginTop: '20px' }}>
      <select onChange={handleSelect} style={{ textAlign: 'left', fontSize: '18px', width: '250px', height: '60px', padding: '10px' }}>
        <option>SELECT SIZE</option>
        {Object.values(currentStyle.skus).map((size) => (
          <option
            aria-label="option"
            key={size.size}
            value={[size.quantity, size.size]}
          >
            {size.size}
          </option>
        ))}
      </select>

      <input style={{ marginLeft: '20px', textAlign: 'right', height: '37px', width: '120px', fontSize: '18px', padding: '10px', fontSize: '18px' }} placeholder="0" ref={qtyInp} type="number" max={`${curQty}`} min="0" />
      <br />
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
      <button type='submit' style={{width: '320px', fontSize: '18px', height: '60px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} onClick={addToCartHandler}>Add To Cart 🛒 <span>＋</span></button>
      <button style={{fontSize: '26px', textAlign: 'center', width: '65px', height: '60px'}} onClick={iconToggle} type="toggle">{currentIcon}</button>
    </div>
    </div>
  );
}
