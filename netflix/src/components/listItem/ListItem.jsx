import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/watch?v=mVUOfsSbCLw"

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://cdn.eva.vn/upload/3-2019/images/2019-07-08/hotgirl-bi-ga-qua-dem-10000-usd-hoa-ra-da-lam-me-2-con-anh-bim-sua-gay-58442008_10156041099747761_4701682024413396992_n-1562582168-483-width720height960.jpg"
        alt=""
      />
      { isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpAltOutlined />
              <ThumbDownAltOutlined />
            </div>

            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit"> +16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste error
              sed quidem officiis accusantium eum quaerat quos modi cumque voluptas
              placeat quia sunt aliquam facere, delectus sequi iure ducimus a.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
        )
      }
    </div>
  );
}
