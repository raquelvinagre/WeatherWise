import '../App.css'
import {Button} from "@/components/ui/button" 
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Search from '../components/search'

function Travel() {

  return (
    <>
<div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
            <div className="mx-auto w-full flex-grow p-10 ">
            <h2 className="text-4xl font-bold text-grey">Travel</h2>
            </div>
        </div>

    </>
  );
}

export default Travel

