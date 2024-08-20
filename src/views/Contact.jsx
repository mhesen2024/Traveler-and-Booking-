import ContactUs from '../components/molecules/ContactUs';
import abdallah from '../asserts/PNG/Abdallah.jpg';  
import tamara from '../asserts/PNG/Tamara.jpg';  
import ahmad from '../asserts/PNG/Ahmad.jpg';  
import rana from '../asserts/PNG/rana.jpg';  



const Home = () => {
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
      role: 'Computer Engnieer',
      email: 'hamada13678@gmail.com'
    },
    {
      avatarUrl: abdallah, 
      name: 'Abdalla Mhesen',
      role: 'Computer Engnieer',
      email: 'abdalla.mhesen2020@gmail.com'
    },
    {
      avatarUrl: rana,
      name: 'Rana Imteer',
      role: 'Computer Engnieer',
      email: 'ranaimteer@gmail.com'
    }
  ];

  return (
    <div>
      <ContactUs contacts={contacts} />
    </div>
  );
};

export default Home;
