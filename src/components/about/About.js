import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactTable from 'react-table';
import styles from './About.scss';
import 'react-table/react-table.css';

export default class About extends Component {
  componentDidMount() {
    // only fetch the data if there is no data
    if (!this.props.data) this.props.getData();
  }

  render() {
    const { data } = this.props;
    const mock = [{
      id: '1',
      email: 'mtooker0@icq.com',
      username: 'Monique Tooker',
      password: 'UBq4RNbQEv',
      avatar: 'http://dummyimage.com/237x212.jpg/ff4444/ffffff',
    }];
    const columns = [{
      Header: 'id',
      accessor: 'id' // String-based value accessors!
    }, {
      Header: 'Sales',
      accessor: 'email' // String-based value accessors!
    }, {
      Header: 'Tip Out',
      accessor: 'avatar' // String-based value accessors!
    }];
    if (!data) return 'Loading async data...';

    return (
      <div className={styles.About}>
        <h1>About page</h1>
        <ReactTable
          data={mock}
          columns={columns}
        />
        <p>
          Async Text:
          {' '}
          {data.text}
        </p>
      </div>
    );
  }
}

About.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
  getData: PropTypes.func.isRequired
};

About.defaultProps = {
  data: null
};
