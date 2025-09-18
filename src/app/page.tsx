'use client'

import React, { useState, useEffect } from 'react';
import Header from '@/components/navbar';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RiBrainFill, RiMovie2Fill } from 'react-icons/ri';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { PiCompassToolBold } from "react-icons/pi";
import { FaDollarSign, FaRegImage } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa6';
import { GiFireworkRocket, GiMicrophone } from 'react-icons/gi';
import { BsPersonArmsUp } from 'react-icons/bs';
import { ImMagicWand } from 'react-icons/im';
import { HiSpeakerWave } from 'react-icons/hi2';
import { MdTextFields } from 'react-icons/md';
import { TbContract, TbCube } from 'react-icons/tb';
import ai1 from "@/assets/images/ai1.jpg";
import ai2 from "@/assets/images/ai2.jpg";
import ai3 from "@/assets/images/ai3.jpg";
import ai4 from "@/assets/images/ai4.jpg";
import ai5 from "@/assets/images/ai5.jpg";
import ai6 from "@/assets/images/ai6.jpg";
import ai7 from "@/assets/images/ai7.jpg";
import ai8 from "@/assets/images/ai8.jpg";  

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [theme, setTheme] = useState("light");
  const [showAll, setShowAll] = useState(false);
  
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const heroSlides = [
    {
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image Generation",
      description: "Generate stunning images with our latest AI model, delivering high-quality and diverse visuals.",
      buttonText: "Try WAN 2.2",
      bgImage: ai1,
      bgClass: "bg-gradient-to-br from-blue-600 to-purple-700"
    },
    {
      title: "Open Source",
      subtitle: "Flux.1 Krea",
      description: "We are making the weights to our Flex.1 Kread model open source and accessible to everyone. Join us on this journey.",
      buttonText: "Get Started",
      bgImage: ai2,
      bgClass: "bg-gradient-to-br from-purple-600 to-pink-700"
    },
    {
      title: "Video AI",
      subtitle: "Next-Gen Video Generation",
      description: "Create cinematic videos from text prompts with our advanced AI video generation technology.",
      buttonText: "Create Video",
      bgImage: ai3,
      bgClass: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      title: "Realtime Canvas",
      subtitle: "Live AI Art Creation",
      description: "Paint and create with AI assistance in real-time. Watch your ideas come to life instantly.",
      buttonText: "Start Creating",
      bgImage: ai4,
      bgClass: "bg-gradient-to-br from-cyan-500 to-blue-600"
    },
    {
      title: "AI Enhancer",
      subtitle: "22K Resolution Upscaling",
      description: "Transform your images and videos to ultra-high resolution with our cutting-edge enhancement AI.",
      buttonText: "Enhance Now",
      bgImage: ai5,
      bgClass: "bg-gradient-to-br from-gray-700 to-gray-900"
    },
    {
      title: "Motion Transfer",
      subtitle: "Character Animation AI",
      description: "Bring static images to life by transferring motion from videos to your characters seamlessly.",
      buttonText: "Animate",
      bgImage: ai6,
      bgClass: "bg-gradient-to-br from-green-600 to-teal-700"
    },
    {
      title: "Voice Synthesis",
      subtitle: "AI Audio Generation",
      description: "Generate realistic voices, music, and sound effects with our advanced audio AI models.",
      buttonText: "Try Audio AI",
      bgImage: ai7,
      bgClass: "bg-gradient-to-br from-emerald-500 to-green-600"
    },
    {
      title: "Custom Training",
      subtitle: "Train Your AI Model",
      description: "Create personalized AI models that understand your style, brand, or creative vision perfectly.",
      buttonText: "Start Training",
      bgImage: ai8,
      bgClass: "bg-gradient-to-br from-rose-500 to-pink-600"
    }
  ];

  const tools = [
    {
      name: "Image",
      icon: FaRegImage,
      description: "Generate images with AI. Filters, edit effects",
      badge: "NEW",
      color: "bg-gradient-to-b from-[#496277] via-[#7e92a4] to-[#c8d7e4]",
      href: "#"
    },
    {
      name: "Video",
      icon: FaVideo,
      description: "Generate videos with AI. Filters, edit effects",
      badge: null,
      color: "bg-[#f2af1f]",
      href: "#"
    },
    {
      name: "Realtime",
      icon: GiFireworkRocket,
      description: "Realtime AI rendering and generation",
      badge: null,
      color: "bg-gradient-to-b from-[#30aaf2] via-[#4ac3f8] to-[#9de4fd]",
      href: "#"
    },
    {
      name: "Enhancer",
      icon: ImMagicWand,
      description: "Upscale and enhance images and videos up to 22k",
      badge: "NEW",
      color: "bg-gradient-to-b from-[#101010] via-[#494949] to-[#7b7b7b]",
      href: "#"
    },
    {
      name: "Edit",
      icon: PiCompassToolBold,
      description: "Add or remove objects from images and videos",
      badge: "NEW",
      color: "bg-gradient-to-b from-[#271542] via-[#512f79] to-[#8b71ad]",
      href: "#"
    },
    {
      name: "Video Lipsync",
      icon: GiMicrophone,
      description: "Lip sync videos to any audio",
      badge: null,
      color: "bg-gradient-to-b from-[#244335] via-[#608f8f] to-[#9cb593]",
      href: "#"
    },
    {
      name: "Motion Transfer",
      icon: BsPersonArmsUp,
      description: "Transfer motion to images & characters",
      badge: null,
      color: "bg-[#1a1d1d]",
      href: "#"
    },
    {
      name: "Train",
      icon: RiBrainFill,
      description: "Train new AI to replicate your style, personality or characters",
      badge: null,
      color: "bg-gradient-to-b from-[#be185d] via-[#ec4899] to-[#fbcfe8]",
      href: "#"
    },
    {
      name: "Audio",
      icon: HiSpeakerWave,
      description: "Generate music, sounds, and voice with AI technology",
      badge: "NEW",
      color: "bg-gradient-to-b from-[#059669] via-[#10b981] to-[#6ee7b7]",
      href: "#"
    },
    {
      name: "Text",
      icon: MdTextFields,
      description: "Generate, edit and transform text content with AI",
      badge: null,
      color: "bg-gradient-to-b from-[#1e40af] via-[#3b82f6] to-[#93c5fd]",
      href: "#"
    },
    {
      name: "3D Model",
      icon: TbCube,
      description: "Create and manipulate 3D models and scenes",
      badge: "NEW",
      color: "bg-gradient-to-b from-[#7c2d12] via-[#ea580c] to-[#fed7aa]",
      href: "#"
    },
    {
      name: "Animation",
      icon: RiMovie2Fill,
      description: "Create animated sequences and motion graphics",
      badge: null,
      color: "bg-gradient-to-b from-[#581c87] via-[#a855f7] to-[#ddd6fe]",
      href: "#"
    }
  ];

  const galleryImages = [
    {img: ai1},
    {img: ai2},
    {img: ai3},
    {img: ai4},
    {img: ai5},
    {img: ai6},
    {img: ai7},
    {img: ai8},
  ]

  const displayedTools = showAll ? tools : tools.slice(0, 8);
  const hasMoreTools = tools.length > 8;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />

     <main className="max-w-7xl mx-auto px-6 pb-8 pt-36">
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (typeof window !== 'undefined' && window.innerWidth >= 768 ? 50 : 100)}%)`
              }}
            >
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 flex-shrink-0 px-3"
                >
                  <div
                    className={`
                      h-80 rounded-2xl relative overflow-hidden
                      ${slide.bgClass}
                    `}
                    style={{
                      backgroundImage: `url(${slide.bgImage.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
                    
                    <div className="absolute top-6 left-6">
                      <div className="text-white/80 dark:text-white/90 text-[10px] uppercase tracking-wide">New Image Model</div>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <h2 className="text-3xl md:text-5xl font-bold text-white">{slide.title}</h2>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                        <div className="flex-1 hidden md:block">
                          <h3 className="text-sm md:text-base text-white/90 dark:text-white/95 mb-1 font-semibold">{slide.subtitle}</h3>
                          <p className="text-white/80 dark:text-white/85 text-xs leading-relaxed">{slide.description}</p>
                        </div>
                        
                        <div>
                          <button className="bg-white dark:bg-gray-100 text-sm cursor-pointer text-gray-900 dark:text-gray-800 px-8 py-2 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-200 transition-colors active:scale-95 whitespace-nowrap">
                            {slide.buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-6 px-6">
            <div className='hidden md:block'></div>
            <div className="flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`size-2 cursor-pointer rounded-full transition-colors ${
                    currentSlide === index ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="bg-gray-100 dark:bg-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded-full transition-all duration-200 active:scale-95"
                aria-label="Previous slide"
              >
                <FiChevronLeft className="size-4" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-100 dark:bg-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded-full transition-all duration-200 active:scale-95"
                aria-label="Next slide"
              >
                <FiChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Generate</h2>
            {hasMoreTools && (
              <button 
                onClick={() => setShowAll(!showAll)}
                className="cursor-pointer text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center space-x-1 transition-colors"
              >
                 {showAll ? (
                  <BiChevronUp className="size-4" />
                ) : (
                  <BiChevronDown className="size-4" />
                )}
                <span>{showAll ? 'Show less' : 'Show all'}</span>
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl hover:shadow-md dark:hover:shadow-xl dark:hover:shadow-black/10 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="flex items-start space-x-4 p-4">
                    <div className="flex-[3] flex items-start space-x-2">
                      <div className={`size-10 ${tool.color} rounded-lg flex items-center justify-center my-auto flex-shrink-0 group-hover:scale-105 transition-transform duration-200`}>
                        <IconComponent className="size-5 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white">{tool.name}</h3>
                          {tool.badge && (
                            <span className="bg-blue-500 dark:bg-blue-600 text-white text-[6px] px-2 py-0.5 rounded-full font-medium">{tool.badge}</span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-600 dark:text-gray-400 line-clamp-2">{tool.description}</p>
                      </div>
                    </div>
                    
                    <button className="flex-[1] cursor-pointer bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-full text-xs font-medium transition-colors my-auto flex-shrink-0">
                      Open
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Gallery</h2>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="flex gap-x-1 rounded-full bg-gray-200 dark:bg-gray-700 px-8 py-2 cursor-pointer text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-white transition-all duration-200 text-xs transform">
                <TbContract className='my-auto' />
                <span>Legal</span>
              </button>
              <button className="flex gap-x-1 rounded-full bg-gray-200 dark:bg-gray-700 px-8 py-2 cursor-pointer text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-white transition-all duration-200 text-xs transform">
                <FaDollarSign className='my-auto' />
                <span>Pricing</span>
              </button>
            </div>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm">       
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 rounded-lg sm:rounded-xl hover:scale-95 transition-transform duration-200 cursor-pointer ring-1 ring-white/10 dark:ring-white/5"
                  style={{
                    backgroundImage: `url(${item.img.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;