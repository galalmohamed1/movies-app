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
                    <div className="position-absolute bottom-10 start-70 w-560 card-blur h-144 mx-md-4 end-md-0">
                        <div className="bg-dark bg-opacity-50 p-3 rounded-4 blur-10">
                            <p className="small text-prim">Movie / {selectedData?.media_type}</p>
                            <h1 className="fs-2 fw-bold text-white mt-1">{selectedData.original_title ? selectedData.original_title : selectedData.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 details-wrapper">
                <div className="row justify-content-center align-items-start">

                    <div className="col-12 col-md-5 mb-4 mb-md-0">
                        <div className="card-img-container h-100 px-lg-5">
                            <img
                                className="img-fluid rounded-4 object-fit-cover w-100"
                                src={`https://image.tmdb.org/t/p/w500${selectedData?.poster_path}`}
                                alt={selectedData?.original_title}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-white">
                        <div className="mb-4 fw-bold">
                            <h1 className="fs-3 m-0">
                                {selectedData.original_title
                                    ? selectedData.original_title
                                    : selectedData.name}
                            </h1>
                        </div>

                        <p className="mb-4 fw-medium text-gray-400">
                            {selectedData.overview}
                        </p>
                        <div
                            className="d-inline-flex align-items-center fw-semibold gap-1 px-2 py-1 rounded-2 mb-4"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                color: "#ffc107",
                                backdropFilter: "blur(4px)",
                            }}
                        >
                            <img src={StarIcon} alt="StarIcon" />
                            <span>{selectedData.vote_average.toFixed(1)}</span>
                        </div>

                        {/* Info */}
                        <div className="row">
                            <div className="col-12 col-sm-6 mb-3">
                                <p>Type</p>
                                <h3>{selectedData.media_type}</h3>

                                <p>Popularity</p>
                                <h3>{selectedData.popularity}</h3>

                                <p>Language</p>
                                <h3>{selectedData.original_language}</h3>
                            </div>

                            <div className="col-12 col-sm-6">
                                <p>Total Vote</p>
                                <h3>{selectedData.vote_count}</h3>

                                <p>Release Date</p>
                                <h3>
                                    {selectedData.release_date
                                        ? selectedData.release_date
                                        : selectedData.first_air_date}
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />

        </>
    )
}