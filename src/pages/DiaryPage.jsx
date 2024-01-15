// import StyledDatepicker from 'components/StyledDatepicker/StyledDatepicker';
import DaySwitch from 'components/DaySwitch/DaySwitch';
import {
  Container,
  CustomDivForTables,
  DescriptionText,
  DescriptionWrapper,
  DiaryPageContainer,
  DiaryWrapper,
  TitleAndSwitchContainer,
  WrapperCards,
} from './DiaryPage.styled';
import { getDiaryList } from '../redux/diary/operations';
import {
  // getDiaryExercises,
  // getDiaryProducts,
  getIsLoadingDiary,
} from '../redux/diary/selectors';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TitlePage } from 'components/TitlePage/TitlePage';

const DiaryPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState();
  // const productsList = useSelector(getDiaryProducts);
  // const exercisesList = useSelector(getDiaryExercises);
  const isLoadingDairy = useSelector(getIsLoadingDiary);

  const dispatch = useDispatch();

  useEffect(() => {
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    setFormattedDate(formattedDate);
    dispatch(getDiaryList(formattedDate));
  }, [currentDate, dispatch]);

  return (
    <Container>
      {isLoadingDairy ? (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Loading...
        </div>
      ) : (
        <DiaryWrapper>
          <TitleAndSwitchContainer>
            <TitlePage title="Diary" />
            <DaySwitch
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              formattedDate={formattedDate}
            />
          </TitleAndSwitchContainer>

          <DiaryPageContainer>
            <WrapperCards>
              <DescriptionWrapper>
                <DescriptionText>
                  Record all your meals in a calorie diary every day. This will
                  help me be aware of my nutrition and make me responsible for
                  my choices.
                </DescriptionText>
              </DescriptionWrapper>
            </WrapperCards>

            <CustomDivForTables>
              {/* <DiaryProductsItemOrExercisesItem
              key={formattedDate}
              marginBottom={40}
              list={productsList}
              productTable
              date={formattedDate}
              to={'/products'}
            />{' '}
            */
              /*{' '}
            <DiaryProductsItemOrExercisesItem
              list={exercisesList}
              exerciseTable
              date={formattedDate}
              to={'/exercises'}
            /> */}
            </CustomDivForTables>
          </DiaryPageContainer>
        </DiaryWrapper>
      )}
    </Container>
  );
};

export default DiaryPage;
