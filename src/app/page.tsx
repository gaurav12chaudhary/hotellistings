import Navbar from '../app/components/navbar';
import Homesection from '../app/components/home';
import Works from '../app/components/howitworks';
import Explore from '../app/components/explore';
import Review from '../app/components/review';
import Reviewbelow from '../app/components/reviewbelow';
import Blog from '../app/components/blog';
import Contact from '../app/components/contact';
import Footer from '../app/components/footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Homesection />
      <Works />
      <Explore />
      <Review />
      <Reviewbelow />
      <Blog />
      <Contact />
      <Footer /> 
    </>
  );
}
