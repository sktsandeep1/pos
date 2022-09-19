import "./SidebarLeft.css";
import { BiCategory } from "react-icons/bi";
import { BiCircle } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaStickyNote } from "react-icons/fa";

const SidebarLeft = () => {
  return (
    <>
      <aside>
        <div className="top-section">
          <div className="categories">
            <div className="category">
              <h2>All Categories</h2>
              <BiCategory />
            </div>
            {/* <div className="categories-item">FOOD</div>
            <div className="categories-item">FASHION</div>
            <div className="categories-item">ELECTRONICS</div>
            <div className="categories-item">PERSONAL CARE</div> */}
          </div>
        </div>

        <div className="middle-section">
          <div className="middle-section-item">
            <BiCircle />
            <h3>Order</h3>
          </div>
          <div className="middle-section-item">
            <GiReturnArrow />
            <h3>Returns</h3>
          </div>

          <div className="middle-section-item">
            <BsFillCreditCardFill />
            <h3>Checkout</h3>
          </div>

          <div className="middle-section-item">
            <FaDatabase />
            <h3>Stocks</h3>
          </div>
        </div>

        <div className="last-section">
          <div className="last-section-item">
            <FaGift />
            <h3>Loyalty Points</h3>
          </div>
          <div className="last-section-item">
            <IoMdSettings />
            <h3>Settings</h3>
          </div>
          <div className="last-section-item">
            <FaStickyNote />
            <h3>Reports</h3>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarLeft;
