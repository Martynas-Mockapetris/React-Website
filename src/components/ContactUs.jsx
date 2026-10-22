import assets from '../assets/assets';
import Title from './Title';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('access_key', '3008f0f8-a911-4a21-a9df-658913af45e6');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        toast.success('Thanks for reaching out!');
        event.target.reset();
        return;
      } else {
        console.log('Error', data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div id="contact-us" className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 w-full overflow-hidden text-gray-700 dark:text-white">
      <Title title="Reach out team" desc="We value our clients and we want to create the best experience possible, to move business forward" />

      <form className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full" onSubmit={onSubmit}>
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="ICO" />
            <input type="text" placeholder="Enter your name" className="w-full p-3 text-sm outline-none" required name="name" />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="ICO" />
            <input type="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none" required name="email" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea rows={8} placeholder="Enter your message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" required name="message" />
        </div>

        <button type="submit" className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all">
          Submit <img src={assets.arrow_icon} className="w-4" />
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
