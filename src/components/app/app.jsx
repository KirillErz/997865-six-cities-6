
import PropTypes from 'prop-types';
import React from 'react';
import MainPage from '../main-page/main-page';


const App = (props) => {
  const {placeCount} = props;
  return (

    <MainPage
      placeCount={placeCount}
    />
  );
};

App.propTypes = {
  placeCount: PropTypes.array.isRequired,
};

export default App;
