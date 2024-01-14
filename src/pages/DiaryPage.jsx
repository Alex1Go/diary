// import StyledDatepicker from 'components/StyledDatepicker/StyledDatepicker';
import { TitlePage } from '../components/TitlePage/TitlePage';
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
import DaySwitch from 'components/DaySwitch/DaySwitch';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

const DiaryPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [formattedDate, setFormattedDate] = useState();

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const day = String(currentDate.getDate()).padStart(2, '0');
  //   const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  //   const year = currentDate.getFullYear();
  //   const formattedDate = `${day}/${month}/${year}`;
  //   setFormattedDate(formattedDate);
  //   dispatch(formattedDate);
  // }, [currentDate, dispatch]);
  return (
    <Container>
      <DiaryWrapper>
        <TitleAndSwitchContainer>
          <TitlePage title="Diary" />
          <DaySwitch
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            // formattedDate={formattedDate}
          />
        </TitleAndSwitchContainer>

        <DiaryPageContainer>
          <WrapperCards>
            <DescriptionWrapper>
              <DescriptionText>
                Record all your meals in a calorie diary every day. This will
                help me be aware of my nutrition and make me responsible for my
                choices.
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
              /> */}
            {/* <DiaryProductsItemOrExercisesItem
                list={exercisesList}
                exerciseTable
                date={formattedDate}
                to={'/exercises'}
              /> */}
          </CustomDivForTables>
        </DiaryPageContainer>
      </DiaryWrapper>
    </Container>
    // <div>
    //   <TitlePage title="Diary" />;
    // </div>
  );
};

export default DiaryPage;
