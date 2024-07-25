import img01 from "./../../img/img01.jpg"


const Portfolio = () => {

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">Title</h1>

                    <img 
                        src= { img01 }
                        alt="Title"
                        className="project-details__cover" 
                    />

                    <div className="project-details__desc">
                        <p>Skills: </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Portfolio;

