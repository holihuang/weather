import { request } from '@umijs/max';
import { useEffect, useState } from 'react';

export default function () {
  const [info, setInfo] = useState<any>({});
  useEffect(() => {
    request('/api/weather/city/101030100').then(({ cityInfo, data }) => {
      console.log(data, 111);
      setInfo({ ...data, ...cityInfo });
    });
  }, []);
  return (
    <div>
      <div>weather</div>
      <div>城市: {info.city}</div>
      <div>温度: {info.wendu}度</div>
    </div>
  );
}
