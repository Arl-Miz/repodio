import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./state/index";
import "./App.css";
import data from "./data/data";
// import backgr from "./data/claire-rendall-8yVQvIeO4t8-unsplash.jpg";
// import backgr from "./data/claire-rendall-8yVQvIeO4t8-unsplash.jpg";
import "./flexboxgrid-6.3.1/css/flexboxgrid.css";
const key = "563492ad6f91700001000001e12e6de3d88c4d2f93b8cb6da45c5793";
const api_Url = "https://api.pexels.com/v1/search?query=interior&per_page=25";

function App() {
  const dispatch = useDispatch();
  const { increase, cNum, decrease } = bindActionCreators(actions, dispatch);
  const [image, setImage] = useState([]);
  const [isee, setIsee] = useState(null);
  const refurd = useRef(null);
  const accNum = useSelector((state) => state.account);
  //   console.log(state);
  //   console.log(act);
  const fetchUrl = async () => {
    const data = await fetch(api_Url, { headers: { Authorization: key } });
    const result = await data.json();
    return result;
  };
  useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchUrl();
      // .then((e) => console.log(e))
      //   console.log(images);
      setImage(await images.photos);
      return images;
    };
    fetchImages();
  }, []);

  useEffect(() => {
    // console.log(accNum);
    // console.log(accNum);
    if (accNum !== 0) {
      //   console.log("hi");
      refurd.current.style.backgroundImage = `url(im/${accNum.id}.jpg)`;

      //   refurd.current.style.backgroundImage = `url(im/${accNum.id}.jpg)`;
    }
  }, [accNum]);
  const backGroundChanger = (e) => {
    // refurd.current.classList.add("HI");
    // refurd.current.style.backgroundImage = `url(${e.src.original})`;
    // console.log(accNum.img);
  };

  //   console.log(image);
  return (
    <div className="body">
      <section>
        <div
          className="big-con "
          ref={refurd}
          //   style={{
          //     backgroundImage:
          //       " linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)) ,url('/im/7.jpg')",
          //   }}
        ></div>
        <div className="wtfBro">
          {/* <div className="big-con mamad "> */}
          <header className="App-header">
            <h1>Guess what have we done!!!</h1>
          </header>
          <div className="vaed">
            {/* {image.map((e) => { */}
            {data.map((e) => {
              // setIsee("e.id");
              // console.log(e.img);
              return (
                <div
                  className="iam"
                  onClick={() => backGroundChanger(e)}
                  key={e.id.toString()}
                >
                  {/* <div className="trest"></div>; */}
                  <img
                    className="image_container"
                    src={e.img}
                    // src={e.src.original}
                    // src={e.src.portrait}
                    // alt={e.photographer}
                    alt=""
                    onClick={() => cNum(e)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-articles">
        <div className="parent">
          <div className="d1">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              commodi dicta molestias corporis tempora, libero laudantium,
              tempore similique eligendi, facilis adipisci iste impedit atque
              pariatur ea! Animi numquam aliquam dolorem.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae voluptate quo vitae consequatur alias, odio similique
              voluptatem accusantium, ipsam a totam fuga nesciunt nisi in iure
              maxime? Facilis, facere dicta!
            </p>
          </div>
          <div className="d2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corrupti, voluptas tenetur vitae nostrum ratione pariatur itaque!
              Ad quod natus debitis nisi quas perspiciatis ducimus quasi iusto
              aut laudantium, reprehenderit a consectetur consequuntur nobis
              commodi repellendus eligendi cum facere ea eaque. Fuga velit
              doloremque eius dicta reiciendis dolore harum ratione possimus?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
