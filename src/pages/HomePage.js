import React, { useEffect, useState } from 'react';
import Home from '../components/home/Home';

const HomePage = () => {
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];
    setBoards([...data]);
    setUser({ id: 1, username: 'dau' });
  }, []);

  return <Home boards={boards} setBoards={setBoards} user={user} />;
};

export default HomePage;
