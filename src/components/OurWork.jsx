import assets from '../assets/assets';
import Title from './Title';

const OurWork = () => {
  const workData = [
    {
      title: 'Mobile markething',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates dolores!',
      image: assets.work_mobile_app
    },
    {
      title: 'Fitness industry',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, necessitatibus!',
      image: assets.work_fitness_app
    },
    {
      title: 'CMS Systems',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur corrupti nesciunt perspiciatis distinctio!',
      image: assets.work_dashboard_management
    }
  ];

  return (
    <div id="our-work" className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">
      <Title title="Our latest Projects" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis officia nam officiis?" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <div key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer">
            <img src={work.image} className="w-full rounded-xl" alt="Work_IMG" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-6/5">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
