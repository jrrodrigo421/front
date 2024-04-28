
import SilhouetteAtDesk from '../assets/icons/silhouette-at-desk-svgrepo-com.svg';
import WorkerClocking from '../assets/icons/worker-clocking-in-svgrepo-com.svg';
import backgroundImage from '../assets/images/backgroundImage.jpg';


const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen flex items-center justify-center " style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md w-full p-6  rounded-md shadow-md">
       
        <button type="button" className="p-4 max-w-md flex justify-center items-center bg-violet-700 hover:bg-violet-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
        <img className='py-4 mr-2' src={WorkerClocking} alt="Silhouette at Desk"/>
          Já possui cadastro ?
        </button>
        <br />
        <button type="button" className="p-4 max-w-md flex justify-center items-center bg-violet-700 hover:bg-violet-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
        <img className='py-4 mr-2' src={SilhouetteAtDesk} alt="Silhouette at Desk"/>
          Ainda não possui cadastro ?
        </button>
      </div>
    </div>
  );
};

export default HomePage; 
