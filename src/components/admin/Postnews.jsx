import React,{useState} from 'react'
import ApI from '../Utility/API'
const Postnews = () => {
    
    const [Uploaddatas,setUploaddatas]=useState({Title:"",description:"",myfile:""})

    function postsender(e){
        e.preventDefault()
        const fd = new FormData();
        Object.entries(Uploaddatas).forEach(([key,value])=>{
            fd.append(key,value)
        })
        console.log(fd)
        ApI.addnews(fd).then((data)=>{
            console.log(data)
        })
    }


  return (
    <div>

<form className="max-w-md mx-auto mt-16 p-4 bg-white shadow rounded" encType='multipart/form-data'>
    <h2 className="text-2xl font-bold mb-4">upload video or image</h2>
    <div className="mb-4">
        <label for="name" className="block mb-1">Title</label>
        <input type="text" id="name" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" name='Title' value={Uploaddatas.Title} 
        onChange={(e)=>setUploaddatas(p=>({...p,Title:e.target.value}))}/>
    </div>
    <div className="mb-4">
        <label for="description" className="block mb-1">Main description </label>
        <input type="text" id="description" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" name='description' value={Uploaddatas.description} 
        onChange={(e)=>setUploaddatas(p=>({...p,description:e.target.value}))}/>
    </div>
   
    <div className="mb-4">
        <label for="message" className="block mb-1">job description</label>
        <textarea id="message" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
    </div>
    <div className="mb-4">
        <label for="video" className="block mb-1">upload image or video</label>
        <input type="file"  className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        name='' 
        onChange={(e)=>setUploaddatas(p=>({...p,myfile:e.target.files[0]}))}/>
    </div>

    <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
     onClick={(e)=>postsender(e)}>Submit</button>
</form>

    </div>
  )
}

export default Postnews