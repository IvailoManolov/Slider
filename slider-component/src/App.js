import './App.css';
import Slide from './Components/Slide';


function App() {
  
  const data = [
    {url : "https://thumbs.dreamstime.com/b/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg",title:"Beach"},
    {url : "https://www.shutterstock.com/image-photo/sailboat-sea-evening-sunlight-over-260nw-717244969.jpg",title:"Boat"},
    {url : "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",title:"Forest"},
    {url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1o0ZY6SnCrGcTEHX1ji76hp2zZvf8qCe9ZWMGSUL-QA&s",title:"City"},
    {url : "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",title:"Italy"}
  ]

  return (
    <div className="Container">
      <Slide data = {data}/>
    </div>
  );
}

export default App;
