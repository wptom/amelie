import React, {useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import {DataContext} from "../context/DataContext.jsx";
import TextBox from '../components/TextBox.jsx';
import Review from '../components/Review.jsx';
import IconBox from '../components/IconBox.jsx';
import Button from '../components/button.jsx';
const HomePage = () => {
  const data = useContext(DataContext);
  if (!data.homePage) return false;

  return (
    <>
      {/*Section Hero START*/}
      <section id={'hero'} className={'section section--hero'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-lg-3 d-lg-flex align-items-lg-center text-center mb-5 mb-lg-0'}>
              <img src={data.homePage.hero.image} className={'img'} alt={data.homePage.hero.imageAlt}/>
            </div>
            <div className={'col-lg-7 offset-lg-1 d-lg-flex align-items-lg-center text-center text-lg-start'}>
              <TextBox title={data.homePage.hero.title} text={data.homePage.hero.text} titleTag={'h1'}/>
            </div>
          </div>
        </div>
      </section>
      {/*Section Hero END*/}
      {/*Section Reviews START*/}
      <section id={'reviews'} className={'section section--reviews'}>
        <div className={'container'}>
          <div className={'row'}>
            {data.homePage.reviews.map((item, index) => {
              let mbClass = '';
              index + 1 === data.homePage.reviews.length ? mbClass = ' mb-0' : mbClass = ' mb-5';
              return (
                <div className={'col-lg-6 mb-lg-0' + mbClass} key={uuidv4()}>
                  <Review rating={item.rating} text={item.text} author={item.author}/>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/*Section Reviews END*/}
      {/*Section About START*/}
      <section id={'about'} className={'section section--about'}>
        <div className={'container'}>
          <div className={'row mb-5'}>
            <div className={'col-lg-6 d-lg-flex align-items-lg-center text-center text-lg-start order-2 order-lg-1 mb-5 mb-lg-0'}>
              <div>
                <TextBox title={data.homePage.about1.title} text={data.homePage.about1.text} titleTag={'h2'}/>
                {data.homePage.about1.iconBox.map((item) => {
                    return (
                      <IconBox icon={item.icon} title={item.title} description={item.description} key={uuidv4()}/>
                    )
                })}
              </div>
            </div>
            <div className={'col-lg-6 d-lg-flex align-items-lg-center justify-content-lg-center text-center order-1 order-lg-2 mb-5 mb-lg-0'}>
              <img src={data.homePage.about1.image} className={'img'} alt={data.homePage.about1.altImage}/>
            </div>
          </div>
          <div className={'row mb-5'}>
            <div className={'col-lg-6 text-center mb-5 mb-lg-0'}>
              <img src={data.homePage.about2.image} className={'img'} alt={data.homePage.about2.altImage}/>
            </div>
            <div className={'col-lg-6 d-lg-flex align-items-lg-center text-center text-lg-start mb-5 mb-lg-0'}>
              <TextBox title={data.homePage.about2.title} text={data.homePage.about2.text} titleTag={'h2'}/>
            </div>
          </div>
          <div className={'row'}>
            <div className={'col-lg-6 d-lg-flex align-items-lg-center text-center text-lg-start order-2 order-lg-1'}>
              <div>
                <TextBox title={data.homePage.about3.title} text={data.homePage.about3.text} titleTag={'h2'}/>
                <Button type={data.homePage.about3.button.type} text={data.homePage.about3.button.text} link={data.homePage.about3.button.link}/>
              </div>
              </div>
            <div className={'col-lg-6 text-center order-1 order-lg-2 mb-5 mb-lg-0'}>
              <img src={data.homePage.about3.image} className={'img'} alt={data.homePage.about3.altImage}/>
            </div>
          </div>
        </div>
      </section>
      {/*Section About END*/}
      {/*Section Video START*/}
      <section id={'video'} className={'section section--video py-0'}>
        <div className={'container-full'}>
          <div className={'row'}>
            <div className={'col-12'}>
              <video width="100%" height="auto" controls>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      {/*Section Video END*/}
      {/*Section Download START*/}
      <section id={'download'} className={'section section--download'}>
        <div className={'container'}>
          <div className={'row mb-5'}>
            <div className={'col-lg-6 offset-lg-3 text-center'}>
              <TextBox title={data.homePage.download.title} text={data.homePage.download.text} titleTag={'h2'}/>
            </div>
          </div>
          <div className={'row'}>
            <div className={'col-lg-6 offset-lg-3 text-center'}>
              {
                data.homePage.download.button.map((item) => {
                  return (
                    <a href={item.link} key={uuidv4()} className={'d-inline-block mx-2 mb-3 mb-lg-0'} target={'_blank'}>
                      <img src={item.image} alt={item.altImage} />
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
      {/*Section Download END*/}
    </>
  );
};

export default HomePage;
