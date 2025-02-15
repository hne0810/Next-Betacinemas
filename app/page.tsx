import PopupScreen from './homepage/header/popUpScreen/popUpScreens';
import HomePage from './homepage';
// import LoginPage from './fe/pages/authenticationPage/login';

export default async function Page() {

  return (
    <div >
       <HomePage popup={<PopupScreen />} />
       {/* <LoginPage /> */}
    </div>
  );
}
