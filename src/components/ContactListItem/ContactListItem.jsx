import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { HiOutlineUserCircle, HiOutlinePhone } from 'react-icons/hi';
import { FaRegTrashAlt } from 'react-icons/fa';

import {
  Contact,
  ContactName,
  ContactNumber,
  Container,
  MainContainer,
} from './ContactListItem.styled';

import IconButton from 'components/IconButton';
import { getLoadingStatus } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export default function ContactListItem({ item: { id, name, number } }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingStatus);

  return (
    <Contact>
      <MainContainer>
        <Container>
          <HiOutlineUserCircle size={20} color="#400080" />
          <ContactName>{name}</ContactName>
        </Container>

        {isLoading ? (
          <ContactNumber>Deleting...</ContactNumber>
        ) : (
          <Container>
            <HiOutlinePhone size={20} color="#400080" />
            <ContactNumber>{number}</ContactNumber>
          </Container>
        )}
      </MainContainer>

      <IconButton
        type="button"
        aria-label="For delete contact"
        onClick={() => dispatch(deleteContact({ id, name }))}
      >
        <FaRegTrashAlt />
      </IconButton>
    </Contact>
  );
}

ContactListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
