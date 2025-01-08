import PopupScreen from './fe/components/homepage/header/popUpScreen/popUpScreens';
import HomePage from './fe/components/homepage';
export default function Page() {
  return (
    <div >
      <HomePage popup={<PopupScreen />} />
    </div>
  );
}
