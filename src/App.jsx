import React from 'react';
// No extra libraries needed for SEO in React 19

import { PawPrint, ChevronDown, Bone, Heart, Fish, Calendar, ArrowRight, CheckCircle2, Cat, Dog, Quote } from 'lucide-react';
import mainDog from './assets/one.png';

// --- SEO: Centralized Business Information from your screenshots ---
const businessInfo = {
  name: "PETWELL CLINIC BUDHANA",
  category: "Veterinarian",
  description: "PetWell Clinic Budhana is a versatile veterinary centre in Budhana, specializing in healthcare for Dogs, Cats and goats. Inspired by the walk-in, transparent, community-focused model of PetWell clinic, it delivers affordable, accessible wellness care, diagnostics, emergency services, routine treatments, and spay/neuter surgeries. Equipped with pharmacy and recovery areas, it streamlines care while emphasizing client education and empathy. Staffed by experienced vets and support by Dr.Pankaj Kumar, the clinic fosters trust through clear communication and visible procedures. With flexible hours and a mission to enhance animal wellbeing and owner confidence, PetWell Clinic Budhana is Budhana's trusted partner.",
  address: {
    street: "391/1, Pachala Pachmi-6",
    city: "Budhana",
    state: "Uttar Pradesh",
    zip: "251309",
    country: "India",
  },
  hours: "Mo, Tu, We, Th, Fr, Sa, Su 09:00-17:00",
  // IMPORTANT: Replace this with your actual phone number for better SEO
  phone: "+91-XXX-XXX-XXXX", 
};

