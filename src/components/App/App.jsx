// import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { Container, AppTitle } from './App.styled';

// import ContactForm from 'components/ContactForm';
// import ContactList from 'components/ContactList';
// import Filter from 'components/Filter';
// import Section from 'components/Section';
// import { Loader } from 'components/Loader';

// import { useEffect } from 'react';

// import * as contactsOperations from 'redux/operations';
// import * as selectors from 'redux/selectors';

// const App = ({ title }) => {
//   const dispatch = useDispatch();
//   const items = useSelector(selectors.getItems);
//   const isLoading = useSelector(selectors.getLoadingStatus);

//   useEffect(() => {
//     dispatch(contactsOperations.fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <AppTitle>{title}</AppTitle>
//       <Section>
//         <ContactForm />
//       </Section>
//       <Section title="Contacts">
//         {isLoading && <Loader />}
//         {!isLoading && items.length === 0 && (
//           <div style={{ color: 'red', fontSize: '20px' }}>No any contacts!</div>
//         )}
//         {items.length > 0 && (
//           <>
//             <Filter />
//             <ContactList />
//           </>
//         )}
//       </Section>
//       <ToastContainer autoClose={3000} theme={'colored'} />
//     </Container>
//   );
// };

// export default App;

// App.propTypes = {
//   title: PropTypes.string,
// };

import { Layout } from 'components/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { useAuth } from 'hooks';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
// import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));
const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
