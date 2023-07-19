import React, { useState } from "react";
import HomeBG from "../assets/image-removebg-preview 1.png";
import "./Home.css";
import Popup from "../components/Popup";
import Blue from "../assets/NicePng_blue-circle-png_163438.png";
import ListGroup from "./ListGroup";
// const CreatePopUpBox = () => {
// };
// };
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [groupName, setGroupName] = useState("");

  const [createcomponent, setCreateComponent] = useState([""]);

  const [selectedcolor, setSelectedColor] = useState("");
  console.log(isOpen);
  const togglePopup = () => {
    console.log("hi");
    setIsOpen(!isOpen);
  };
  console.log(groupName);
  // const CreateGroup = (props) => {
  //   return (
  //     <div>
  //       {console.log(props)}
  //       <button>{props}</button>
  //     </div>
  //   );
  // };

  const createComponent = (props) => {
    console.log("ji");
    setCreateComponent([...createcomponent, props]);
  };

  const selectedColor = (e) => {
    console.log(e);
    setSelectedColor(e);
  };
  return (
    <>
      <div className="home-section">
        <div className="left-section">
          <h1>Pocket Notes</h1>
          <div>
            {/* <h2>Create New Notes Group</h2> */}
            <div>
              {/* <input
                type="button"
                value="Click to Open Popup"
                onClick={togglePopup}
              /> */}
              <button onClick={togglePopup}>Create New Group</button>
              {createcomponent.map((item, i) => (
                <ListGroup text={item} color={selectedcolor} />
              ))}
              {/* <CreateGroup /> */}
              {isOpen && (
                <Popup
                  content={
                    <>
                      <div>
                        <h3>Create New Notes group</h3>
                        <div className="group-name-section">
                          <label htmlFor="groupName">
                            Group Name
                            <input
                              type="text"
                              id="groupname"
                              value={groupName}
                              placeholder="Group Name"
                              onChange={(e) => setGroupName(e.target.value)}
                            />
                          </label>
                        </div>
                        <div className="choose-color-section">
                          {/* <p>Choose color</p> */}
                          <div>Choose Color</div>
                          <div
                            style={{
                              background: "lightskyblue",
                              width: "25px",
                              height: "25px",
                              borderRadius: "50px",
                            }}
                            onClick={(e) =>
                              selectedColor(e.target.style.background)
                            }
                          >
                            {/* <img src={Blue} alt="" width={"10px"} /> */}
                          </div>
                          <div
                            style={{
                              background: "pink",
                              width: "25px",
                              height: "25px",
                              borderRadius: "50px",
                            }}
                            onClick={(e) =>
                              selectedColor(e.target.style.background)
                            }
                          ></div>
                          <div
                            style={{
                              background: "lavender",
                              width: "25px",
                              height: "25px",
                              borderRadius: "50px",
                            }}
                            onClick={(e) =>
                              selectedColor(e.target.style.background)
                            }
                          >
                            {" "}
                          </div>
                          <div
                            style={{
                              background: "lightgreen",
                              width: "25px",
                              height: "25px",
                              borderRadius: "50px",
                            }}
                            onClick={(e) =>
                              selectedColor(e.target.style.background)
                            }
                          >
                            {" "}
                          </div>
                          <div
                            style={{
                              background: "cyan",
                              width: "25px",
                              height: "25px",
                              borderRadius: "50px",
                            }}
                            onClick={(e) =>
                              selectedColor(e.target.style.background)
                            }
                          >
                            {" "}
                          </div>
                        </div>
                        <div id="create-group-btn">
                          <button
                            onClick={() =>
                              createComponent(groupName, selectedColor)
                            }
                          >
                            create
                          </button>
                        </div>
                      </div>
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </div>

          {/* <input
          type="button"
          value="Click to Open Popup"
          onClick={togglePopup}
        /> */}
          {/* <button onClick={togglePopup}> + Create Notes Group</button> */}
        </div>
        <div className="right-section">
          <img src={HomeBG} alt="" />
          <div className="text-section">
            <div>
              <p>Pocket notes</p>
            </div>
            <div>
              <p>
                Send and receive messages without keeping your phone online. Use
                Pocket Notes on up to 4 linked devices and 1 mobile phone
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
