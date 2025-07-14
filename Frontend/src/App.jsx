import React, { useState } from 'react';
import { PawPrint, Bone, Target, Dog, Cat, Bird, Heart, Check, Linkedin, Facebook, Twitter, Mail, Phone, ArrowRight, ArrowLeft, BoneIcon, ShoppingBag, Calendar, User, VenetianMask } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Helper for class names
import { cn } from "@/lib/utils";

// --- DUMMY API HANDLER ---
// This function simulates a POST request to a dummy API
const handleApiSubmit = async (endpoint, data) => {
  console.log(`Sending data to dummy API endpoint: ${endpoint}`, data);
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const result = await response.json();
    console.log('Dummy API Response:', result);
    alert(`Data submitted successfully! Check the console for details.`);
  } catch (error) {
    console.error('Error submitting to dummy API:', error);
    alert('Failed to submit data. Check the console for errors.');
  }
};


// --- BOOKING MODAL COMPONENT ---
const BookingModal = ({ children, service: initialService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [petName, setPetName] = useState('');
  const [service, setService] = useState(initialService || 'Grooming');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, petName, service };
    handleApiSubmit('/book-schedule', formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-brand-cream font-sans">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-brand-dark">Book a Schedule</DialogTitle>
            <DialogDescription>
              We're excited to see you and your furry friend!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="petName" className="text-right">Pet's Name</Label>
              <Input id="petName" value={petName} onChange={(e) => setPetName(e.target.value)} className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="service" className="text-right">Service</Label>
              <select id="service" value={service} onChange={(e) => setService(e.target.value)} className="col-span-3 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Grooming</option>
                <option>Training</option>
                <option>Vaccination</option>
                <option>Boarding</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90 font-bold">Confirm Booking</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// --- ORDER MODAL COMPONENT ---
const OrderModal = ({ children }) => {
    const [product, setProduct] = useState('Lamb & Salmon');
    const [quantity, setQuantity] = useState(1);
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = { product, quantity, email, orderType: 'Food' };
      handleApiSubmit('/order-food', formData);
    };
  
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-brand-cream font-sans">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl text-brand-dark">Order Pet Food</DialogTitle>
              <DialogDescription>
                The best food for your furry friend, delivered to your door.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="product" className="text-right">Food Type</Label>
                    <select id="product" value={product} onChange={(e) => setProduct(e.target.value)} className="col-span-3 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Lamb & Salmon</option>
                        <option>Meat and Alaskan</option>
                        <option>Chicken & Duck Rice</option>
                    </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="quantity" className="text-right">Quantity</Label>
                    <Input id="quantity" type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">Your Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" placeholder="you@example.com" required />
                </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold">Place Order</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  };
  

const App = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: "Shannon Papert",
      role: "Adventure Travellers",
      text: "Thanks for your patient to take care my Pudding for the whole week. Great care taker, Will definitely sent my Pudding to you for home boarding again.",
      image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1887&auto=format&fit=crop" // French Bulldog
    },
    {
      name: "John Doe",
      role: "Happy Pet Parent",
      text: "The grooming service was fantastic! My golden retriever has never looked better. The staff was so friendly and professional. Highly recommended!",
      image: "https://images.unsplash.com/photo-1590334356883-839849b3a67d?q=80&w=1887&auto=format&fit=crop" // Golden Retriever
    }
  ];

  const currentTestimonial = testimonials[testimonialIndex];

  const nextTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (subscribeEmail) {
        handleApiSubmit('/subscribe', { email: subscribeEmail });
        setSubscribeEmail('');
    }
  };

  const diagonalLineBg = {
    backgroundImage: `url("data:image/svg+xml,%3csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M-1 9L9 -1' stroke='%23e5e7eb' stroke-width='1'/%3e%3c/svg%3e")`,
  };

  return (
    <div className="bg-brand-cream text-brand-dark font-sans overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <PawPrint className="w-8 h-8 text-brand-orange" />
          <span className="font-heading text-3xl font-bold text-brand-dark">PUPP'S</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#" className="hover:text-brand-orange">About</a>
          <a href="#" className="hover:text-brand-orange">Treats</a>
          <a href="#" className="hover:text-brand-orange">Training</a>
          <a href="#" className="hover:text-brand-orange">Accessories</a>
          <a href="#" className="hover:text-brand-orange">Grooming</a>
        </nav>
        <BookingModal>
          <Button className="font-bold text-sm bg-brand-dark text-white rounded-full px-6 py-2 hover:bg-brand-gray">Book Now</Button>
        </BookingModal>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight relative">
              YOUR PUPP'S BEST FRIEND
              <Target className="absolute top-0 -right-2 md:right-32 w-12 h-12 text-brand-orange opacity-80" />
            </h1>
            <p className="text-lg text-gray-600">
              Training, grooming to nutrition & exercise, there's caring worth often becomes the family.
            </p>
            <BookingModal>
                <Button className="bg-brand-yellow text-brand-dark font-bold rounded-full px-8 py-6 text-lg hover:bg-brand-yellow/90">
                    Book a Schedule <Calendar className="ml-2 w-5 h-5" />
                </Button>
            </BookingModal>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-blue rounded-full transform scale-105 blur-xl opacity-30"></div>
            <div className="relative bg-brand-blue rounded-[50px] p-4 flex justify-center">
                <img src="https://i.imgur.com/k26p13f.png" alt="Cavalier King Charles Spaniel" className="w-full max-w-sm" />
            </div>
            <div className="absolute -bottom-8 right-0 bg-brand-orange text-white p-4 rounded-lg shadow-lg flex items-center gap-4 animate-pulse">
                <BoneIcon className="w-8 h-8"/>
                <div>
                    <p className="font-bold">FISH CUTLET</p>
                    <p className="text-xs">Ingredient: Pumpkin, Meat, Fish Cutlet</p>
                </div>
            </div>
             <div className="absolute top-1/2 -left-10 bg-brand-yellow rounded-full w-28 h-28 flex items-center justify-center transform -rotate-12 shadow-lg">
                <p className="font-heading font-bold text-center leading-tight text-brand-dark">BETTER AND HEALTHY</p>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 border-2 border-dashed border-gray-300 rounded-2xl">
                <img src="https://i.imgur.com/g8832gN.png" alt="Beagle" className="w-48 h-48 object-cover"/>
                <div className="text-center md:text-left space-y-2">
                    <p className="text-2xl font-heading font-semibold">LEARN HOW TO CARE PUPPY'S</p>
                    <a href="#" className="text-brand-orange font-bold">Read Article</a>
                </div>
                 <div className="relative ml-auto">
                    <div className="w-32 h-32 border-2 border-gray-300 rounded-full flex items-center justify-center">
                       <p className="font-heading text-3xl font-bold text-brand-dark">$13 <span className="block text-sm font-medium">MONTH</span></p>
                    </div>
                    <div className="absolute top-0 -left-4 text-xs bg-brand-cream px-1">GROOMING</div>
                    <div className="absolute right-0 -bottom-2 text-xs bg-brand-cream px-1">EXERCISE</div>
                    <div className="absolute bottom-0 -left-4 text-xs bg-brand-cream px-1">DRINKING</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 border-2 border-dashed border-gray-300 rounded-2xl">
                <img src="https://i.imgur.com/L1h2MLn.png" alt="Puppy Care Meat Ball" className="w-48 h-48 object-contain"/>
                <div className="text-center md:text-left space-y-2">
                    <p className="text-2xl font-heading font-semibold">BASIC NUTRITION MEAT BALL</p>
                    <a href="#" className="text-brand-orange font-bold">Shop Now</a>
                </div>
            </div>
         </div>
      </section>

      {/* Well Groomed Pet Collection */}
      <section className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold">WELL GROOMED PET COLLECTION</h2>
        <p className="mt-2 text-gray-600">We have huge collection of domestic animal</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-orange/80 rounded-3xl p-8 transform hover:scale-105 transition-transform">
                <img src="https://i.imgur.com/xQirxpM.png" alt="African Macaw" className="mx-auto h-60 object-contain"/>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-white">AFRICAN MACAW</h3>
            </div>
            <div className="bg-brand-yellow/80 rounded-3xl p-8 transform hover:scale-105 transition-transform">
                <img src="https://i.imgur.com/7i2MAOa.png" alt="Spanish Bulldog" className="mx-auto h-60 object-contain"/>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-brand-dark">SPANISH BULLDOG</h3>
            </div>
            <div className="bg-brand-blue/80 rounded-3xl p-8 transform hover:scale-105 transition-transform">
                <img src="https://i.imgur.com/KzChy4J.png" alt="Spaniel Dog" className="mx-auto h-60 object-contain"/>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-white">SPANIEL DOG</h3>
            </div>
        </div>
      </section>
      
      {/* Best Food Section */}
      <section className="container mx-auto px-6 py-16 md:py-24" style={diagonalLineBg}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-brand-blue rounded-full transform scale-100 blur-xl opacity-50"></div>
                <img src="https://images.unsplash.com/photo-1548449339-b6950299195b?q=80&w=1887&auto=format&fit=crop" alt="Woman with dog" className="relative w-full max-w-md rounded-3xl z-10"/>
            </div>
            <div className="space-y-6">
                <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">THE BEST FOOD FOR YOUR FURRY FRIEND</h2>
                <p className="text-lg text-gray-600">To provide your pet balanced and healthy life, to reduce sickness.</p>
                <OrderModal>
                    <Button className="bg-brand-dark text-white font-bold rounded-full px-8 py-6 text-lg hover:bg-brand-gray">
                        Order Now <ShoppingBag className="ml-2 w-5 h-5"/>
                    </Button>
                </OrderModal>
            </div>
        </div>
      </section>

      {/* Assistance Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="bg-yellow-100/50 rounded-3xl p-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center gap-4">
                <img src="https://i.imgur.com/yD8vP3M.png" alt="Pet Food" className="w-1/3 object-contain hover:scale-110 transition-transform" />
                <img src="https://i.imgur.com/tL8eL3W.png" alt="Pet Food" className="w-1/3 object-contain hover:scale-110 transition-transform mt-4" />
                <img src="https://i.imgur.com/gKkRkRo.png" alt="Pet Food" className="w-1/3 object-contain hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center gap-8">
                <img src="https://i.imgur.com/uR1ak3e.png" alt="Cute puppy" className="w-32 h-32 hidden md:block"/>
                <div className="space-y-4">
                    <h3 className="font-heading text-3xl font-bold">GET OUR ASSISTANCE TO BENEFIT YOUR PET</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"/> Pups are rich in vitamins, minerals, and fiber.</li>
                        <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"/> Also a good source of antioxidants.</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* How We Serve Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold">HOW WE SERVE OUR PET PARENTS</h2>
                    <p className="text-gray-600">Making pet parenting simpler for you. Our entire, well rounded routine is created with love.</p>
                    <ul className="space-y-4">
                        {['Adoption', 'Fostering', 'Vaccination', 'Grooming'].map(service => (
                            <li key={service} className="flex items-center gap-3">
                                <span className="bg-green-100 rounded-full p-1.5">
                                    <Check className="w-5 h-5 text-green-600"/>
                                </span>
                                <span className="font-medium text-lg">{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative flex justify-center">
                    <img src="https://images.unsplash.com/photo-1599423921353-52449086bcb8?q=80&w=1887&auto=format&fit=crop" alt="Person holding a small dog" className="w-full max-w-sm rounded-3xl z-10"/>
                    <Heart className="absolute top-10 right-0 w-16 h-16 text-red-400 fill-current opacity-80 transform -rotate-12"/>
                    <Heart className="absolute bottom-10 left-0 w-12 h-12 text-red-300 fill-current opacity-70 transform rotate-12"/>
                </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-2 border-dashed border-gray-300 rounded-3xl p-6 flex items-center justify-between">
                    <h3 className="font-heading text-3xl font-bold">BIRD</h3>
                    <img src="https://i.imgur.com/xQirxpM.png" alt="Parrot" className="w-24 h-24 object-contain"/>
                </div>
                <div className="bg-brand-blue rounded-3xl p-6 flex items-center justify-between text-white relative">
                    <h3 className="font-heading text-3xl font-bold">CAT</h3>
                    <img src="https://i.imgur.com/7d3a2X3.png" alt="Cat" className="w-24 h-24 object-contain"/>
                    <div className="absolute top-1/2 -mt-4 left-0 right-0 bg-white/20 backdrop-blur-sm p-2 text-center text-sm font-bold">Your furry friend is waiting for you</div>
                </div>
                 <div className="border-2 border-dashed border-gray-300 rounded-3xl p-6 flex items-center justify-between">
                    <h3 className="font-heading text-3xl font-bold">DOGS</h3>
                    <img src="https://i.imgur.com/B9TfSjx.png" alt="Dog" className="w-24 h-24 object-contain rounded-full"/>
                </div>
            </div>
        </section>

      {/* Testimonial Section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
            <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-4">
                    <VenetianMask className="w-12 h-12 text-brand-orange"/>
                    <h2 className="font-heading text-3xl font-bold">WHAT WE CARE THE MOST?</h2>
                    <p className="font-heading text-xl font-semibold">PUPP'S — <span className="font-sans font-normal text-base text-gray-600">runs a unique pet service, starts with an anatomic research, analysis, and provides precise growth, and health.</span></p>
                </div>
                <div className="lg:col-span-2 bg-gray-100/80 rounded-2xl p-6 relative">
                    <div className="flex items-start gap-6">
                        <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-24 h-24 object-cover rounded-xl"/>
                        <div className="flex-1">
                            <p className="text-gray-600 mb-4">"{currentTestimonial.text}"</p>
                            <p className="font-bold">{currentTestimonial.name}</p>
                            <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
                        </div>
                    </div>
                     <p className="absolute top-4 left-6 font-heading text-5xl font-bold text-gray-200/80 -z-10">0{testimonialIndex + 1}</p>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <Button onClick={prevTestimonial} variant="outline" size="icon"><ArrowLeft className="w-4 h-4" /></Button>
                        <Button onClick={nextTestimonial} variant="outline" size="icon"><ArrowRight className="w-4 h-4" /></Button>
                    </div>
                </div>
            </div>
        </section>

      {/* Services Banner */}
      <section className="bg-brand-gray text-white py-8">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-around items-center gap-8 font-heading font-bold text-xl">
                <div className="flex items-center gap-3"><PawPrint className="w-6 h-6 text-brand-yellow"/> GROOMING</div>
                <div className="flex items-center gap-3"><Heart className="w-6 h-6 text-brand-yellow"/> HEALTH</div>
                <div className="flex items-center gap-3"><Bone className="w-6 h-6 text-brand-yellow"/> FEEDING</div>
                <div className="flex items-center gap-3"><Heart className="w-6 h-6 text-brand-yellow"/> LOVE</div>
                <div className="flex items-center gap-3"><Dog className="w-6 h-6 text-brand-yellow"/> SITTING</div>
            </div>
        </div>
      </section>

      {/* Footer */}
        <footer className="bg-brand-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div className="col-span-1">
                    <h4 className="font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Training</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Accessories</a></li>
                        <li><a href="#" className="hover:text-white">Grooming</a></li>
                        <li><a href="#" className="hover:text-white">Services</a></li>
                    </ul>
                </div>
                <div className="col-span-1 md:col-span-2 flex flex-col items-center text-center">
                    <div className="flex items-center gap-2">
                        <PawPrint className="w-8 h-8 text-brand-orange" />
                        <span className="font-heading text-3xl font-bold">PUPP'S</span>
                    </div>
                    <p className="mt-4 text-gray-400">Leave your pets in safe Hands</p>
                    <div className="flex gap-4 mt-4">
                        <Button variant="outline" size="icon" className="bg-transparent border-gray-500 hover:bg-white/10"><Linkedin className="w-5 h-5"/></Button>
                        <Button variant="outline" size="icon" className="bg-transparent border-gray-500 hover:bg-white/10"><Facebook className="w-5 h-5"/></Button>
                        <Button variant="outline" size="icon" className="bg-transparent border-gray-500 hover:bg-white/10"><Twitter className="w-5 h-5"/></Button>
                    </div>
                </div>
                 <div className="col-span-1">
                    <h4 className="font-bold mb-4">Subscribe</h4>
                    <form onSubmit={handleSubscribeSubmit} className="flex">
                        <Input 
                            type="email" 
                            placeholder="E-mail" 
                            value={subscribeEmail}
                            onChange={(e) => setSubscribeEmail(e.target.value)}
                            className="bg-brand-gray border-gray-500 rounded-r-none focus:ring-brand-orange" 
                            required
                        />
                        <Button type="submit" className="bg-brand-orange hover:bg-brand-orange/90 rounded-l-none">
                            <ArrowRight className="w-5 h-5"/>
                        </Button>
                    </form>
                    <div className="mt-4 space-y-2 text-gray-400">
                         <p className="flex items-center gap-2"><Mail className="w-5 h-5 text-brand-orange"/> mail@pupps.com</p>
                         <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-brand-orange"/> +202-555-0157</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-sm">
                <p>All Rights Reserved to Rylic Studio 2023</p>
            </div>
        </footer>
    </div>
  );
};

export default App;