import PopupScreen from './pages/homepage/header/popUpScreen/popUpScreens';
import HomePage from './pages/homepage';
// import LoginPage from './fe/pages/authenticationPage/login';
export default function Page() {
  return (
    <div >
       <HomePage popup={<PopupScreen />} />
       {/* <LoginPage /> */}
    </div>
  );
}
