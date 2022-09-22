import './App.css'
import {Component} from 'react'
// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
const App = () => <SearchHistory />

class SearchHistory extends Component {
  state = {inputValue: '', historyList: initialHistoryList}

  change = event => {
    this.setState({inputValue: event.target.value})
  }

  onDelete = id => {
    const {historyList} = this.state
    const historyListAfterDelete = historyList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({historyList: historyListAfterDelete})
  }

  render() {
    const {inputValue} = this.state
    const {historyList} = this.state
    const searchedList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(inputValue.toLocaleLowerCase()),
    )
    return (
      <div className="bg">
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-container">
            <div className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
            </div>

            <div className="input-container">
              <input
                className="input"
                type="search"
                placeholder="Search history"
                onChange={this.change}
              />
            </div>
          </div>
        </div>

        <div className="history">
          {searchedList.length > 0 ? (
            <div className="card">
              <ul className="list-container">
                {searchedList.map(eachItem => (
                  <SearchItem
                    key={eachItem.id}
                    searchItem={eachItem}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div className="no-item-container">
              <p className="no-item">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const SearchItem = props => {
  const {searchItem, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = searchItem

  const deleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="site-details">
        <img className="logo" src={logoUrl} alt="domain logo" />
        <div className="title-domain">
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <div className="delete">
          <button
            testid="delete"
            type="button"
            className="delete-button"
            onClick={deleteItem}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default App
