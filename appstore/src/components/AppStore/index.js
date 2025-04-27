import {Component} from 'react'

import TabItem from '../TabItem'
import AppItem from '../AppItem'
import './index.css'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=com.facebook.katana',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
    category: 'SOCIAL',
    appLink: 'https://play.google.com/store/apps/details?id=com.facebook.orca',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
    category: 'SOCIAL',
    appLink: 'https://play.google.com/store/apps/details?id=com.whatsapp',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=com.instagram.android',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=com.snapchat.android',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=com.twitter.android',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png',
    category: 'SOCIAL',
    appLink: 'https://play.google.com/store/apps/details?id=com.pinterest',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png',
    category: 'SOCIAL',
    appLink: 'https://play.google.com/store/apps/details?id=com.tencent.mm',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=com.linkedin.android',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
    category: 'SOCIAL',
    appLink:
      'https://play.google.com/store/apps/details?id=org.telegram.messenger',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.yodo1.crossyroad',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.gameimax.superchef',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.rovio.angrybirds',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.fingersoft.hillclimb',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.imangi.templerun',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.sgn.pandadriving.gp',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.capcom.smurfsbubble',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.gradelearning.android',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
    category: 'GAMES',
    appLink:
      'https://play.google.com/store/apps/details?id=com.outfit7.mytalkingtom',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
    appLink: 'https://play.google.com/store/apps/details?id=com.nis.app',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=com.way2news.way2news',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=com.google.android.apps.magazines',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
    appLink: 'https://play.google.com/store/apps/details?id=flipboard.app',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=jp.gocro.smartnews.android',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
    appLink: 'https://play.google.com/store/apps/details?id=bbc.mobile.news.ww',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=com.cnn.mobile.android.phone',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=com.dailywire.android',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
    appLink: 'https://play.google.com/store/apps/details?id=com.apnews',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
    appLink:
      'https://play.google.com/store/apps/details?id=com.particlenews.newsbreak',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
    appLink:
      'https://play.google.com/store/apps/details?id=com.application.zomato',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
    appLink: 'https://play.google.com/store/apps/details?id=in.swiggy.android',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
    appLink: 'https://play.google.com/store/apps/details?id=com.Dominos',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
    appLink: 'https://play.google.com/store/apps/details?id=com.allinone.food',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
    appLink:
      'https://play.google.com/store/apps/details?id=com.instacart.client',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
    appLink:
      'https://play.google.com/store/apps/details?id=com.getsaucey.consumer',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
    appLink: 'https://play.google.com/store/apps/details?id=com.waitrapp.waitr',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
    appLink:
      'https://play.google.com/store/apps/details?id=com.grubhub.android',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
    appLink: 'https://play.google.com/store/apps/details?id=com.mercato',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
    appLink: 'https://play.google.com/store/apps/details?id=com.dot.food',
  },
]

// Write your code here
class AppStore extends Component {
  state = {category: tabsList[0].tabId, searchInput: ''}

  changeTab = tabId => {
    this.setState({category: tabId})
  }

  newinput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {category, searchInput} = this.state
    const filteredApplist = appsList
      .filter(each => each.category === category)
      .filter(app =>
        app.appName.toLowerCase().includes(searchInput.toLowerCase()),
      )

    return (
      <div className="app-store">
        <h1>App Store</h1>

        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.newinput}
          />
        </div>

        <ul className="tabs">
          {tabsList.map(each => (
            <TabItem
              key={each.tabId}
              tabId={each.tabId}
              displayText={each.displayText}
              changeTab={this.changeTab}
              isActive={each.tabId === category}
            />
          ))}
        </ul>

        <ul className="apps-list">
          {filteredApplist.map(each => (
            <AppItem
              key={each.appId}
              name={each.appName}
              imageUrl={each.imageUrl}
              appLink={each.appLink}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default AppStore
