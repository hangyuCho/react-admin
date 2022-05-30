import { useContext } from 'react'
import { 
  SearchOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined
} from '@mui/icons-material'
import './navbar.scss'
import { DarkModeContext } from '../../context/darkModeContext'

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon"/>
            Engish
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" onClick={()=>dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087525/noticon/uedixpon6rcvcqbtuf0c.gif" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar