import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { map } from "lodash";

import routes  from "./routes";

export function Navigation(){
    console.log(routes);
  return (
  //  <h1>Navigation</h1>
    <BrowserRouter>
          <Routes>
              {map(routes, (route,index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <route.layout>
                      <route.component />
                    </route.layout>
                  }
                />
              ))}
            </Routes>
      </BrowserRouter>
  )
};



      // <BrowserRouter>
      //     <Routes>
      //         {map(routes, (route,index) => (
      //           <Route
      //             key={index}
      //             path={route.path}
      //             element={
      //               <route.layout>
      //                 <route.component />
      //               </route.layout>
      //             }
      //           />
      //         ))}
      //       </Routes>
      // </BrowserRouter>