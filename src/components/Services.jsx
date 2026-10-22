import assets from '../assets/assets';
import ServiceCard from './ServiceCard';
import Title from './Title';

const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, in...',
      icon: assets.ads_icon
    },
    {
      title: 'Content',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, in...',
      icon: assets.marketing_icon
    },
    {
      title: 'Social',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, in...',
      icon: assets.marketing_icon
    },
    {
      title: 'Writing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, in...',
      icon: assets.social_icon
    }
  ];

  return (
    <div id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12  lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
      <img src={assets.bgImage2} className="absolute -top-110 -left-70 -z-1 dark:hidden" alt="BG_IMG" />

      <Title title="How can we enrich your experience?" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium est illum? Incidunt, nobis reiciendis?" />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
