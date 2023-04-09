import React, { useEffect, useState } from 'react'
import { API_URL } from '../constant/url'
import Header from '../Pages/header'
import axios, { AxiosResponse } from "axios";
import "./movielist.css";
import upArrow from "../assets/upArrow.svg";
import downArrow from "../assets/downArrow.svg";

const Movielist = () => {
const [movieDataList,setDataMovieList]=useState<any>()
const [votedList, setVotedList] = useState(new Array(movieDataList?.length).fill(0));
const handleVote = (index:any, value:any) => {
  const updatedList:any = [...votedList];
 
  setVotedList(updatedList);
  if (value < 0) {
    // don't allow negative vote count
    updatedList[index] = 0;
  } else {
    updatedList[index] = value;
  }
  setVotedList(updatedList);
  console.log(updatedList)
};
    useEffect(()=>{

getMovieList()

    },[])
    const getMovieList=async()=>{
        try{
        let data:any = await axios.post(API_URL,{category: "movies",
        language: "kannada", genre: "all",
        sort: "voting"})
        setDataMovieList(data?.data?.result)
        console.log(data?.data?.result,'hiii')}
        catch(error){
            console.log(error)
        }
        
    }
    const getFormatDate=(dateVal)=>{
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        
        
        const d = new Date(dateVal).getDate() + ' '+ monthNames[new Date(dateVal).getMonth()] ;
        return d
        }
    
  return (
    <><Header isSigned={true}>
    
        </Header>
        {/* <div>{movieDataList?.map((list:any,key:any)=>(
            <>
            <button onClick={()=>list.totalVoted+=1}></button>
            <span>{list?.totalVoted}</span>
            <button onClick={()=>list.totalVoted-=1}></button>
            <img src={list?.poster}></img>
            <p>Title:{list?.title}</p>

<p>Genre:{list?.genre}</p>
<p>Director:{list?.director.join(',')}</p>
<p>staring:{list?.stars.join(',')}</p>
<p>Mins|{list?.language}|{getFormatDate(list?.releasedDate)}</p>
<p>{list?.pageViews} views| Voted by {list?.totalVoted} People</p>
<button>Watch Trailer</button>


</>
        ))}</div> */}
  <div className="movie-list">
  {movieDataList?.map((list:any, index:any) => (
    <div className="movie-card" key={index}>

      <div className="movie-vote-buttons">
        <div>
          <img src={upArrow} className="arrow" onClick={() => handleVote(index, votedList[index] + 1)} alt="Upvote" />
        
        </div>
        <span>{votedList[index] || list?.totalVoted}</span>
        <div>
          <img src={downArrow} className="arrow" onClick={() => handleVote(index, Math.max(index, votedList[index] - 1))} alt="Downvote" />
        
        </div>
        <p>Votes</p>
      </div>
      <div className='container'>
        <div className='imgContainer'>
      <img className='cardImg' src={list?.poster} alt={list?.title} /></div>
      <div className="movie-details">
        <h2>{list?.title}</h2>
        <p>
          <strong>Genre:</strong> {list?.genre}
        </p>
        <p>
          <strong>Director:</strong> {list?.director.join(',')}
        </p>
        <p>
          <strong>Starring:</strong> {list?.stars.join(',')}
        </p>
        <p>
          <strong>Duration:</strong> {list?.mins} mins | {list?.language} | {getFormatDate(list?.releasedDate)}
        </p>
        <p className='para'>
          {list?.pageViews} views | Voted by {votedList[index] || list?.totalVoted} People
        </p>
    </div>
      </div>
      <div className='btn'>
      <button className='btn1'>Watch Trailer</button></div>
    </div>
    
  ))}
</div>


        </>
        
  )
}

export default Movielist


