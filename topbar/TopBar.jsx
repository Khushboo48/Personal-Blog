import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
          <div className="topleft">
          <i className="topIcon fa fa-facebook-official"></i>
          <i className="topIcon fa fa-twitter-square"></i>
          <i className="topIcon fa fa-pinterest-square"></i>
          <i className="topIcon fa fa-instagram"></i>
          </div>           
          <div className="topCenter">
             <ul className="topList">
              <li className=" topListItem">HOME</li>
              <li className=" topListItem">ABOUT</li>
              <li className=" topListItem">CONTACT</li>
              <li className=" topListItem">WRITE</li>
              <li className=" topListItem">LOGOUT</li>
           </ul>
          </div>
          <div className="topRight">
           <img 
            className="topImg"
           src="https://th.bing.com/th/id/OIP.Gc94mo4hbciYBDSJwWzsAAHaHa?w=184&h=184&c=7&o=5&pid=1.7"
          alt=""
          />
          
        
          <i className="topSearchIcon fa fa-search"></i>
           </div>
        </div>
          
     );
  }