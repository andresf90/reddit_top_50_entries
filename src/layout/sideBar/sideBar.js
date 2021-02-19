import React from 'react'
import InputSearch from '../../components/InputSearch';
import Posts from '../../components/Posts';
import _ from 'lodash';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Scrollbars } from 'react-custom-scrollbars';



class SideBar extends React.Component {
  

    constructor(props) {
      super(props);
      this.url = 'https://www.reddit.com/r/';
      this.sorts = ['top'];
    }
      
    state = {
      currentSubreddit: 'design',
      sort: 'top',
      files: [],
      after: null,
      before: null,
      page: 1,
      limit: 50
    };
  
    componentDidMount() {
      this.changeSubreddit(this.state.currentSubreddit);
    }
  
    nextPage = () => {
      fetch(this.url + this.state.currentSubreddit + "/" + this.state.sort + ".json?count=" + (this.state.page * 10) + "&limit=" + this.state.limit)
        .then(res => res.json())
        .then((data) => {
          this.setState(() => ({
            files: data.data.children,
            after: data.data.after,
            before: data.data.before,
            page: this.state.page + 1
          }));
          window.scrollTo(0, 0);
        })
        .catch(console.log)
    }
  
    prevPage = () => {
      fetch(this.url + this.state.currentSubreddit + "/" + this.state.sort + ".json?count=" + (((this.state.page - 1) * 25) - 1) + "&before=" + this.state.before)
        .then(res => res.json())
        .then((data) => {
          window.scrollTo(0, 0);
          let newState = {
            files: data.data.children,
            after: data.data.after,
            before: data.data.before
          }
          if (this.state.page > 1) {
            newState.page = this.state.page - 1
          }
          this.setState(newState)
        })
        .catch(console.log)
    }
  
    changeSubreddit(sub) {
      /* 
       * Empty the files so we will show 'Loading...'
       * Reset page to 1
       */
      this.setState({
        files: [],
        currentSubreddit: sub,
        page: 1
      });
      fetch(this.url + sub + "/" + this.state.sort + '.json?limit=' + this.state.limit)
        .then(res => res.json())
        .then((data) => {     
          this.setState({
            files: data.data.children,
            after: data.data.after,
            before: data.data.before
          });
          window.scrollTo(0, 0);
        })
        .catch(console.log)
    }
  
    changeSort(sort) {
      /* 
       * Empty the files so we will show 'Loading...'
       * Reset page to 1
       */
      this.setState({
        files: [],
        sort: sort,
        page: 1
      })
      fetch(this.url + this.state.currentSubreddit + "/" + sort + '.json')
        .then(res => res.json())
        .then((data) => {
  
          
  
  
          this.setState({
            files: data.data.children,
            after: data.data.after,
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
                         <Posts posts={this.state.files} />
                        
                        </ul>
                    </div>
                </Scrollbars>
            </div>
        </nav>
    
  
        
  
  
      );
    }
  
  }


export default SideBar
