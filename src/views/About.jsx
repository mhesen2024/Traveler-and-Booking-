import MyProfileCard from '../components/molecules/MyProfileCard';
import abdallah from '../asserts/PNG/Abdallah.jpg';  
import tamara from '../asserts/PNG/Tamara.jpg';  
import ahmad from '../asserts/PNG/Ahmad.jpg';  
import rana from '../asserts/PNG/rana.jpg';  
import bgAbout from '../asserts/PNG/bg-header.png';  


const About = () => {
  const contacts = [
    {
      avatarUrl: tamara,  
      name: 'Tamara Elyyan',
      role: 'Communication Engineer',  
      email: 'TamaraElyyan1@gmail.com'
    },
    {
      avatarUrl: ahmad,
      name: 'Ahmad Al-tell',
      role: 'Computer Engineer',
      email: 'hamada13678@gmail.com'
    },
    {
      avatarUrl: abdallah, 
      name: 'Abdalla Mhesen',
      role: 'Computer Engineer',
      email: 'abdalla.mhesen2020@gmail.com'
    },
    {
      avatarUrl: rana,
      name: 'Rana Imteer',
      role: 'Computer Engineer',
      email: 'ranaimteer@gmail.com'
    },
  ];

  return (
    <div 
      className="min-h-screen py-12 text-Black bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgAbout})` }} 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 rounded-lg p-8">
        {/* About Us Section */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8">About Us</h1>
          <p className="text-lg sm:text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Welcome to Traveler and Booking, your number one source for all things travel. We're dedicated to giving you the very best of travel experiences, with a focus on reliability, customer service, and uniqueness.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-center max-w-4xl mx-auto mt-6">
            Founded in 2024, Traveler and Booking has come a long way from its beginnings. When we first started out, our passion for providing unforgettable travel experiences drove us to start our own business.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-center max-w-4xl mx-auto mt-6">
            We now serve customers all over the world and are thrilled that we're able to turn our passion into a website that brings joy and adventure to so many.
          </p>
        </section>

        {/* Our Team Section */}
        <section >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center ">Our Team</h1>
          <MyProfileCard contacts={contacts} />
        </section>
      </div>
    </div>
  );
};

export default About;
