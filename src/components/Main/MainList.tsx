import React from 'react';
import '@css/MainList.scss';
import profile1 from '@img/profile 1.png';
import profile2 from '@img/profile 2.png';
import profile3 from '@img/profile 3.png';
import profile4 from '@img/profile 4.png';
import profile5 from '@img/profile 5.png';
import profile6 from '@img/profile 6.png';
import profile7 from '@img/profile 7.png';
import profile8 from '@img/profile 8.png';
import profile9 from '@img/profile 9.png';

function MainList() {
  const tempNameArr = [
    'kyungsle',
    'kyungsle',
    'kyungsle',
    'kyungsle',
    'kyungsle',
    'kyungsle',
    'kyungsle',
    'kyungsle',
    'kyungsle',
  ];
  const tempProfileArr = [profile1, profile2, profile3, profile4, profile5, profile6, profile7, profile8, profile9];
  return (
    <div className="main--list">
      <p className="main--list--title">친바 신청 목록</p>
      <div className="main--list--peoples">
        {tempNameArr.map((e, i) => (
          <div key={i}>
            <img src={tempProfileArr[i]} alt={`profile${i}`} />
            <p>{e}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainList;
