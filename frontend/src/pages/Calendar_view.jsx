import * as React from 'react';
import Navbar from './Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import './Calendar.css'

const localizer = dayjsLocalizer(dayjs)


function Calendar_view() {

  return (
    <div >
      <Navbar />
      <div className="font-staatliches text-6xl leading-8 text-white text-center">
        My Calendar
      </div>

      <div className="flex flex-col md:flex-row">
        <div id="contact" className="text-white font-staatliches mt-11 ml-4 md:h-full border-none list-square text-left">
          <h1 className="text-5xl ml-0 sm:text-center">PEOPLE</h1>
          <ul className="custom-list text-2xl mt-3 ml-8">
            <div className="ml-5 mb-5">Inaam</div>
            <div className="ml-5 mb-5">Nipun</div>
            <div className="ml-5 mb-5">Noel</div>
            <div className="ml-5 mb-5">Hoa</div>
          </ul>
          <button className="login-button w-48 h-12 bg-white rounded-full transform rotate-0.12 text-black font-staatliches font-normal text-3xl leading-12 mt-2" 
          onClick={() => window.location='moreDetails.html'}>MORE DETAILS</button>
        </div>
          <div  id="calendar" className="bg-white rounded-md w-3/4 shadow-md mt-10 ml-0 text-sm sm:ml-24 text-base">
          <div>
            <Calendar
              localizer={localizer}
              // events={myEventsList}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>
        <button className="login-button w-48 h-12 bg-white mb-1 rounded-full transform rotate-0.12 text-black font-staatliches font-normal text-3xl leading-12 mt-2 w-75px h-40px ml-9 sm:w-192px h-48px ml-0">AUTO-GENERATE</button>

          </div>
          
      </div>
    </div>
  )
}

export default Calendar_view