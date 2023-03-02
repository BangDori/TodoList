// Logout index page
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import LogoutBox from '../../styles/pages/LogoutBox';
import { reset } from '../../store/user';

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(reset({ id: '', name: '', status: false }));
    navigate('/');
  };

  return (
    <LogoutBox>
      {/* 로그아웃 버튼 클릭시, 로그인 상태 초기화  */}
      <button onClick={onClick}>Logout</button>
    </LogoutBox>
  );
};

export default Index;
