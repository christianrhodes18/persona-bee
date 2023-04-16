import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/jasmin-lee`}>
                  <ProgressiveImage
                    src={require("../images/persona_1.webp")}
                    placeholder={require("../images/persona_1.png")}>
                    {(src) => (
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ transition }}
                        src={src} 
                        alt='Jasmine Lee' 
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div exit={{opacity: 0}} transition={{ transition }} className='information'>
              <div className='title'>Jasmine Lee</div>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
