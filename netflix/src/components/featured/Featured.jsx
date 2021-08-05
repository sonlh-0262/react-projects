import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="genre">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="adventure">Adventure</option>
            <option value="adventure">Adventure</option>
            <option value="adventure">Adventure</option>
          </select>
        </div>
      )}
      <img
        src="https://cdn.eva.vn/upload/3-2019/images/2019-07-08/hotgirl-bi-ga-qua-dem-10000-usd-hoa-ra-da-lam-me-2-con-anh-bim-sua-gay-58442008_10156041099747761_4701682024413396992_n-1562582168-483-width720height960.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://textpro.me/uploads/worigin/2018/06/11/demo25b1de6503dd24_f4bcac23e82a9596a78caf186b768180.jpg"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloremque aliquam aliquid nulla minus autem, architecto asperiores suscipit totam sit non dignissimos praesentium enim natus accusantium aut esse repudiandae qui.
        </span>

        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
