import "./header.css"

export default function Header() {
    return (
        <div className="header">
          <div clasName="headerTitles">
              <span className="headerTitleSm">Personal </span>
              <span className="headerTitleLg">Blog</span>
              </div>
              <img
               className="headerImg"
              src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" 
              alt=""
              />
        </div>

           );
         }