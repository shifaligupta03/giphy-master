import PropTypes from 'prop-types';

export const searchResult= PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    full: PropTypes.string.isRequired
})