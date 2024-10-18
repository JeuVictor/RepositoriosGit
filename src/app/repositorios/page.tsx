"use client"
import { useState, useEffect } from "react"

interface DataProps{
    id: number;
    name: string;
    full_name: string;
    owner: {
      login: string;
      id: number;
      avatar_url: string;
      url: string;
    }
  }

export default function Repositorio(){
    const [repos, setRepos] = useState<DataProps[]>([])

    useEffect(()=>{
        function getData(){
            fetch("https://api.github.com/users/JeuVictor/repos")
                .then(response => response.json())
                .then((data:DataProps[])=>{
                    setRepos(data);
                })
        }
        getData();
    },[])

    return(
        <div>
            <h1>Página Repositórios</h1>

            {repos.map((item)=>(
                <div key={item.id}>
                    <strong>Repositorio:</strong>{item.name}
                    <br/><br/>
                </div>
            ))}
        </div>
    )
}