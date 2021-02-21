/**
 * This source code is the confidential, proprietary information of
 * Amazon/Ring, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Amazon/Ring.
 *
 * Amazon/Ring
 * All Rights Reserved.
 */

import React from 'react'
import _ from 'lodash';
import { Scrollbars } from 'react-custom-scrollbars';
// import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

// Components
import InputSearch from '../../components/InputSearch';
import Posts from '../../components/Posts';

// Styles
import 'react-pro-sidebar/dist/css/styles.css';

/**
 * @file indexContent.js
 * @author Andres Felipe Albarracin Arroyave
 * @description Main Content Post From Reddit
 */

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.url = 'https://www.reddit.com/r/';
    this.sorts = ['top'];

    this.state = {
      currentSubreddit: 'design',
      sort: 'top',
      files: [],
      before: null,
      page: 1,
      limit: 50,
      // after: null,
    };
  }
  
  componentDidMount() {
    const { currentSubreddit } = this.state;
    this.changeSubreddit(currentSubreddit);
  }
  
  nextPage = () => {
    const { currentSubreddit, sort, page, limit } = this.state;
    fetch(`${this.url}${currentSubreddit}/${sort}.json?count=${(page * 10)}&limit=${limit}`)
      .then(res => res.json())
      .then((data) => {
        this.setState(() => ({
          files: data.data.children,
          // after: data.data.after,
          before: data.data.before,
          page: page + 1
        }));
        window.scrollTo(0, 0);
      })
      .catch(console.log)
  }
  
  prevPage = () => {
    const { currentSubreddit, sort, page, before } = this.state;
    fetch(`${this.url}${currentSubreddit}/${sort}.json?count=${(((page - 1) * 25) - 1)}&before=${before}`)
      .then(res => res.json())
      .then((data) => {
        window.scrollTo(0, 0);
        const newState = {
          files: data.data.children,
          after: data.data.after,
          before: data.data.before
        }
        if (page > 1) {
          newState.page = page - 1
        }
        this.setState(newState)
      })
      .catch(console.log)
  }
  
  changeSubreddit(sub) {
    const { sort, limit } = this.state;
    /* 
      * Empty the files so we will show 'Loading...'
      * Reset page to 1
      */
    this.setState({
      files: [],
      currentSubreddit: sub,
      page: 1
    });

    fetch(`${this.url}${sub}/${sort}.json?limit=${limit}`)
    .then(res => res.json())
    .then((data) => {     
      this.setState({
        files: data.data.children,
        // after: data.data.after,
        before: data.data.before
      });
      window.scrollTo(0, 0);
    })
    .catch(console.log)
  }
  
  changeSort(sort) {
    const { currentSubreddit } = this.state;
    /* 
      * Empty the files so we will show 'Loading...'
      * Reset page to 1
      */
    this.setState({
      files: [],
      sort,
      page: 1
    })
    fetch(`${this.url}${currentSubreddit}/${sort}.json`)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        files: data.data.children,
        // after: data.data.after,
        before: data.data.before
      });
      window.scrollTo(0, 0);
    })
    .catch(console.log)
  }
  
  searchSubreddit(subreddit) {
    if (subreddit.length !== 0) {
      this.changeSubreddit(subreddit);
    } else {
      this.changeSubreddit(this.wallpaperSubreddits);
    }
  }
  
  render () {
    const { files } = this.state;
    const searchSubreddit = _.debounce((term) => {this.searchSubreddit(term)}, 600);

    return (
      <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
              <Scrollbars>      
                  <div className="sidebar-item sidebar-search">
                      <div>
                          <div className="input-group">
                            <InputSearch onSearchTermChange={term => searchSubreddit(term)}/>
                          </div>
                      </div>
                  </div>
                  <div className=" sidebar-item sidebar-menu">
                        <ul>
                        <Posts posts={files} />
                      </ul>
                  </div>
              </Scrollbars>
          </div>
      </nav>
    );
  }
}

export default SideBar