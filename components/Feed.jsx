"use client"
import React from 'react'
import {useState, useEffect} from 'react'
import PromtCard from "./PromptCard"

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
   
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const handleSearchChange= (e) => {

  }
  return (
    <section className='feed'>
      <form action="" className="relative w-full flex-center">
        <input 
        type='text'
        placeholder='Search for a tag or a username'
        value={searchText}
        onChange={handleSearchChange}
        className='search_input peer'
        required
        />
      </form>
      <PromptCardList 
      data={[]}
      handleTagClick={()=>{}}
      />
      </section>
  )
}


export default Feed