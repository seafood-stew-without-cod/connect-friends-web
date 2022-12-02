import { QRCodeSVG } from 'qrcode.react';
import './styles/index.css';

import { baseURL } from './instance';
import Title from './components/Title';
import SubTitle from './components/SubTitle';
import Container from './components/Container';
import useFetchMyInfo from './hooks/useFetchMyInfo';

function App() {
  const { myInfo } = useFetchMyInfo();
  console.log(myInfo);
  return (
    <div className='App'>
      {myInfo && (
        <>
          <Title>{`😎 ${myInfo.name}`}</Title>
          <SubTitle>{myInfo.tag}</SubTitle>
          <Container title='이메일'>{myInfo.email}</Container>
          <Container title='휴대폰 번호'>{myInfo.phone}</Container>
          <Container title='깃허브 링크'>{myInfo.git}</Container>
          <Container title='링크드인 링크'>{myInfo.linkedIn}</Container>
        </>
      )}
      <div className='qrcode'>
        <QRCodeSVG value={`http://52.79.236.139/cards/1?mycard=3`} />
      </div>
    </div>
  );
}

export default App;
