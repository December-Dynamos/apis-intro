import React,{useState} from "react"; 
import axios from "axios";


const SumOfTwo = () => {
    const [number1, setNum1] = useState(0);
    const [number2, setNum2] = useState(0);


    
    function getApi(){
          fetch("http://localhost:5000/hello")
          .then(response => response.json()) 
          .then(data => console.log(data))   
          .catch(err=> console.log(err))
    }

    // getApi()


    function getApi2(){
          axios.get("http://localhost:5000/hello")
          .then(response => console.log(response.data)) 
          .catch(err => console.log(err))
    }

    // getApi2()



    function caluclate1(e){
        e.preventDefault();
        
       axios.post("http://localhost:5000/sum", 
       {
              num1: number1,
              num2: number2
       }
       ) 
       .then(response => console.log(response.data)) 
       .catch( err => console.log(err))



    }

    async function caluclateNew(e){
        e.preventDefault();
       
      try{
        const response = await axios.post("http://localhost:5000/sum", {num1: number1,num2: number2}) 
        console.log(response.data)
      }
      catch(err){
         console.log(err)
      }
       
    }

    function caluclate2(e){
        e.preventDefault();

        fetch("http://localhost:5000/sum",{
              method: "POST",
              headers: {
                   "content-type": "application/json"
              },
              body : JSON.stringify({
                    num1: number1,
                    num2: number2
              }),
              }) 
    .then(response => response.json()) 
    .then(data => console.log(data)) 
    .catch(err => console.log(err))
              
        
       



    }



    return(
        <div>
               <form onSubmit={caluclate2}>
                    <input type="number"  placeholder="Enter Number 1" 
                       onChange={e => setNum1(e.target.value)} 
                       
                    />
                   
                    <input type="number"  placeholder="Enter Number 2" 
                        onChange={e => setNum2(e.target.value)} 
                    />
                    <button type="submit">Submit</button>
               </form>
        </div>
    )
}

export default SumOfTwo;