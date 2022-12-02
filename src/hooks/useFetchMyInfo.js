import { useEffect, useState } from 'react';
import { request } from '../instance/index';

const useFetchMyInfo = () => {
  const [myInfo, setMyInfo] = useState();

  const getMyInfo = () => {
    const cardKey = window.location.pathname.slice(1);
    return request({
      method: 'GET',
      url: `/cards/me`,
      headers: {
        id: cardKey,
      },
    });
  };

  useEffect(() => {
    const fetchMyInfo = async () => {
      const myInfo = await getMyInfo();
      setMyInfo(myInfo.data);
    };
    fetchMyInfo();
  }, []);

  return { myInfo };
};

export default useFetchMyInfo;
