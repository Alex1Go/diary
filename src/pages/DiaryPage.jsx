import { DiaryCalendar } from 'components/DaySwitch/DaySwitch';
import { TitlePage } from '../components/TitlePage/TitlePage';

const DiaryPage = () => {
  return (
    <div>
      <TitlePage title="Diary" />;
      <DiaryCalendar />
    </div>
  );
};

export default DiaryPage;
