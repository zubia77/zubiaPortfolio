import React from 'react'

function SoftskillsBack() {
  return (
    <div className="box1 h-96 bg-color-20 grid grid-cols-3 grid-rows-2">
       <div className="col-start-1 row-start-1 w-32 m-4 flex flex-col items-center font-10 text-lg">
                <img src="./public/zeitmanagement.png" alt="" className="w-20" />
                Time Management
              </div>
              <div className="col-start-2 row-start-1 w-32 m-4 flex flex-col items-center font-10 text-lg">
                <img src="./public/teamfaehigkeit.png" alt="" className="w-20" />
                Teamplayer
              </div>
              <div className="col-start-3 row-start-1 w-32 m-4 flex flex-col items-center font-10 text-lg">
                <img src="./public/planungskompetenz.png" alt="" className="w-20" />
                Planning Skills
              </div>
              <div className="col-start-1 row-start-2  w-32 m-4 flex flex-col items-center font-10 text-lg">
                <img src="./public/loesungsorientiert.png" alt="" className="w-20" />
                Problem Solver
              </div>
              <div className="col-start-2 row-start-2 w-32 m-4 flex flex-col items-center font-10 text-lg text-center">
                <img src="./public/improvisation.png" alt="" className="w-20" />
                Improvisational Skills
              </div>
              <div className="col-start-3 row-start-2 w-32 m-4 flex flex-col items-center font-10 text-lg">
                <img src="./public/krisenmanagement.png" alt="" className="w-20" />
                Crisis Management
              </div>
    </div>
  )
}

export default SoftskillsBack
