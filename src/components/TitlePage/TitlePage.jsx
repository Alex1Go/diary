import PropTypes from 'prop-types';
import { Title } from './TitlePage.styled';

export const TitlePage = ({ title }) => <Title>{title}</Title>;

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
};
