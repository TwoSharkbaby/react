import React from 'react';
import { Button } from 'react-bootstrap';
import { styled } from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'daun' ? 'blue' : 'red')};
`;

const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === 'daun' ? 'blue' : 'red')};
  background-color: green;
`;

const Home = (props) => {
  const { boards, setBoards, user } = props; // 구조분할 할당 방식

  return (
    <div>
      <h1>홈페이지 입니다</h1>
      <Button variant="primary">Primary</Button>{' '}
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목 : {board.title} / 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
