import "./authorInfo.css";
import { useState, useRef, useEffect } from "react";
import ShareIcon from "../../icons/share";
import FBIcon from "../../icons/FB";
import TwIcon from "../../icons/tw";
import PintIcon from "../../icons/pint";

export default function AuthorInfo({ avatar, name, date }) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  // const viewportSize = useRef(window.innerWidth);

  const handleClick = () => {
    setIsShareModalOpen(!isShareModalOpen);
  };

  const resize = () => setWindowSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", resize);
    windowSize < 1024 ? setIsMobile(true) : setIsMobile(false);
    return () => window.removeEventListener("resize", resize);
  }, [windowSize]);

  // if (isShareModalOpen) {
  //   return (
  //     <article className="article__share-modal">
  //       <div className="article__share-text">
  //         <p>Share</p>
  //       </div>
  //       <div className="article__share-icons">
  //         <FBIcon />
  //         <TwIcon />
  //         <PintIcon />
  //       </div>
  //       {isMobile && (
  //         <div className="article__author-share active" onClick={handleClick}>
  //           <div className="article__icon-container--active">
  //             <ShareIcon color="#fff" />
  //           </div>
  //         </div>
  //       )}
  //     </article>
  //   );
  // }

  return (
    <>
      <article className="article__author-info">
        <div className="article__author-avatar">
          <img src={avatar} alt={name} className="article__author-img" />
        </div>
        <div className="article__author-desc">
          <h3 className="article__author-name">{name}</h3>
          <p className="article__author-date">{date} </p>
        </div>
        <div className="article__author-share" onClick={handleClick}>
          <div className="article__icon-container">
            <ShareIcon />
          </div>
        </div>
      </article>
      {/* Share overlay starts here */}
      {isShareModalOpen && (
        <article className="article__share-modal">
          <div className="article__share-text">
            <p>Share</p>
          </div>
          <div className="article__share-icons">
            <FBIcon />
            <TwIcon />
            <PintIcon />
          </div>
          {isMobile && (
            <div className="article__author-share active" onClick={handleClick}>
              <div className="article__icon-container--active">
                <ShareIcon color="#fff" />
              </div>
            </div>
          )}
        </article>
      )}
      {/* Share overlay ends here */}
    </>
  );
}
