import './App.css';
import Card from './components/Card';

function App() {
 let myJob = {
  username : "AMAN",
  age: 21
 }

 let newArray = [1,2,3,4,5];
  return (
    <>
      <div>
        <h1 className="text-gray-900 rounded-xl bg-green-600 text-3xl font-bold p-5 mb-5">Tailwind Checking!</h1>
      </div>
      <Card username = "Chai or code"  btnText = "Click me " someObj= {myJob}  myArr = {newArray} />
      <Card username= "aman" btnText = "visit me"/>

      {/* <div className="flex items-center justify-center bg-[#0d1829] ">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Card image" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Care for DOGS :) </a>
              <p className="mt-2 text-gray-500">
                The black dog is a loyal companion known for its intelligence and protective nature. It's often praised for its ability to form strong bonds with its owners and families.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
