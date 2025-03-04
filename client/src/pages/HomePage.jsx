import React from 'react'
import WelcomeSection from '../components/WelcomeSection'
import Blogs from '../components/Blogs'
import CategoriesSection from '../components/CategoriesSection'
import NewsletterSection from '../components/NewsletterSection'

const HomePage = () => {
  return (
    <>
    <WelcomeSection/>
    <CategoriesSection/>
    <Blogs/>
    <NewsletterSection/>
    </>
  )
}

export default HomePage