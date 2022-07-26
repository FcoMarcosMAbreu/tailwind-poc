import Head from 'next/head'
import Image from '../components/Image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* <!-- Section 1 --> */}
      <section className="w-full px-3 antialiased bg-indigo-600 lg:px-6" data-tails-scripts="//unpkg.com/alpinejs">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center w-full h-24 select-none" x-data="{ showMenu: false }">
            <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
              <Link href="#_">
                <a className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
                  <span className="p-1 text-xl font-black leading-none text-white select-none"><span>tails</span><span className="text-indigo-300">.</span></span>
                </a>
              </Link>
              <div className="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex" /* :className="{'flex': showMenu, 'hidden': !showMenu }" */>
                <div className="flex-col w-full h-auto h-full overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                  <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700 md:text-indigo-200 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                    <Link href="#">
                      <a className="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center">Home</a>
                    </Link>
                    <Link href="#">
                      <a className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Features</a>
                    </Link>
                    <Link href="#">
                      <a className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Blog</a>
                    </Link>
                    <Link href="#">
                      <a className="inline-block px-0 px-4 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Contact</a>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
                    <Link href="#_">
                      <a className="w-full pl-6 mr-0 text-indigo-200 hover:text-white md:pl-0 md:mr-3 lg:mr-5 md:w-auto">Sign In</a>
                    </Link>
                    <Link href="#_">
                      <a className="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-indigo-600 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent rounded-full hover:bg-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">Sign Up</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div /* @click="showMenu = !showMenu" */ className="absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-gray-900 hover:bg-opacity-10" /* :className="{ 'text-gray-400': showMenu, 'text-gray-100': !showMenu }" */>
                <svg className="w-6 h-6" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak="">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg className="w-6 h-6" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak="">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
            </div>
          </nav>
          <div className="container py-32 mx-auto text-center sm:px-4">
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span className="block">Simplify the way you</span> <span className="relative inline-block mt-3 text-white">design websites</span></h1>
            <div className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">If you are ready to change the way you design websites, then you'll want to use our block builder to make it fun and easy!</div>
            <div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full">
              <input type="text" name="email" placeholder="Email Address" className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none" />
              <span className="relative top-0 right-0 block">
                <button type="button" className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700">
                  Sign Up
                </button>
              </span>
            </div>
            <div className="mt-8 text-sm text-indigo-300">By signing up, you agree to our terms and services.</div>
          </div>
        </div>
      </section>

      {/* <!-- Section 2 --> */}
      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Beautiful Pages to</span>
                  <span className="block text-indigo-600 xl:inline">Tell Your Story!</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">It's never been easier to build beautiful websites that convey your message and tell your story.</p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link href="#_">
                    <a className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                      Try It Free
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  </Link>
                  <Link href="#_">
                    <a className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <Image src="../images/hero-image.jpeg" layout="fill" alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 3 --> */}
      <section className="relative w-full bg-white">
        <div className="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
        <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
          <h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3"><a href="#_">The Project Blog</a></h1>
          <p className="text-lg font-medium text-gray-500 sm:text-2xl">Designs and layouts to help you with your app.</p>
          <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
            <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
              <Link href="#_">
                <Image className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" src="images/quench-satisfying.jpg" layout='fill' alt='' />
              </Link>
              <div className="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
                <Link href="#_">
                  <a className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white">Resources</a>
                </Link>
                <h2 className="mb-5 text-5xl font-bold"><Link href="#_"><a>Refreshing Designs</a></Link></h2>
                <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">Quench satisfying designs to help you stir up emotion and tell a story.</p>
              </div>
            </div>
            <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
              <Link href="#_">
                <Image className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" src="images/orange.jpg" layout='fill' alt='' />
              </Link>
              <div className="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
                <Link href="#_">
                  <a className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white">Lifestyle</a>
                </Link>
                <h2 className="mb-5 text-5xl font-bold"><Link href="#_"><a>Healthier Lifestyle</a></Link></h2>
                <p className="mb-2 text-lg font-normal text-blue-100 opacity-100">Living a healthier lifestyle will help with your productivity and your mind-set.</p>
              </div>
            </div>
            <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
              <Link href="#_">
                <Image className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" src="images/gbc.jpg')" layout='fill' alt='' />
              </Link>
              <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                <Link href="#_">
                  <a className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white">Entertainment</a>
                </Link>
                <h2 className="mb-5 text-5xl font-bold"><Link href="#_"><a>Gaming Evolution</a></Link></h2>
                <p className="mb-2 text-lg font-normal opacity-100 text-yellow-50">Learn about the evolution of gaming and how it started a revolution.</p>
              </div>
            </div>
            <div className="grid grid-cols-12 col-span-12 gap-7">
              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <Link href="#_">
                  <a className="block transition duration-200 ease-out transform hover:scale-110">
                    <Image className="object-cover w-full shadow-sm max-h-56" src="images/workstation.jpg" layout='fill' alt='' />
                  </a>
                </Link>
                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div className="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Inspiration</span>
                  </div>
                  <h2 className="text-base font-bold sm:text-lg md:text-xl"><Link href="#_"><a>Best Workstations of the Year</a></Link></h2>
                  <p className="mt-2 text-sm text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                </div>
              </div>
              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <Link href="#_">
                  <a className="block transition duration-200 ease-out transform hover:scale-110">
                    <Image className="object-cover w-full shadow-sm max-h-56" src="images/snacks.jpg" layout='fill' alt='' />
                  </a>
                </Link>
                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div className="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Food</span>
                  </div>
                  <h2 className="text-base font-bold sm:text-lg md:text-xl"><Link href="#_"><a>Eating for Productivity</a></Link></h2>
                  <p className="mt-2 text-sm text-gray-500">Learn how to be more disciplined in your diet and how you can eat to maximize productivity.</p>
                </div>
              </div>
              <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <Link href="#_">
                  <a className="block transition duration-200 ease-out transform hover:scale-110">
                    <Image className="object-cover w-full shadow-sm max-h-56" src="images/book-design.jpg" layout='fill' alt='' />
                  </a>
                </Link>
                <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div className="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Resources</span>
                  </div>
                  <h2 className="text-base font-bold sm:text-lg md:text-xl"><Link href="#_"><a>A Design Mind-set</a></Link></h2>
                  <p className="mt-2 text-sm text-gray-500">What does it mean to have a design mind-set? Learn how to improve your eye for design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 4 --> */}
      <section className="flex items-center justify-center py-20 bg-white min-w-screen">
          <div className="px-16 bg-white">
              <div className="container flex flex-col items-start mx-auto lg:items-center">
                <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">Don't just take our word for it</p>
                <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                    </path>
                  </svg>
                  See what others are saying
                </h2>
                <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>
                  <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                    <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                          <Image src="images/photo-1527980965255-d3b416303d12.avif" className="object-cover w-full h-full" layout='fill' alt='' />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <h4 className="font-bold text-gray-800">John Doe</h4>
                          <p className="text-gray-600">CEO of Something</p>
                        </div>
                      </div>
                      <blockquote className="mt-8 text-lg text-gray-500">"This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"</blockquote>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                          <Image src="images/photo-1544725176-7c40e5a71c5e.avif" className="object-cover w-full h-full" layout='fill' alt='' />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <h4 className="font-bold text-gray-800">Jane Doe</h4>
                          <p className="text-gray-600">CTO of Business</p>
                        </div>
                      </div>
                      <blockquote className="mt-8 text-lg text-gray-500">"Thanks for creating this service. My life is so much
                          easier.
                          Thanks for making such a great product."</blockquote>
                    </div>
                      <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                        <div className="flex items-center justify-center">
                          <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                            <Image src="images/photo-1545167622-3a6ac756afa4.avif" className="object-cover w-full h-full" layout='fill' alt='' />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h4 className="font-bold text-gray-800">John Smith</h4>
                            <p className="text-gray-600">Creator of Stuff</p>
                          </div>
                        </div>
                        <blockquote className="mt-8 text-lg text-gray-500">"Packed with awesome content and exactly what I was
                              looking
                              for. I would highly recommend this to anyone."</blockquote>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* <!-- Section 5 --> */}
      <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
          <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center md:flex-row">

                  <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                      <p className="font-medium text-blue-500 uppercase">Building Businesses</p>
                      <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                          Changing The Way People Do Business.
                      </h2>
                      <p className="text-xl text-gray-600 md:pr-16">Learn how to engage with your visitors and teach them about your mission. We're revolutionizing the way customers and businesses interact.</p>
                  </div>

                  <div className="w-full mt-16 md:mt-0 md:w-2/5">
                      <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                          <h3 className="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
                          <input type="text" name="email" className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Email address" />
                          <input type="password" name="password" className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Password" />
                          <div className="block">
                              <button className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">Log Me In</button>
                          </div>
                          <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href="#_" className="text-blue-500 underline">Sign up here</a></p>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* <!-- Section 6 --> */}
      <section className="py-24 bg-white">
          <div className="px-8 mx-auto max-w-7xl lg:px-16">
              <h2 className="mb-4 text-xl font-bold md:text-3xl">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
                  <div>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">What is Tails</h5>
                      <p>Tails is a drag and drop page builder built on Top of TailwindCSS. You can drop components to create a page that you can export.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Can I try it for Free?</h5>
                      <p>Absolutely, you can try out tails for free; however, if you wish to access all the components and export the page you'll need to upgrade your account.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Where do I go to upgrade my account?</h5>
                      <p>
                          You can upgrade your account by visiting <Link  href="https://devdojo.com/pro" rel="noreferrer"><a className="text-indigo-500 underline">The Pro Upgrade Page</a></Link>. You will also gain access to many other applications and sections of the site.
                          <Link href="https://help.hellonext.co/faq/startup-eligibility/" rel="noreferrer" target="_blank"><a>here</a></Link>.
                      </p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">How long will I have access to Tails</h5>
                      <p>
                          You will have unlimited access to all your pre-built pages; however, if you want to be able to download and export your pages, you'll need a pro account.
                          <Link href="https://paddle.com" rel="noreferrer" target="_blank"><a>Paddle</a></Link> for processing payments.
                      </p>
                  </div>
                  <div>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">How do I implement into my project</h5>
                      <p>Implementation in your project is very simple. You can use the exported page as a starting point, or you can copy and paste the HTML into your own page.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">What is the license on the pages?</h5>
                      <p>You have unlimited use to the templates used in Tails; however, you cannot re-use the templates to sell for others to use.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">Can I cancel my account if I not longer need it?</h5>
                      <p>Of course, you can feel free to cancel your account at anytime, and you can feel free to come back and upgrade again whenever you're ready.</p>
                      <h5 className="mt-10 mb-3 font-semibold text-gray-900">What if I need help with my project?</h5>
                      <p>If you need assistance implementing the templates into your project you can contact support or you can visit our <a href="https://devdojo.com/questions" className="text-indigo-500 underline">question section</a>.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* <!-- Section 7 --> */}
      <section className="bg-white">
          <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
              <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                  <div className="px-5 py-2">
                      <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          About
                      </a>
                  </div>
                  <div className="px-5 py-2">
                      <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          Blog
                      </a>
                  </div>
                  <div className="px-5 py-2">
                      <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          Team
                      </a>
                  </div>
                  <div className="px-5 py-2">
                      <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          Pricing
                      </a>
                  </div>
                  <div className="px-5 py-2">
                      <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          Contact
                      </a>
                  </div>
                  <div className="px-5 py-2">
                      <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                          Terms
                      </a>
                  </div>
              </nav>
              <div className="flex justify-center mt-8 space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Dribbble</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
              <p className="mt-8 text-base leading-6 text-center text-gray-400">
                © 2022 MarcosAbreu.net All rights reserved.
              </p>
          </div>
      </section>
    </div>
  )
}
