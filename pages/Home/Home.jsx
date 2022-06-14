import React from 'react'
import Featured from '../../components/Featured/Featured'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/Navbar/Navbar'
import PropertyList from '../../components/PropertyLIst/PropertyList'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className='homeTitle'>Home Guests Love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
