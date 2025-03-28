import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/HeroSection";
import Divider from "@/components/Divider";
import Container from "@/components/Container";
import TextCardList from "@/components/TextCardList";

const TextCardArr = [
  {
    headerText : 'Custom Mobile App Development' , 
    upperText : 'We create custom mobile applications that offer seamless user experiences and innovative features to enhance your business operations.' , 
    checkList : [
                   'Native & Cross-Platform Development (iOS & Android)' , 
                   'User-Centric UI/UX Design' , 
                   'Fast, Secure & Scalable Apps',
                   'Feature-Rich Functionality & Custom APIs',
                   'App Store Deployment & Optimization'
                  ] , 
    bottomText : 'Our apps are designed to engage users, boost customer retention, and enhance brand value.'
  },
  {
    headerText : 'Android App Development' , 
    upperText : 'Reach a wider audience with feature-packed Android applications that perform across all devices.' , 
    checkList : [
                   'Java & Kotlin Development' , 
                   'Google Play Store Optimization' , 
                   'Custom Android UI/UX Design',
                   'Cloud-Based & AI-Integrated Apps',
                   'Wearable & IoT App Development'
                  ] , 
    bottomText : 'Our Android apps are designed for optimal performance, security, and user engagement.'
  },
  {
    headerText : 'Cross-Platform App Development' , 
    upperText : 'Reach a wider audience with feature-packed Android applications that perform across all devices.' , 
    checkList : [
                   'Java & Kotlin Development' , 
                   'Google Play Store Optimization' , 
                   'Custom Android UI/UX Design',
                   'Cloud-Based & AI-Integrated Apps',
                   'Wearable & IoT App Development'
                  ] , 
    bottomText : 'Our Android apps are designed for optimal performance, security, and user engagement.'
  },
  {
    headerText : 'Cross-Platform App Development' , 
    upperText : 'Save time and cost with cross-platform apps that work seamlessly on both iOS and Android devices.' , 
    checkList : [
                   'React Native, Flutter, and Xamarin Development' , 
                   'Unified Codebase for Multiple Platforms' , 
                   'Consistent UI/UX Across Devices',
                   'Faster Development & Deployment',
                   'Cost-Effective & Scalable Solutions'
                  ] , 
    bottomText : 'Cross-platform apps ensure maximum reach with reduced development time and cost.'
  },
  {
    headerText : 'Enterprise App Development' , 
    upperText : 'Enhance business efficiency with custom enterprise apps tailored to your operational needs.' , 
    checkList : [
                   'Cloud-Based Business Solutions' , 
                   'CRM & ERP Mobile Apps' , 
                   'Data Security & Compliance',
                   'AI & Machine Learning Integration',
                   'Employee & Customer Portals'
                  ] , 
    bottomText : 'Our enterprise solutions help businesses streamline workflows and improve productivity.'
  },
  {
    headerText : 'E-Commerce App Development' , 
    upperText : 'Boost online sales with a custom e-commerce mobile app designed for seamless shopping experiences.' , 
    checkList : [
                   'Custom E-Commerce App Development' , 
                   'Secure Payment Gateway Integration' , 
                   'User-Friendly Product Navigation',
                   'Real-Time Order Tracking & Notifications',
                   'Mobile Wallet & Subscription Features'
                  ] , 
    bottomText : 'We develop secure and engaging e-commerce apps that increase customer retention and sales.'
  },
  {
    headerText : 'App Maintenance & Support' , 
    upperText : 'We provide ongoing support to ensure your app runs smoothly and stays updated.' , 
    checkList : [
                   'Performance Optimization' , 
                   'Bug Fixes & Security Updates' , 
                   'New Feature Implementation',
                   ' App Store Compliance & Updates',
                   'User Feedback & Optimization'
                  ] , 
    bottomText : 'With our comprehensive app maintenance services, your app will stay ahead of the competition.'
  },
  
]

const AppDev = () => {
  return(
    <React.Fragment>
    <Header />
    <HeroSection
      title="App Development"
      subtitle="Innovative Mobile App Solutions  "
      pinkBgText="for Businesses"
      description="In today’s digital world, having a mobile app is no longer optional—it’s essential. A well-designed app enhances customer engagement, streamlines business operations, and increases revenue. At Vertical Click, we specialize in custom app development services, delivering high-performance, user-friendly, and scalable mobile apps that drive business success.
                   Whether you need an iOS, Android, or cross-platform app, our team of expert developers creates feature-rich and visually appealing applications tailored to your business goals."
      />
    <Container>
      <main className="">
         <TextCardList
            TextCardItems = {TextCardArr}
            title = 'Our App Development Services'
         />
        <Divider />
        <section className="rounded-md bg-black p-8 text-white md:p-14">
          <h2 className="text-4xl font-medium md:text-5xl">
          Why Choose Vertical Click for App Development?
          </h2>
          <p className="mt-5 text-lg font-normal">
             ✔ Custom Solutions – Tailored app development to meet your unique business needs. <br/>
             ✔ User-Friendly Design – Intuitive UI/UX for enhanced customer engagement. <br/>
             ✔ Scalable & Secure – Apps built for growth with top security standards.<br/>
             ✔ Seamless Performance – Fast, smooth, and highly responsive applications.<br/>
             ✔ End-to-End Development – From concept to deployment and maintenance.<br/>
          </p>
        </section>
      </main>
      <Divider />
    </Container>
    
    <Footer />
  </React.Fragment>
  )
};

export default AppDev;
