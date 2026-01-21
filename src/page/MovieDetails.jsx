import { useSelector } from 'react-redux';
import StarIcon from "../assets/star.svg";
import Footer from '../components/Footer';

export default function MovieDetails() {
    const selectedData = useSelector((state) => state.selectedMovie.data);
    return (
        <>
            <div className='justify-content-center d-flex mb-5'>
                <div className='position-relative overflow-hidden bg-transparent w-1200 h-552'>
                    <div className='w-100 h-480 '>
                        <img
                            className='w-100 h-100 rounded-5 object-fit-cover movie'
                            src={`https://image.tmdb.org/t/p/w500${selectedData?.backdrop_path}`}
                            alt={selectedData?.original_title}
                        />
                    </div>
                    <div className="position-absolute bottom-10 start-70 w-560 h-144">
                        <div className="bg-dark bg-opacity-50 p-3 rounded-4 blur-10">
                            <p className="small text-prim">Movie / {selectedData?.media_type}</p>
                            <h1 className="fs-2 fw-bold text-white mt-1">{selectedData.original_title ? selectedData.original_title : selectedData.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-80 w-1200 h-552 d-flex justify-content-center'>
                <div className='card-img-container'>
                    <img
                        className='w-100 h-100 rounded--6 object-fit-cover'
                        src={`https://image.tmdb.org/t/p/w500${selectedData?.poster_path}`}
                        alt={selectedData?.original_title}
                    />
                </div>
                <div className='w-480 h-100 ms-6 text-white'>
                    <div className='mb-4 fw-bold'>
                        <h1 className='fs-3 m-0'>{selectedData.original_title ? selectedData.original_title : selectedData.name}</h1>
                    </div>
                    <p className='mb-4 fw-medium text-gray-400'>{selectedData.overview}</p>
                    <div
                        className="d-flex align-items-center fw-semibold w-59 gap-2 px-2 py-1 rounded-2 mb-4"
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            color: "#ffc107",
                            backdropFilter: "blur(4px)",
                        }}
                    >
                        <img src={StarIcon} alt="StarIcon" />
                        <span>{selectedData.vote_average.toString().substring(0, 3)}</span>
                    </div>
                    <div className='d-flex gap-1 justify-content-between'>
                        <div>
                            <div>
                                <p>Type</p>
                            </div>
                            <div>
                                <h3>{selectedData.media_type}</h3>
                            </div>
                            <div>
                                <p>popularity</p>
                            </div>
                            <div>
                                <h3>{selectedData.popularity}</h3>
                            </div>
                            <div>
                                <p>Language</p>
                            </div>
                            <div>
                                <h3>{selectedData.original_language}</h3>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Total Vote</p>
                            </div>
                            <div>
                                <h3>{selectedData.vote_count}</h3>
                            </div>
                            <div>
                                <p>Release Date:</p>
                            </div>
                            <div>
                                <h3>{selectedData.release_date ? selectedData.release_date : selectedData.first_air_date}</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>

        </>
    )
}
// adult:false
// backdrop_path:"/3F2EXWF1thX0BdrVaKvnm6mAhqh.jpg"
// genre_ids:(3) [28, 53, 80]
// id:1306368
// media_type:"movie"
// original_language:"en"
// original_title:"The Rip"
// overview:"Trust frays when a team of Miami cops discovers millions in cash inside a run-down stash house, calling everyone — and everything — into question."
// popularity:557.5284
// poster_path:"/p4bW2sJKAwcHuLpfoZK7Zo63osA.jpg"
// release_date:"2026-01-13"
// title:"The Rip"
// video: false
// vote_average: 7.1
// vote_count: 443