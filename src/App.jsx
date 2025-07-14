import React from 'react';
import { PawPrint, ChevronDown, Bone, Heart, Fish, Calendar, ArrowRight, CheckCircle2, Cat, Dog, Quote } from 'lucide-react';
import mainDog from './assets/one.png'; // Importing the main dog image

// Using the updated and final image URLs
const IMAGE_URLS = {

  heroBoxDog: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  beagle: "https://media.istockphoto.com/id/636475496/photo/portrait-of-brown-puppy-with-bokeh-background.jpg?s=612x612&w=0&k=20&c=Ot63dQOYplm0kLJdlSVWbtKGwGkuZfnfdwH5ry9a6EQ=",
  puppyCareBag: "https://cloud7.de/cdn/shop/files/CARRIERS_GROUP_SHOT_COMP_Mobile_1100px.jpg?v=1723452773&width=780",
  collectionCat: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  frenchBulldogHoodie: "https://static.vecteezy.com/system/resources/thumbnails/029/632/605/small/two-baby-goats-playing-in-the-green-field-free-photo.jpeg", // Now a goat
  spaniel: "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  personWithDog: "https://images.pexels.com/photos/6624021/pexels-photo-6624021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
  return (
    <div className="bg-white font-sans text-brand-text overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center gap-2">
            <div className="bg-brand-blue p-2 rounded-full">
              <PawPrint className="text-white" size={24} />
            </div>
            <h1 className="font-heading text-3xl">PUPP'S</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-gray-600">
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="flex items-center gap-1 hover:text-black">
              Treats <ChevronDown size={16} />
            </a>
            <a href="#" className="hover:text-black">Training</a>
            <a href="#" className="hover:text-black">Accessories</a>
            <a href="#" className="hover:text-black">Grooming</a>
          </nav>
          <button className="border border-black rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors">
            Book Now
          </button>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative grid md:grid-cols-2 items-center py-16">
             {/* Background Grid */}
            <div className="absolute top-0 left-0 w-1/2 h-full border-r border-l border-gray-100 -z-10">
              <div className="h-full w-full border-t border-b border-gray-100" style={{borderRight: '1px solid #f3f4f6', borderLeft: '1px solid #f3f4f6'}}></div>
            </div>

            <div className="space-y-6">
              <div className="relative inline-block">
                <h2 className="font-heading text-7xl md:text-8xl leading-none">
                  PETWELL <br /> CLINIC
                </h2>
                <Heart className="absolute top-1/2 right-[-20px] -mt-4 text-red-500 fill-current" size={48} />
              </div>
              <p className="max-w-sm text-gray-600">
                Training, grooming to nutrition & exercise, there's caring worth often becomes the family.
              </p>
              <button className="bg-brand-yellow rounded-full px-6 py-3 text-sm font-semibold flex items-center gap-2 shadow-md hover:brightness-105 transition-all">
                Book a Schedule <Calendar size={18} />
              </button>
            </div>

            {/* Reworked Image Section for better composition */}
            <div className="relative mt-12 md:mt-0 h-[500px] flex items-center justify-center">
              {/* Background Circle */}
              <div className="absolute w-[450px] h-[450px] bg-brand-blue rounded-full transform -rotate-12"></div>
              
              {/* Main Image - styled to fit the new aspect ratio */}
              <img src={mainDog} alt="Puppies playing" className="relative w-[400px] h-[400px] object-cover rounded-3xl z-10 shadow-lg" />
              
              {/* Decorative elements positioned relative to the container */}
              <img src={IMAGE_URLS.heroBoxDog} alt="Two puppies" className="absolute top-0 left-0 w-28 h-24 object-cover rounded-2xl border-4 border-white z-20 shadow-md" />
              <div className="absolute top-10 right-0 z-20 bg-yellow-300 rounded-full w-32 h-32 flex items-center justify-center text-center font-bold text-yellow-800 text-sm transform -rotate-12 border-2 border-dashed border-yellow-800">
                BETTER AND <br/> HEALTHY <br/> MAKES TOMORROW
              </div>
              <div className="absolute bottom-8 left-0 z-20 bg-[#FFECE2] p-4 rounded-2xl shadow-lg flex items-center gap-4 border border-orange-200">
                <div className="bg-[#FFA980] p-3 rounded-lg"> <Fish className="text-white" size={28} /> </div>
                <div>
                  <h4 className="font-bold">FISH CUTLET</h4>
                  <p className="text-xs text-gray-500">Ingredient: Pumpkin, <br/> Meat, Fish Cutlet</p>
                </div>
              </div>
              <Bone className="absolute bottom-10 right-4 text-gray-300 transform rotate-45 z-20" size={40} />
            </div>
          </section>

          {/* Info Cards Section - Polished for stability */}
          <section className="flex flex-wrap justify-center items-end gap-x-8 gap-y-20 py-16">
           {/* ==================================================================== */}
{/* Polished & Improved Card Component                                   */}
{/* This version includes better shadows, hover effects, and composition */}
{/* ==================================================================== */}
<div className="relative w-fit">
  {/* Beagle Image: Positioned absolutely to peek from behind the card.
      - A slight rotation is added for a more dynamic and playful feel.
      - A drop-shadow helps it stand out from the background. */}
  <img 
    src={IMAGE_URLS.beagle} 
    alt="Beagle dog" 
    className="absolute bottom-0 -left-10 md:-left-20 w-48 h-56 object-contain z-10 transform -rotate-6 drop-shadow-lg" 
  />

  {/* Main Card Container: Contains all the card's content.
      - `ml-10` creates space on the left for the dog image to sit in.
      - Enhanced shadows and hover effects make it feel more premium. */}
  <div className="relative border border-gray-200 rounded-xl p-6 w-80 bg-white z-20 shadow-lg ml-10
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
    
    <div className="relative z-10"> {/* Content wrapper to ensure it stays above the badge's background */}
      <h3 className="font-bold text-lg text-brand-text">LEARN HOW TO CARE PUPPY'S</h3>
      <a href="#" className="text-sm text-gray-500 underline flex items-center gap-1 mt-1">
        Read Article <ArrowRight size={14} />
      </a>
    </div>

    {/* Price Badge: Positioned to hang off the top-right corner. */}
    <div className="absolute -top-5 -right-5 z-30">
      <div className="relative w-28 h-28">
        <div className="absolute inset-0 bg-yellow-300 rounded-full"></div>
        <div className="absolute inset-2 bg-white rounded-full"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-heading text-gray-800">
          <span className="text-xs">GROOMING</span>
          <span className="text-xs">TRAINING</span>
          <span className="text-xs">EXERCISE</span>

        </div>
      </div>
    </div>
  </div>
</div>
            
            <img src={IMAGE_URLS.puppyCareBag} alt="Puppy Care dog food" className="w-40" />
            
<div className="relative w-80 overflow-hidden rounded-xl border border-gray-200 bg-white p-6 
                shadow-lg transition-all duration-300 ease-in-out 
                hover:shadow-xl hover:-translate-y-1">
  
  {/* Decorative Background Icon: Adds thematic texture without distracting.
      - It's positioned absolutely and has a low z-index (z-0) to sit behind the content. */}
  <Bone className="absolute -top-2 -right-2 z-0 text-gray-100" size={80} />

  {/* Content Container: Positioned relatively with a higher z-index to stay on top. */}
  <div className="relative z-10">
    <h3 className="font-bold text-lg text-brand-text">
      BASIC NUTRITION MEAT BALL
    </h3>
    <a href="#" className="group mt-1 inline-flex items-center gap-1 text-sm text-gray-500 underline">
      <span className="transition-colors group-hover:text-brand-orange-dark">Shop Now</span>
      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
    </a>
  </div>
  
</div>
          </section>

          {/* === MODIFIED Well Groomed Pet Collection === */}
          <section className="py-16 text-center">
            <h2 className="font-heading text-5xl">WELL GROOMED PET COLLECTION</h2>
            <p className="text-gray-500 mt-2">We have huge collection of domestic animal.</p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
              {/* Card 1: Cat */}
              <div className="bg-brand-blue rounded-3xl p-4">
                <img src={IMAGE_URLS.collectionCat} alt="Cat" className="w-full h-80 object-cover rounded-2xl" />
                <h4 className="font-bold text-lg mt-4 ml-2">CAT</h4>
              </div>
              {/* Card 2: Changed to Goat */}
              <div className="bg-brand-yellow rounded-3xl p-4">
                <img src={IMAGE_URLS.frenchBulldogHoodie} alt="Goat" className="w-full h-80 object-cover rounded-2xl" />
                <h4 className="font-bold text-lg mt-4 ml-2">GOAT</h4>
              </div>
              {/* Card 3: Spaniel Dog */}
              <div className="bg-brand-blue rounded-3xl p-4">
                <img src={IMAGE_URLS.spaniel} alt="Spaniel Dog" className="w-full h-80 object-cover rounded-2xl" />
                <h4 className="font-bold text-lg mt-4 ml-2">SPANIEL DOG</h4>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Second Part with Grey BG */}
      <div className="bg-brand-gray-bg rounded-t-[50px] -mt-12 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          {/* Best Food Section */}
          <section className="grid md:grid-cols-2 items-center gap-12">
            <div className="relative h-[400px]">
              <div className="absolute w-80 h-80 bg-brand-blue rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <img src={IMAGE_URLS.personWithDog} alt="Person with a dog" className="absolute w-[450px] object-contain bottom-0 left-1/2 -translate-x-1/2 z-10" />
            </div>
            <div className="space-y-4"><h2 className="font-heading text-5xl">THE BEST FOOD FOR YOUR FURRY FRIEND</h2><p className="text-gray-600">To provide your pet balanced and healthy life, to reduce sickness.</p><button className="border border-black rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2 hover:bg-black hover:text-white transition-colors">Order Now <ArrowRight size={16} /></button></div>
          </section>
          
          {/* Assistance Section */}
          <section className="relative bg-brand-yellow my-24 p-8 rounded-3xl flex flex-col md:flex-row items-center">
            <div className="flex-1 flex justify-around items-end w-full">
              {IMAGE_URLS.foodBags.map((bag, index) => (
                <img key={index} src={bag} alt={`Dog food bag ${index+1}`} className="object-contain" style={{height: `${160 - index*16}px`}} />
              ))}
            </div>
            <div className="flex-1 md:pl-8 mt-8 md:mt-0 text-center md:text-left">
              <h3 className="font-heading text-4xl">GET OUR ASSISTANCE TO BENEFIT YOUR PET</h3>
              <p className="mt-2 text-gray-700">Pups's food made with real meat and fish also a good source of antioxidants.</p>
            </div>
            <img src={IMAGE_URLS.smallFluffyDog} alt="Small fluffy dog" className="absolute right-[-40px] bottom-[-20px] w-64 h-auto hidden lg:block" />
          </section>
          
          {/* How We Serve Section */}
          <section className="grid md:grid-cols-2 gap-16 py-12 items-start">
            <div>
              <h2 className="font-heading text-5xl">HOW WE SERVE OUR PET PARENTS</h2>
              <p className="text-gray-500 mt-2">making pet rearing simpler for you. Our entire, well rounded routine is created with love.</p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-yellow-500" /> Adoption</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-yellow-500" /> Fostering</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-yellow-500" /> Vaccination</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-yellow-500" /> Grooming</li>
              </ul>
              <div className="relative mt-8 w-64 h-40">
                <div className="absolute inset-0 bg-red-100 rounded-3xl transform rotate-6"></div>
                <img src={IMAGE_URLS.manWithDog} alt="Man with a small dog" className="absolute inset-0 w-full h-full object-cover rounded-3xl" />
                <Heart className="absolute -bottom-3 -right-3 text-red-500 fill-current bg-white p-1 rounded-full" size={32}/>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg"><img src={IMAGE_URLS.parrotIcon} alt="Parrot" className="w-16 h-16 object-cover rounded-full" /><span className="font-bold">BIRD</span></div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#DAF0FF] border border-blue-300">
                <img src={IMAGE_URLS.catIcon} alt="Cat" className="w-16 h-16 object-cover rounded-full" />
                <div className="flex-grow"><span className="font-bold">CAT</span></div>
                <div className="bg-brand-blue text-xs text-blue-800 font-bold p-2 rounded-lg -rotate-6">YOUR FURRY FRIEND IS WAITING FOR YOU</div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg"><img src={IMAGE_URLS.dogIcon} alt="Dog" className="w-16 h-16 object-cover rounded-full" /><span className="font-bold">DOGS</span></div>
            </div>
          </section>

          {/* What We Care Section */}
          <section className="bg-white rounded-3xl p-8 grid md:grid-cols-2 gap-8 my-20 relative shadow-lg">
            <div className="absolute -top-8 -left-8 bg-yellow-100 p-2 rounded-full border-4 border-white"><Quote size={40} className="text-yellow-500 transform -scale-x-100" /></div>
            <div>
              <div className="flex items-center gap-2"><PawPrint className="text-yellow-500" /><h2 className="font-heading text-4xl">WHAT WE CARE THE MOST?</h2></div>
              <p className="mt-4 text-gray-600">PUPP'S - has a unique pet service, that helps pet owners search, analyzes, and provides precise growth and health.</p>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-sm font-bold text-gray-400">Clients Testimonial</p>
                <p className="mt-4 text-gray-700">Thanks for your patient to take care my Pudding for the whole week during my Takar. Will definitely send my Pudding to you for home boarding again.</p>
                <div className="mt-4 border-t border-gray-200 pt-4"><h5 className="font-bold">SHANNON PAPPERT</h5><p className="text-sm text-gray-500">Adventure Travellers</p></div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <span className="absolute top-0 right-0 font-heading text-7xl text-gray-100 -z-0">01 -</span>
              <img src={IMAGE_URLS.testimonialDog} alt="French bulldog" className="w-64 h-64 object-cover rounded-3xl z-10" />
              <button className="absolute bottom-[-30px] right-4 sm:right-12 bg-black text-white rounded-full px-6 py-3 text-sm font-semibold flex items-center gap-2 shadow-lg hover:bg-gray-800 transition-colors">Book a Schedule <ArrowRight size={18} /></button>
            </div>
          </section>
        </div>
      </div>
      
      {/* Footer Banner */}
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
  );
}