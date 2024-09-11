import MyProfileCard from '../components/molecules/MyProfileCard';
import abdallah from '../asserts/PNG/Abdallah.jpg';  
import tamara from '../asserts/PNG/Tamara.jpg';  
import ahmad from '../asserts/PNG/Ahmad.jpg';  
import rana from '../asserts/PNG/rana.jpg';  
import bgAbout from '../asserts/PNG/bg-header.png';  
import Laeth from '../asserts/PNG/laeth.jpg'
import Khalid from '../asserts/PNG/khaled.jpg';
import abd from '../asserts/PNG/abd.jpg'
import Ahmad2 from '../asserts/PNG/Ahmad2.jpg'

const About = () => {
  const frontEndTeam = [
    {
      avatarUrl: tamara,
      name: 'Tamara Elyyan',
      role: 'Communication Engineer',
      email: 'TamaraElyyan1@gmail.com',
    },
    {
      avatarUrl: ahmad,
      name: 'Ahmad Al-tell',
      role: 'Computer Engineer',
      email: 'hamada13678@gmail.com',
    },
    {
      avatarUrl: abdallah,
      name: 'Abdalla Mhesen',
      role: 'Computer Engineer',
      email: 'abdalla.mhesen2020@gmail.com',
    },
    {
      avatarUrl: rana,
      name: 'Rana Imteer',
      role: 'Computer Engineer',
      email: 'ranaimteer@gmail.com',
    },
  ];

  const backEndTeam = [
    {
      avatarUrl: Khalid,
      name: 'Khalid Saidi ',
      role: 'Computer Engineer',
      email: 'khalidnidal541@gmail.com',
    },
    {
      avatarUrl: Laeth,
      name: 'Laeth Nueirat',
      role: 'Computer Engineer',
      email: 'laethraed0@gmail.com',
    },
    {
      avatarUrl: abd,
      name: 'Abd Amayrah',
      role: 'Information Technology',
      email: 'abd.amayrah2003@gmail.com',
    },
    {
      avatarUrl: Ahmad2,
      name: 'Ahmed Jaber',
      role: 'Computer Engineer',
      email: 'zalatahmad87@gmail.com',
    },
  ];

  return (
    <div
      className="min-h-screen py-12 text-black bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgAbout})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 rounded-lg p-8 relative z-10">
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-white">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto mt-4 text-gray-200">
  Welcome to Traveler and Booking, your number one source for all things travel. We're dedicated to giving you the very best of travel experiences, with a focus on reliability, customer service, and uniqueness.
</p>
<p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto mt-6 text-gray-200">
  Founded in 2024, Traveler and Booking has come a long way from its beginnings. When we first started out, our passion for providing unforgettable travel experiences drove us to start our own business.
</p>
<p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto mt-6 text-gray-200">
  We now serve customers all over the world and are thrilled that we're able to turn our passion into a website that brings joy and adventure to so many.
</p>
        </section>

        {/* Our Team Section */}
        <section>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-white">
            Our Team
          </h1>

          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">
            Front-End Team
          </h2>
          <MyProfileCard contacts={frontEndTeam} />

          <h2 className="text-3xl sm:text-4xl font-bold text-center mt-12 mb-6 text-white">
            Back-End Team
          </h2>
          <MyProfileCard contacts={backEndTeam} />
        </section>
      </div>
    </div>
  );
};

export default About;
