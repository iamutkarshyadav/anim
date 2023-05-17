//import './App.css';
import layerBaseImage from './img/layer-base.png'
import layerMiddleImage from './img/layer-middle.png'
import layerFrontImage from './img/layer-front.png'
import dungeonImage from './img/dungeon.jpg'


import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scrollTop', `${scrollY}px`);
    });
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <header className="header-main">
            <div className="layers">
              <div className="layer-head">
                <div className="caption">To The Best Girlfriend</div>
                <div className="title"> Meri Ayushi</div>
              </div>
              <div className="img-layer layer-base" style={{backgroundImage:`url(${layerBaseImage})`}}></div>
              <div className="img-layer layer-mid" style={{backgroundImage:`url(${layerMiddleImage})`}}></div>
              <div className="img-layer layer-front" style={{backgroundImage:`url(${layerFrontImage})`}}></div>
            </div>
          </header>
          <article className="article-main" style={{ backgroundImage: `url(${dungeonImage})` }}>
            <div className="article-content">
              <h2 className="m-header">To Be Continued...</h2>
              <p className="m-paragraph">
                Yusss, its happening again...
                Dekho Ayushi, Meri English ko thoda ignore krna aur samajhne ki koshish krna.
                Umm, Last time jb bnane baitha tha to files unsaved hi reh gt thi, par is baar
                mai laptop plugin kr ke bna rha..Well, tumko is baar laptop na lana pade isliye thoda
                aur time laga, aur tum next time jb flaunt karogi to view acccha milega.Par mai to kahunga 
                ek baar laptop me jaroor try krna...<br></br>
                Well, maine socha tha ki tumhe din me hi dikha dunga pr mai to so gya aaj...To mudda ye hai ki
                mai thoda sa bura ho gya hu na shyad? But...but .... I want to spend the rest of my life making you happy,
                showing you how much I love you, and creating a life full of adventure and happiness.
                In your arms, I find solace and strength. Your love has taught me to be a better person—to love fiercely, 
                to forgive readily, and to embrace vulnerability. You have seen me at my best and my worst, yet you love 
                me unconditionally, accepting every part of me with open arms.Alrightyyy, Its Scroll time sweetheart.. 
              </p>
            </div>
            
            <div className="copy">
              {/* UTKARSH YADAV */}
            </div>
          </article>
          
           <article className="article-main" style={{ backgroundImage: `url(${dungeonImage})` }}>
            <div className="article-content">
              <h2 className="m-header">UMM... LAST PAKKA</h2>
              <p className="m-paragraph">
                Well, ye site utni acchi nahi bana paya hu, pr kaam chala lena... but I want you to know that you mean
                a lot to me. Your smile, laughter, and touch fill my days with joy and warmth. Being with you is a precious
                gift that I cherish. Your presence inspires me, and I am grateful for the love and support you give me.
                You complete me in ways I never thought possible.. So Rasmalai.. I love you soo much.
              </p>
            </div>
            <div className="copy">
             Tumhara Saddu Engineer
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
