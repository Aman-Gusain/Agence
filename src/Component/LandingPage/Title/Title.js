import React, { useEffect } from 'react'
import './Title.css'
import $ from 'jquery'
import { Route } from 'react-router-dom'

const Title = () => {
   useEffect(() => {
      $('.astroid3').click(function () {
         $('html,body').animate(
            {
               scrollTop: $('.title').offset().top,
            },
            'fast'
         )
      })
      $('.hpscroll').click(function () {
         $('html,body').animate(
            {
               scrollTop: $('.Featuredtext').offset().top,
            },
            'fast'
         )
      })
   })
   return (
      <div className="title">
         <div className="header">
            <div id="hero-text">
               <h1 className="titletext">
                  Brand By Agence is a global creative branding studio founded
                  in India. We make brands future-ready.
               </h1>
               <div>
                  <Route
                     render={({ history }) => (
                        <button
                           className="button"
                           id="abc"
                           onClick={() => {
                              history.push('/about')
                           }}
                        >
                           Read more
                        </button>
                     )}
                  />
               </div>
            </div>
            <div className="hpscroll">
               <span>scroll</span>
               <div className="scrolll"></div>
            </div>
         </div>
         <img
            className="spaceship"
            src={require('../../../planet2 (1).png')}
            alt=""
         />
         <img
            className="homw im"
            src={require('../../../Agence Character together (3).png')}
            alt=""
         />
         <img
            className="astroid3"
            src={require('../../../lab elements3 (1).png')}
            alt=""
         />
      </div>
   )
}

export default Title
