import Projects from '../components/projects';
import About from '../components/about';
import Contacts from '../components/contacts';
import { createClient } from 'next-sanity';

export type ProjectType = {
  header: string;
  image: string;
  technologies: string;
  description: string;
  githubLink: string;
  liveAppLink: string;
  _id?: string;
};

export type ListProjectsType = {
  projects: ProjectType[];
};

const Home = ({ projects }: ListProjectsType) => {
  return (
    <div className="p-5">
      <header className="header" id="home">
        <article className="lead article">
          <h1 className="text-center my-5">
            I am a Front End Developer based in London
          </h1>
          <h5 className="text-center">
            I am focussed on
            <strong> ReactJS, TypeScript, JavaScript, HTML, CSS </strong>
            and I can't wait to expand my knowledge learning new things.
          </h5>
        </article>
      </header>
      <section className="my-5" id="projects">
        <h2 className="text-center mb-5">Projects</h2>
        <Projects projects={projects} />
      </section>
      <section className="my-5" id="about">
        <h2 className="text-center mb-3">About me</h2>
        <div className="mb-5 d-flex justify-content-center">
          <div className="article">
            <About />
          </div>
        </div>
      </section>
      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
};

export default Home;

const client = createClient({
  projectId: 'gzcldg84',
  dataset: 'production',
  apiVersion: '2022-11-29',
  useCdn: false,
});

export async function getStaticProps() {
  const projects = await client.fetch(`*[_type == "projects"] | order(order)`);

  return {
    props: {
      projects,
    },
  };
}
