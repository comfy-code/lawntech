export default function Service(){
    return (
        <div id="service">
            <div className="service-header">
                <h1 style={{marginTop: "0px", paddingTop: "40px"}}> Our Services </h1>
                <hr/>
                <p> We provide the top of the line services to our customers in the Charlotte and surrounding areas </p>
            </div>

            <div className="service-cards">
                <div className="card">
                    <img alt="#" src="./sprinkler.jpeg" style={{width: "100%"}}/>
                    <h2 style={{}}> Irrigation </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec malesuada diam. Nulla nec mollis arcu. In varius nibh vitae tortor pretium sodales. Praesent venenatis sem in lectus varius, sed sagittis odio dictum.</p>
                   <button> Learn more </button>
                </div>
                <div className="card">
                    <img alt="#" src="./sewer.jpeg" style={{width: "100%"}} />
                    <h2> Drainage Systems </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec malesuada diam. Nulla nec mollis arcu. In varius nibh vitae tortor pretium sodales. Praesent venenatis sem in lectus varius, sed sagittis odio dictum.</p>
                    <button> Learn more </button>
                </div>
            </div>
        </div>
    )
}