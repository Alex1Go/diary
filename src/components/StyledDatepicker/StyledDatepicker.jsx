// import { forwardRef, useState } from 'react';
// import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarGlobalStyles, Wrapper } from './StyledDatepicker.styled';
import PropTypes from 'prop-types';

const StyledDatepicker = ({ selectedDate, setSelectedDate, isOpen }) => {
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Wrapper>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd MM yyyy"
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 1)}
        open={isOpen}
        customInput={<div style={{ display: 'none' }} />}
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: 'viewport',
          },
        }}
      />
      <CalendarGlobalStyles />
    </Wrapper>
  );
};
StyledDatepicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
  isOpen: PropTypes.bool,
};
export default StyledDatepicker;

// import { forwardRef, useState } from 'react';
// import { format } from 'date-fns';
// import DatePicker from 'react-datepicker';
// import { CalendarGlobalStyles, TitleWrapper } from './StyledDatepicker.styled';
// import 'react-datepicker/dist/react-datepicker.css';

// const StyledDatepicker = () => {
//   const [selectedDate, setSelectedDate] = useState(Date.now());

//   const CustomInput = forwardRef(({ value, onClick }, ref) => {
//     return (
//       <TitleWrapper onClick={onClick} ref={ref}>
//         {format(selectedDate, 'dd/MM/yyyy')}
//       </TitleWrapper>
//     );
//   });

//   return (
//     <>
//       <DatePicker
//         selected={selectedDate}
//         onChange={date => {
//           setSelectedDate(date);
//         }}
//         customInput={<CustomInput />}
//         dateFormat={'dd MM yyyy'}
//         calendarStartDay={1}
//         formatWeekDay={day => day.substr(0, 1)}
//       />
//       <CalendarGlobalStyles />
//     </>
//   );
// };

// export default StyledDatepicker;