// --- Corrected and Reliable Image URLs ---
const IMAGE_URLS = {
  heroBoxDog: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  beagle: "https://media.istockphoto.com/id/636475496/photo/portrait-of-brown-puppy-with-bokeh-background.jpg?s=612x612&w=0&k=20&c=Ot63dQOYplm0kLJdlSVWbtKGwGkuZfnfdwH5ry9a6EQ=",
  puppyCareBag: "https://cloud7.de/cdn/shop/files/CARRIERS_GROUP_SHOT_COMP_Mobile_1100px.jpg?v=1723452773&width=780",
  collectionCat: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  frenchBulldogHoodie: "https://static.vecteezy.com/system/resources/thumbnails/029/632/605/small/two-baby-goats-playing-in-the-green-field-free-photo.jpeg", // Now a goat
  spaniel: "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  personWithDog: "https://media.istockphoto.com/id/619961796/photo/cute-puppy-and-kitten-on-the-grass-outdoor.jpg?s=612x612&w=0&k=20&c=gzdjAEYibTEVrnvCiJRNXdZKEL2VLOa6deyP1A4R_yY=",
  smallFluffyDog: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  foodBags: ["https://cdn-gacgk.nitrocdn.com/DSVRdlDFGOrFUGrTMTtfhvcydmLcwAOH/assets/images/optimized/rev-f718a3f/jcpacki.com/wp-content/uploads/2023/04/dog-food-bag-1-1024x1024.jpg"],
  manWithDog: "https://images.pexels.com/photos/7210748/pexels-photo-7210748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  testimonialDog: "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  parrotIcon: "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  catIcon: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  dogIcon: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

// Main App Component
export default function App() {
  
  // --- SEO: JSON-LD Structured Data for Rich Snippets ---
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: businessInfo.name,
    description: businessInfo.description,
    image: mainDog, // Using your local image
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zip,
      addressCountry: businessInfo.address.country,
    },
    openingHours: businessInfo.hours,
    telephone: businessInfo.phone,
  };

  return (
    <>
      {/* --- SEO: Head Management with React 19 --- */}
      <title>{`${businessInfo.name} | ${businessInfo.category} in ${businessInfo.address.city}`}</title>
      <meta name="description" content={`Your trusted veterinarian in ${businessInfo.address.city}. We offer expert care for dogs, cats, and goats, from routine wellness to emergency services. Contact ${businessInfo.name} today.`} />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <div className="bg-white font-sans text-brand-text overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <header className="flex justify-between items-center py-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-blue p-2 rounded-full">
                <PawPrint className="text-white" size={24} />
              </div>
              {/* SEO: Using the actual business name */}
              <h1 className="font-heading text-3xl">{businessInfo.name.split(' ')[0]}</h1>
            </div>

            <button className="border border-black rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors">Book Now</button>
          </header>

          <main>
            {/* Hero Section */}
            <section className="relative grid md:grid-cols-2 items-center py-16">
              <div className="absolute top-0 left-0 w-1/2 h-full border-r border-l border-gray-100 -z-10">
                <div className="h-full w-full border-t border-b border-gray-100" style={{borderRight: '1px solid #f3f4f6', borderLeft: '1px solid #f3f4f6'}}></div>
              </div>
              <div className="space-y-6">
                <div className="relative inline-block">
                  <h2 className="font-heading text-7xl md:text-8xl leading-none">{businessInfo.name.split(' ')[0]} <br /> CLINIC</h2>
                  <Heart className="absolute top-1/2 right-[-20px] -mt-4 text-red-500 fill-current" size={48} />
                </div>
                {/* SEO: Using your real business description */}
                <p className="max-w-sm text-gray-600">{businessInfo.description.substring(0, 150)}...</p>
                <button className="bg-brand-yellow rounded-full px-6 py-3 text-sm font-semibold flex items-center gap-2 shadow-md hover:brightness-105 transition-all">Book a Schedule <Calendar size={18} /></button>
              </div>
              <div className="relative mt-12 md:mt-0 h-[500px] flex items-center justify-center">
                <div className="absolute w-[450px] h-[450px] bg-brand-blue rounded-full transform -rotate-12"></div>
                {/* SEO: Descriptive alt text */}
                <img src={mainDog} alt={`Happy pets under the care of ${businessInfo.name}`} className="relative w-[400px] h-[400px] object-cover rounded-3xl z-10" />
                {/* SEO: Descriptive alt text */}
                <img src={IMAGE_URLS.heroBoxDog} alt="Two healthy puppies" className="absolute top-0 left-0 w-28 h-24 object-cover rounded-2xl border-4 border-white z-20 shadow-md" />
                <div className="absolute top-10 right-0 z-20 bg-yellow-300 rounded-full w-32 h-32 flex items-center justify-center text-center font-bold text-yellow-800 text-sm transform -rotate-12 border-2 border-dashed border-yellow-800">BETTER AND <br/> HEALTHY <br/> MAKES TOMORROW</div>
                <div className="absolute bottom-8 left-0 z-20 bg-[#FFECE2] p-4 rounded-2xl shadow-lg flex items-center gap-4 border border-orange-200">
                  <div className="bg-[#FFA980] p-3 rounded-lg"><Fish className="text-white" size={28} /></div>
              
                </div>
                <Bone className="absolute bottom-10 right-4 text-gray-300 transform rotate-45 z-20" size={40} />
              </div>
            </section>

            {/* Info Cards Section */}
            <section className="flex flex-wrap justify-center items-end gap-x-8 gap-y-20 py-16">
              <div className="relative w-fit">
                {/* SEO: Descriptive alt text */}
                <img src={IMAGE_URLS.beagle} alt="A cute beagle puppy" className="absolute bottom-0 -left-10 md:-left-20 w-48 h-56 object-contain z-10 transform -rotate-6 drop-shadow-lg" />
                <div className="relative border border-gray-200 rounded-xl p-6 w-80 bg-white z-20 shadow-lg ml-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                  <div className="relative z-10">
                    <h3 className="font-bold text-lg text-brand-text">LEARN HOW TO CARE PUPPY'S</h3>
                    <a href="#" className="text-sm text-gray-500 underline flex items-center gap-1 mt-1">Read Article <ArrowRight size={14} /></a>
                  </div>
                  <div className="absolute -top-5 -right-5 z-30">
                    <div className="relative w-28 h-28">
                      <div className="absolute inset-0 bg-yellow-300 rounded-full"></div>
                      <div className="absolute inset-2 bg-white rounded-full"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-heading text-gray-800"><span className="text-xs">GROOMING</span><span className="text-xs">TRAINING</span><span className="text-xs">EXERCISE</span></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* SEO: Descriptive alt text */}
              <img src={IMAGE_URLS.puppyCareBag} alt="A collection of stylish pet carriers" className="w-80 md:w-40" />
              <div className="relative w-80 overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                <Bone className="absolute -top-2 -right-2 z-0 text-gray-100" size={80} />
                <div className="relative z-10">
                  <h3 className="font-bold text-lg text-brand-text">BASIC NUTRITION MEAT BALL</h3>
                  <a href="#" className="group mt-1 inline-flex items-center gap-1 text-sm text-gray-500 underline"><span className="transition-colors group-hover:text-brand-orange-dark">Shop Now</span><ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></a>
                </div>
              </div>
            </section>
            
            {/* Pet Collection Section */}
            <section className="py-16 text-center">
              <h2 className="font-heading text-5xl">WELL GROOMED PET COLLECTION</h2>
              {/* SEO: Using your real service area info */}
              <p className="text-gray-500 mt-2">We proudly serve Budhana and surrounding areas.</p>
              <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                <div className="bg-brand-blue rounded-3xl p-4"><img src={IMAGE_URLS.collectionCat} alt="A well-groomed cat" className="w-full h-80 object-cover rounded-2xl" /><h4 className="font-bold text-lg mt-4 ml-2">CAT</h4></div>
                <div className="bg-brand-yellow rounded-3xl p-4"><img src={IMAGE_URLS.frenchBulldogHoodie} alt="A healthy goat" className="w-full h-80 object-cover rounded-2xl" /><h4 className="font-bold text-lg mt-4 ml-2">GOAT</h4></div>
                <div className="bg-brand-blue rounded-3xl p-4"><img src={IMAGE_URLS.spaniel} alt="A happy spaniel dog" className="w-full h-80 object-cover rounded-2xl" /><h4 className="font-bold text-lg mt-4 ml-2">SPANIEL DOG</h4></div>
              </div>
            </section>
          </main>
        </div>

        {/* Second Part with Grey BG */}
        <div className="bg-brand-gray-bg rounded-t-[50px] -mt-12 pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="grid md:grid-cols-2 items-center gap-12">
              <div className="relative h-[400px]">
                {/* SEO: Descriptive alt text */}
                <img src={IMAGE_URLS.personWithDog} alt="A happy puppy and kitten, clients of PetWell Clinic" className="absolute object-cover w-full h-full rounded-3xl z-10" />
              </div>
              <div className="space-y-4"><h2 className="font-heading text-5xl">THE BEST FOOD FOR YOUR FURRY FRIEND</h2><p className="text-gray-600">To provide your pet balanced and healthy life, to reduce sickness.</p><button className="border border-black rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2 hover:bg-black hover:text-white transition-colors">Order Now <ArrowRight size={16} /></button></div>
            </section>
            
           {/* === Polished & Fixed Assistance Section === */}
<section className="relative bg-brand-yellow my-24 p-8 lg:pr-32 rounded-3xl flex flex-col md:flex-row items-center">

  {/* Food Bags Container */}
  <div className="flex-1 flex justify-around items-end w-full">
    {IMAGE_URLS.foodBags.map((bag, index) => (
      <img 
        key={index} 
        src={bag} 
        alt={`Premium pet food bag ${index + 1}`} 
        className="object-contain transition-transform hover:-translate-y-2" 
        style={{height: `${160 - index * 16}px`}} 
      />
    ))}
  </div>

  {/* Text Content Container */}
  <div className="flex-1 md:pl-8 mt-8 md:mt-0 text-center md:text-left">
    <h3 className="font-heading text-4xl">GET OUR ASSISTANCE TO BENEFIT YOUR PET</h3>
   
  </div>

  {/* Peeking Dog Image: Now positioned safely without overlapping content. */}
<img 
  src={IMAGE_URLS.smallFluffyDog} 
  alt="A small, healthy fluffy dog" 
  className="absolute right-4 -bottom- w-32 h-auto hidden lg:block drop-shadow-lg" 
/>

</section>
            
            <section className="grid md:grid-cols-2 gap-16 py-12 items-start">
              <div>
                <h2 className="font-heading text-5xl">HOW WE SERVE PET PARENTS</h2>
                <p className="text-gray-500 mt-2">{businessInfo.description.split('. ')[2]}</p>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-yellow-500" /> Diagnostics</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-yellow-500" /> Emergency Services</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-yellow-500" /> Routine Treatments</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-yellow-500" /> Spay/Neuter Surgeries</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg"><img src={IMAGE_URLS.parrotIcon} alt="Icon for bird care" className="w-16 h-16 object-cover rounded-full" /><span className="font-bold">BIRD</span></div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-[#DAF0FF] border border-blue-300"><img src={IMAGE_URLS.catIcon} alt="Icon for cat care" className="w-16 h-16 object-cover rounded-full" /><div className="flex-grow"><span className="font-bold">CAT</span></div><div className="bg-brand-blue text-xs text-blue-800 font-bold p-2 rounded-lg -rotate-6">YOUR FURRY FRIEND IS WAITING FOR YOU</div></div>
                <div className="flex items-center gap-4 p-4 rounded-lg"><img src={IMAGE_URLS.dogIcon} alt="Icon for dog care" className="w-16 h-16 object-cover rounded-full" /><span className="font-bold">DOGS</span></div>
              </div>
            </section>
          </div>
        </div>
        
        <footer className="bg-brand-yellow-light py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 font-heading text-xl"><PawPrint className="text-orange-400" /> GROOMING</div>
            <div className="flex items-center gap-2 font-heading text-xl"><Bone className="text-green-400" /> HEALTH</div>
            <div className="flex items-center gap-2 font-heading text-xl"><Fish className="text-blue-400" /> FEEDING</div>
            <div className="flex items-center gap-2 font-heading text-xl"><Heart className="text-red-400" /> LOVE</div>
            <div className="flex items-center gap-2 font-heading text-xl"><Dog className="text-purple-400" /> SITTING</div>
          </div>
        </footer>
      </div>
    </>
  );
}