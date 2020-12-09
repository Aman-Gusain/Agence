import React, { useEffect } from 'react'
import './Featuredwork.css'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin)
const Featuredwork = () => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
      })

      const slider = document.querySelector('.slider')

      const trail = document.querySelector('.trail').querySelectorAll('div')

      // Transform value
      let value = 0
      // trail index number
      let trailValue = 0
      // interval (Duration)
      let interval = 54000

      const slide = (condition) => {
         // CLear interval
         clearInterval(start)
         // update value and trailValue
         condition === 'increase' ? initiateINC() : initiateDEC()
         // move slide
         move(value, trailValue)
         // Restart Animation
         animate()
         // start interal for slides back
         start = setInterval(() => slide('increase'), interval)
      }

      // function for increase(forward, next) configuration
      const initiateINC = () => {
         // Remove active from all trails
         trail.forEach((cur) => cur.classList.remove('active'))
         // increase transform value
         value === 80 ? (value = 0) : (value += 20)
         // update trailValue based on value
         trailUpdate()
      }

      // function for decrease(backward, previous) configuration
      const initiateDEC = () => {
         // Remove active from all trails
         trail.forEach((cur) => cur.classList.remove('active'))
         // decrease transform value
         value === 0 ? (value = 80) : (value -= 20)
         // update trailValue based on value
         trailUpdate()
      }

      // function to transform slide
      const move = (S, T) => {
         // transform slider
         slider.style.transform = `translateX(-${S}%)`
         //add active className to the current trail
         trail[T].classList.add('active')
      }

      const tl = gsap.timeline({
         defaults: { duration: 0.6, ease: 'power2.inOut' },
      })
      tl.from('.bg', { x: '-100%', opacity: 0 }).from(
         '.pa',
         { opacity: 0 },
         '-=0.3'
      )
      // .from(".ha", { opacity: 0, y: "30px" }, "-=0.3")

      // function to restart animation
      const animate = () => tl.restart()

      // function to update trailValue based on slide value
      const trailUpdate = () => {
         if (value === 0) {
            trailValue = 0
         } else if (value === 20) {
            trailValue = 1
         } else if (value === 40) {
            trailValue = 2
         } else if (value === 60) {
            trailValue = 3
         } else {
            trailValue = 4
         }
      }

      // Start interval for slides
      let start = setInterval(() => slide('increase'), interval)

      // Next  and  Previous ..button function (SVG icon with different classes)
      document.querySelectorAll('.svg').forEach((cur) => {
         // Assign function based on the className Name("next" and "prev")
         cur.addEventListener('click', () =>
            cur.classList.contains('next')
               ? slide('increase')
               : slide('decrease')
         )
      })

      // function to slide when trail is clicked
      const clickCheck = (e) => {
         // CLear interval
         clearInterval(start)
         // remove active className from all trails
         trail.forEach((cur) => cur.classList.remove('active'))
         // Get selected trail
         const check = e.target
         // add active className
         check.classList.add('active')

         // Update slide value based on the selected trail
         if (check.classList.contains('box1')) {
            value = 0
         } else if (check.classList.contains('box2')) {
            value = 20
         } else if (check.classList.contains('box3')) {
            value = 40
         } else if (check.classList.contains('box4')) {
            value = 60
         } else {
            value = 80
         }
         // update trail based on value
         trailUpdate()
         // transfrom slide
         move(value, trailValue)
         // start animation
         animate()
         // start interval
         start = setInterval(() => slide('increase'), interval)
      }

      // Add function to all trails
      trail.forEach((cur) =>
         cur.addEventListener('click', (ev) => clickCheck(ev))
      )
   })
   return (
      <div className="container8">
         <h2 className="section-heading">
            <span className="left" data-aos="fade-left"></span> Featured Work{' '}
            <span className="right" data-aos="fade-right"></span>
         </h2>
         <div className="slider">
            <div className="box1 box">
               <div className="bg"></div>
               <div className="details">
                  <h2 className="ha">I'm the first box </h2>
                  <p className="pa">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Integer lacinia dui lectus. Donec scelerisque ipsum diam,
                     ac mattis orci pellentesque eget.
                  </p>
                  <Link to="/yellowdoor">
                     <button className="button a">Check Now</button>
                  </Link>
               </div>

               <div className="illustration">
                  <div className="inner">
                     <img
                        className="dummy"
                        src={require('../../../scentra.jpg')}
                        alt=""
                     />
                  </div>
               </div>
            </div>

            <div className="box2 box">
               <div className="bg"></div>
               <div className="details">
                  <h2 className="ha">I'm the second Box</h2>
                  <p className="pa">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Integer lacinia dui lectus. Donec scelerisque ipsum diam,
                     ac mattis orci pellentesque eget.
                  </p>
                  <Link to="/yellowdoor">
                     <button className="button a">Check Now</button>
                  </Link>
               </div>

               <div className="illustration">
                  <div className="inner">
                     <img
                        className="dummy"
                        src={require('../../../scentra.jpg')}
                        alt=""
                     />
                  </div>
               </div>
            </div>

            <div className="box3 box">
               <div className="bg"></div>
               <div className="details">
                  <h2 className="ha">I'm the third Box</h2>
                  <p className="pa">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Integer lacinia dui lectus. Donec scelerisque ipsum diam,
                     ac mattis orci pellentesque eget.
                  </p>

                  <Link to="/yellowdoor">
                     <button className="button a">Check Now</button>
                  </Link>
               </div>

               <div className="illustration">
                  <div className="inner">
                     <img
                        className="dummy"
                        src={require('../../../scentra.jpg')}
                        alt=""
                     />
                  </div>
               </div>
            </div>

            <div className="box4 box">
               <div className="bg"></div>
               <div className="details">
                  <h2 className="ha">I'm the fourth Box</h2>
                  <p className="pa">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Integer lacinia dui lectus. Donec scelerisque ipsum diam,
                     ac mattis orci pellentesque eget.
                  </p>
                  <Link to="/yellowdoor">
                     <button className="button a">Check Now</button>
                  </Link>
               </div>

               <div className="illustration">
                  <div className="inner">
                     <img
                        className="dummy"
                        src={require('../../../scentra.jpg')}
                        alt=""
                     />
                  </div>
               </div>
            </div>

            <div className="box5 box">
               <div className="bg"></div>
               <div className="details">
                  <h2 className="ha">I'm the fifth Box</h2>
                  <p className="pa">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Integer lacinia dui lectus. Donec scelerisque ipsum diam,
                     ac mattis orci pellentesque eget.
                  </p>
                  <Link to="/yellowdoor">
                     <button className="button a">Check Now</button>
                  </Link>
               </div>

               <div className="illustration">
                  <div className="inner">
                     <img
                        className="dummy"
                        src={require('../../../scentra.jpg')}
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>

         <div className="svg prev">
            <img
               className="lft"
               src={require('../../../left-arrow.png')}
               alt=""
            />
         </div>
         <div className="svg next">
            <img
               className="rgt"
               src={require('../../../right-arrow.png')}
               alt=""
            />
         </div>
         <div className="trail">
            <div className="a box1 active"></div>
            <div className="a box2"></div>
            <div className="a box3"></div>
            <div className="a box4"></div>
            <div className="a box5"></div>
         </div>
      </div>
   )
}

export default Featuredwork
