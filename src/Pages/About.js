import React from 'react';
import Button from '../components/Button';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <h2 className='section__title'>About Us</h2>
        <p className='section__subtitle'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className='about__wrapper'>
          <div className='about__image'>
            <img
              src='https://s3-alpha-sig.figma.com/img/48a2/2d78/e0d9e752057b83add969849260076dc0?Expires=1696204800&Signature=T4mF~RgOsbsN0x36-x-O-VmzU7i9QNiTUMufdJOyhN-6oXbxTPOuIulxWZILRJOkerM0s30KlGpEeKa~KxV6LBZ6WYIwdKJ1uqk6kMI1A0aFOJuH546L-CLGmyeaf-i4p3PJRaDXBXQXiJy7fY16gRQ6qOCYmKwWBVThQ6xAKk85vbfyXjWpHh0mxTK6TfEpvf4R47mHgs8NNoV9ma2ojCgcPtB~Nx2zNG2j9tE6FIKPOPtxDYfaS6DZgh9sphidH5JNLElHAhXbuAwC9~Q0dKX0GfUTqopUdOBbqG8xmpv4x3HUVRu-5Y9JNyGGKi6XQsdMH8OUNVE9zwOKteJyRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              alt=''
            />
          </div>
          <div className='about__desc'>
            <h3 className='about__desc-title'>Get Popular NFT</h3>
            <p className='about__desc-subtitle'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar.
            </p>
            <Button text = {"Show More"} className={'about__btn'}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
