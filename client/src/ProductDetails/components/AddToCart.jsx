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
      <div style={{display: 'flex', wrap: 'nowrap'}}>
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
      </div>
      <br />
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
        { Number(curQty) > 0 && <button type='submit' style={{width: '320px', fontSize: '18px', height: '60px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'lighter', backgroundColor: 'white', border: '1px solid'}} onClick={addToCartHandler}>ADD TO CART &nbsp; 🛒 <span>＋</span></button>}
        <button style={{fontSize: '26px', textAlign: 'center', width: '65px', height: '60px', backgroundColor: 'white', border: '1px solid'}} onClick={iconToggle} type="toggle">{currentIcon}</button>
      </div>
    </div>
  );
}
