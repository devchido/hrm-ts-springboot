import { Link } from 'react-router-dom';

function About() {
  return <div>This is the About page
    <p><Link to="/" className='underline'>Go to dashboard</Link></p>
  </div>;
}

export default About;