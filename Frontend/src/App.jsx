import React from 'react';
import { PawPrint, ChevronDown, Bone, Heart, Fish, Calendar, ArrowRight, CheckCircle2, Bird, Cat, Dog, Quote } from 'lucide-react';

// You can find similar free-to-use images on sites like Pexels, Unsplash, or Freepik.
// I'm using placeholders from Pexels.
const IMAGE_URLS = {
  mainDog: "https://images.pexels.com/photos/14942636/pexels-photo-14942636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  heroBoxDog: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  beagle: "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  puppyCareBag: "https://i.imgur.com/uPrg2B6.png", // Using a placeholder as original is specific
  macaw: "https://images.pexels.com/photos/40984/blue-and-yellow-macaw-parrot-ara-ararauna-40984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  frenchBulldogHoodie: "https://images.pexels.com/photos/8952541/pexels-photo-8952541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  spaniel: "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  personWithDog: "https://images.pexels.com/photos/6624021/pexels-photo-6624021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  smallFluffyDog: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  foodBags: ["https://i.imgur.com/gkzr276.png", "https://i.imgur.com/L12RA3r.png", "https://i.imgur.com/bWWOy3R.png"], // Placeholders
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
          <nav className="hidden md:flex items-center gap-8">
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
                  YOUR <br /> PUPP'S BEST <br /> FRIEND
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

            <div className="relative mt-12 md:mt-0 h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[450px] h-[450px] bg-brand-blue rounded-full transform -rotate-12"></div>
              </div>
              <img src={IMAGE_URLS.mainDog} alt="Cavalier King Charles Spaniel" className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[480px] object-cover rounded-b-full z-10" />
              <img src={IMAGE_URLS.heroBoxDog} alt="Two puppies" className="absolute top-[-20px] left-[50px] w-28 h-24 object-cover rounded-2xl border-4 border-white z-20" />
              
              <div className="absolute top-16 right-0 z-20 bg-yellow-300 rounded-full w-32 h-32 flex items-center justify-center text-center font-bold text-yellow-800 text-sm transform -rotate-12 border-2 border-dashed border-yellow-800">
                BETTER AND <br/> HEALTHY <br/> MAKES TOMORROW
              </div>
              
              <div className="absolute bottom-12 left-0 z-20 bg-[#FFECE2] p-4 rounded-2xl shadow-lg flex items-center gap-4 border border-orange-200">
                <div className="bg-[#FFA980] p-3 rounded-lg">
                  <Fish className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="font-bold">FISH CUTLET</h4>
                  <p className="text-xs text-gray-500">Ingredient: Pumpkin, <br/> Meat, Fish Cutlet</p>
                </div>
              </div>
               <Bone className="absolute bottom-20 right-4 text-gray-300 transform rotate-45 z-20" size={40} />
            </div>
          </section>

          {/* Info Cards Section */}
          <section className="flex flex-wrap justify-center items-center gap-8 py-16">
            <img src={IMAGE_URLS.beagle} alt="Beagle dog" className="w-48 h-56 object-cover" />
            
            <div className="border border-gray-300 rounded-lg p-6 w-80 relative">
              <h3 className="font-bold text-lg">LEARN HOW TO CARE PUPPY'S</h3>
              <a href="#" className="text-sm text-gray-500 underline flex items-center gap-1">Read Article <ArrowRight size={14} /></a>
              <div className="absolute -top-4 -right-4">
                <div className="relative w-28 h-28">
                  <div className="absolute inset-0 bg-yellow-300 rounded-full"></div>
                  <div className="absolute inset-2 bg-white rounded-full"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-heading text-gray-800">
                    <span className="text-xs">GROOMING</span>
                    <span className="text-xs">TRAINING</span>
                    <span className="text-xs">EXERCISE</span>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 text-xs w-[70px]">
                      $13 <span className="text-gray-400">/MONTH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img src={IMAGE_URLS.puppyCareBag} alt="Puppy Care dog food" className="w-40" />

            <div className="border border-gray-300 rounded-lg p-6 w-80">
              <h3 className="font-bold text-lg">BASIC NUTRITION MEAT BALL</h3>
              <a href="#" className="text-sm text-gray-500 underline flex items-center gap-1">Shop Now <ArrowRight size={14} /></a>
            </div>
          </section>

          {/* Well Groomed Pet Collection */}
          <section className="py-16 text-center">
            <h2 className="font-heading text-5xl">WELL GROOMED PET COLLECTION</h2>
            <p className="text-gray-500 mt-2">We have huge collection of domestic animal.</p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
              <div className="bg-brand-orange-dark rounded-3xl p-4">
                <img src={IMAGE_URLS.macaw} alt="African Macaw" className="w-full h-80 object-cover rounded-2xl" />
                <h4 className="font-bold text-lg mt-4 ml-2">AFRICAN MACAW</h4>
              </div>
              <div className="bg-brand-yellow rounded-3xl p-4">
                <img src={IMAGE_URLS.frenchBulldogHoodie} alt="Spanish Bulldog" className="w-full h-80 object-cover rounded-2xl" />
                <h4 className="font-bold text-lg mt-4 ml-2">SPANISH BULLDOG</h4>
              </div>
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
            <div className="space-y-4">
              <h2 className="font-heading text-5xl">THE BEST FOOD FOR YOUR FURRY FRIEND</h2>
              <p className="text-gray-600">To provide your pet balanced and healthy life, to reduce sickness.</p>
              <button className="border border-black rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
                Order Now <ArrowRight size={16} />
              </button>
            </div>
          </section>
          
          {/* Assistance Section */}
          <section className="relative bg-brand-yellow my-24 p-8 rounded-3xl flex items-center">
            <div className="flex-1 flex justify-around items-end">
              {IMAGE_URLS.foodBags.map((bag, index) => (
                <img key={index} src={bag} alt={`Dog food bag ${index+1}`} className={`h-${40 - index*4} object-contain`} style={{height: `${160 - index*16}px`}} />
              ))}
            </div>
            <div className="flex-1 pl-8">
              <h3 className="font-heading text-4xl">GET OUR ASSISTANCE TO BENEFIT YOUR PET</h3>
              <p className="mt-2 text-gray-700">Pups's food made with real meat and fish also a good source of antioxidants.</p>
            </div>
            <img src={IMAGE_URLS.smallFluffyDog} alt="Small fluffy dog" className="absolute right-[-40px] bottom-[-20px] w-64 h-auto" />
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
              <div className="flex items-center gap-4 p-4 rounded-lg">
                <img src={IMAGE_URLS.parrotIcon} alt="Parrot" className="w-16 h-16 object-cover rounded-full" />
                <span className="font-bold">BIRD</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#DAF0FF] border border-blue-300">
                <img src={IMAGE_URLS.catIcon} alt="Cat" className="w-16 h-16 object-cover rounded-full" />
                <div className="flex-grow">
                    <span className="font-bold">CAT</span>
                </div>
                <div className="bg-brand-blue text-xs text-blue-800 font-bold p-2 rounded-lg -rotate-6">YOUR FURRY FRIEND IS WAITING FOR YOU</div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg">
                <img src={IMAGE_URLS.dogIcon} alt="Dog" className="w-16 h-16 object-cover rounded-full" />
                <span className="font-bold">DOGS</span>
              </div>
            </div>
          </section>

          {/* What We Care Section */}
          <section className="bg-white rounded-3xl p-8 grid md:grid-cols-2 gap-8 my-12 relative">
            <div className="absolute -top-8 -left-8 bg-yellow-100 p-2 rounded-full border-4 border-white">
                <Quote size={40} className="text-yellow-500 transform -scale-x-100" />
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <PawPrint className="text-yellow-500" />
                <h2 className="font-heading text-4xl">WHAT WE CARE THE MOST?</h2>
              </div>
              <p className="mt-4 text-gray-600">
                PUPP'S - has a unique pet service, that helps pet owners search, analyzes, and provides precise growth and health.
              </p>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-sm font-bold text-gray-400">Clients Testimonial</p>
                <p className="mt-4 text-gray-700">
                  Thanks for your patient to take care my Pudding for the whole week during my Takar. Will definitely send my Pudding to you for home boarding again.
                </p>
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <h5 className="font-bold">SHANNON PAPPERT</h5>
                  <p className="text-sm text-gray-500">Adventure Travellers</p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <span className="absolute top-0 right-0 font-heading text-7xl text-gray-100 -z-0">01 -</span>
              <img src={IMAGE_URLS.testimonialDog} alt="French bulldog" className="w-64 h-64 object-cover rounded-3xl z-10" />
              <button className="absolute bottom-[-30px] right-[50px] bg-black text-white rounded-full px-6 py-3 text-sm font-semibold flex items-center gap-2 shadow-lg hover:bg-gray-800 transition-colors">
                Book a Schedule <ArrowRight size={18} />
              </button>
            </div>
          </section>
        </div>
      </div>
      
      {/* Footer Banner */}
      <footer className="bg-brand-yellow-light py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center">
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