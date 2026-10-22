const Title = ({ title, desc }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl sm:text-5xl font-medium">{title}</h2>
      <p className="max-w-lg text-gray-500 dark:text-white/75 mb-6 mt-6 mx-auto">{desc}</p>
    </div>
  );
};

export default Title;
