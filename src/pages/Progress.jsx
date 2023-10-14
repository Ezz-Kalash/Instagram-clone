import React from 'react'
import soon from "../component/assets/rocket-launch.png"
import "./Pagesstyle.css"
import Rightbar from '../component/Rightbar';
import Storybar from '../component/Storybar';
import Leftbar from '../component/Leftbar';

export default function Progress() {
  return (
    <div className='bb'>
      <Leftbar></Leftbar>
      <Rightbar></Rightbar>
      <Storybar/>
<div className='prog'>
    <img id="soon" src={soon} alt="" />
    <br />
    <p className='content'>This page is coming soon</p>    
    </div>
    </div>
  )}