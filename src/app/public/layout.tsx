import React from "react";
import { IChildren } from '@/interfaces/IChildren';
  
export default function Publiclayout({children}: IChildren){
    return (
        <>
            <header>
                {/* <Menu /> */}
                <h1>Header del Frontend</h1>
            </header>
            <main>
                { children }
            </main>   
        </>
    );
  }
