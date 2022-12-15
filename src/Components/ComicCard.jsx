import React, { useState, useEffect } from 'react';
import Loader from "./Loader";

const style = {
  card: `border basis-1/4 border-slate-600 shadow rounded`,
  error: `text-center font-medium text-sm`,
  text: `text-sm font-medium p-3`,
  loader: `column`
}


const ComicCard = () => {
  const [dataMarvel, setData] = useState([])
  const [Loading, setLoading] = useState(false)
  const [searchInput,setSearchInput] = useState('')

  // public key e84f571b00b8c70f7a2dc2c9d4cd22b8
  //private key a113856e5528662d4d297695b8c226de0f2d9d14

  //hash key ec974252ace78a5d4d0c2ad2992d3a91
  // shah1 key hash 183f676256a8d7e08ba95176ed6397e56b2db2b4



  // async function fetchData() {
  //   let response = await axios(
  //     `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=e84f571b00b8c70f7a2dc2c9d4cd22b8&hash=ec974252ace78a5d4d0c2ad2992d3a91`
  //   );
  //   let user = await response.data;
  //   setData(user);
  // }


  const MarvelApi = async () => {
    setLoading(true)
    await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e84f571b00b8c70f7a2dc2c9d4cd22b8&hash=ec974252ace78a5d4d0c2ad2992d3a91`)
      .then(response => response.json())
      .then(data => (
        setData(data.data.results),
        setLoading(false)
      ))
      .catch(err => setLoading(false));

  }

  useEffect(() => {
    MarvelApi();
  }, []);

  const searchFilter= !searchInput ? dataMarvel : dataMarvel.filter(item => item.name.toLowerCase().include(searchInput.toUpperCase()))

  console.log(dataMarvel);
  return (
    <>
      <div className="section mt-12 mb-10">
        <div className="container mx-auto xl:px-4">
        <div className="flex flex-wrap justify-between items-center mb-6">
            <h4 className="text-xl lg:text-3xl font-semibold mb-5">LATEST MOVIES</h4>
            <input type="search" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} className="py-2 px-2 w-80 text-red-500 bg-neutral-50 border outline-none border-red-500 rounded" />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 min-h-[75vh]">
            {Loading ? <Loader className={style.loader} /> :
              (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                  {searchFilter.map((item) => (
                    <div className={style.card} key={item.id}>
                      <div className="overflow-hidden">
                        <img src={item.thumbnail.path + `.` + item.thumbnail.extension} alt="" className="object-cover h-72  img-fluid" />
                      </div>
                      <h4 className={style.text}>{item.name}</h4>
                      {/* <p className={style.text}>{item.description}</p> */}
                    </div>
                  ))}
                </div>
              )
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default ComicCard