import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageBox from "@/components/ImageBox";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Scalable Solutions.",
  description:
    "Get tailored software solutions for your business. Our expert developers create secure, scalable, and high-performance software for web, mobile, and enterprise needs.",
    alternates : {
      canonical : "https://verticalclick.us/our-services/software-development"
    },
    openGraph : {
      title : "Custom Software Development Services | Scalable Solutions.",
      description : "Get tailored software solutions for your business. Our expert developers create secure, scalable, and high-performance software for web, mobile, and enterprise needs.",
      url : "https://verticalclick.us/our-services/software-development",
      type : 'website',
      images : [
        {
          url : 'https://verticalclick.us/logo.svg',
          height : 630,
          width : 1200,
          alt : 'Vertical Click'
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Software Development Services | Scalable Solutions.",
      description: "Get tailored software solutions for your business. Our expert developers create secure, scalable, and high-performance software for web, mobile, and enterprise needs.",
      images: ["https://verticalclick.us/logo.svg"],
    },
};

const SoftwareDevPage = () => {
  const data: {
    title: string;
    desc: string;
    image: string;
    orientation: "left" | "right";
  }[] = [
    {
      title: "Requirement Analysis & Planning",
      desc: "We start by understanding your business needs and defining the project scope, goals, and timeline.",
      image: "/images/software-development/img1.png",
      orientation: "right",
    },
    {
      title: "UI/UX Design & Prototyping",
      desc: "Our expert designers create user-friendly interfaces that offer seamless navigation and an engaging user experience.",
      image: "/images/software-development/img2.png",
      orientation: "left",
    },
    {
      title: "Software Development & Coding",
      desc: "We use modern technologies like Python, Java, .NET, React, Angular, and Node.js to build secure and efficient software solutions.",
      image: "/images/software-development/img3.png",
      orientation: "right",
    },
    {
      title: "Testing & Quality Assurance",
      desc: "We conduct rigorous testing to eliminate bugs and ensure a flawless user experience.",
      image: "/images/software-development/img4.png",
      orientation: "left",
    },
    {
      title: "Deployment & Maintenance",
      desc: "Our team handles secure deployment and offers ongoing support, updates, and enhancements for long-term performance.",
      image: "/images/software-development/img5.png",
      orientation: "right",
    },
  ];

  return (
    <main>
      <Header />
      <Container>
        <HeroSection
          title="Software Development"
          subtitle="Innovative Software Solutions to"
          pinkBgText="Drive Business Growth"
          description="In today’s competitive digital world, having the right custom software solutions can give your business an edge. At Vertical Click, we specialize in software development services in Euless, Texas, USA, delivering custom, scalable, and high-performance solutions tailored to your business needs. Whether you need web applications, mobile apps, or enterprise software, our team ensures cutting-edge technology and seamless integration."
        />
        <section className="rounded-2xl bg-black p-8 text-white md:p-16">
          <h2 className="mb-4 text-4xl font-medium uppercase xl:text-5xl">
            Why Choose Vertical Click for Software Development?
          </h2>
          <p className="mb-4 font-sans text-lg font-normal md:text-xl xl:text-2xl">
            As a leading software development company in Euless, TX, we focus on
            building user-friendly, secure, and innovative software solutions
            that enhance business operations and improve efficiency.
          </p>
          <ul className="font-sans text-lg font-normal md:text-xl xl:text-2xl">
            <li>
              ✅ Custom Software Development – Tailored solutions to meet unique
              business requirements.
            </li>
            <li>
              ✅ Mobile App Development – High-performance iOS & Android
              applications.
            </li>
            <li>
              ✅ Web Application Development – Responsive and scalable web
              solutions.
            </li>
            <li>
              ✅ Enterprise Software Development – Business automation, CRM,
              ERP, and HRM systems.
            </li>
            <li>
              ✅ Cloud-Based Solutions – Secure and scalable cloud applications.
            </li>
            <li>
              ✅ AI & Machine Learning Integration – Intelligent automation and
              predictive analytics.
            </li>
          </ul>
        </section>
        <Divider />
        {/* Our Game Development Process */}
        <section>
          <h2 className="mb-4 text-center text-5xl font-bold uppercase lg:text-6xl xl:text-7xl">
            Our Software Development Process
          </h2>
          <div className="space-y-8">
            {data.map((item, index) => (
              <ImageBox
                key={index}
                title={item.title}
                description={item.desc}
                image={item.image}
                imageOrientation={item.orientation}
              />
            ))}
          </div>
        </section>
        <Divider />
      </Container>
      <Footer />
    </main>
  );
};

export default SoftwareDevPage;
