import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import { faSeedling , faTools, faUndo} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceX(){
    return (
        <div id="servicex" style={{backgroundColor: "#1C1C1C"}}>
           <div className="servicex-header">
               <h1 style={{fontSize: "3.2em",color: "white", margin:"0px", padding: "25px 0px", fontFamily: `Bebas Neue`}}> WHAT WE OFFER </h1> <hr className="hr1"/>
           </div>
           <div  style={{textAlign: ``}}>
               <h2 style={{margin: " 30px 0px 10px 30px", fontSize: "2.5em", color: "#CAE277", width: "90%"}}> Irrigation Repairs and Maintenance </h2>  <br/>
               <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi turpis, fringilla ac ultricies in, lacinia suscipit sem. Praesent condimentum diam cursus aliquam sodales. Maecenas sed leo in nisl fermentum varius. Pellentesque vitae libero dui. Duis non libero laoreet, lacinia mi mollis, ullamcorper metus. Nunc hendrerit iaculis sapien. Praesent vel mauris augue. Donec facilisis venenatis nibh vitae tincidunt. Sed sed scelerisque massa. Maecenas sem arcu, malesuada scelerisque orci vitae, rutrum tincidunt nisi. Praesent volutpat felis cursus accumsan mattis. Vestibulum tortor tellus, aliquam sit amet pretium sed, molestie sit amet magna. In blandit neque eget tortor vulputate sodales </p>
             </div>
             <div style={{textAlign: "start", width: "70%", margin: "auto", border: `1px solid white`}}>
                
                <p style={{paddingTop: "20px"}}> <span>  REPAIR LEAKS &nbsp; <FontAwesomeIcon icon={faTools}/>  </span> <br/>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, massa vitae pretium vestibulum, augue massa luctus arcu, eget tristique felis velit sit amet ligula. Nullam quis tempor nunc. Morbi dignissim venenatis enim, id ornare turpis sagittis id. Cras mattis, libero sed porta luctus, est massa mollis augue, ut bibendum.</p>
                
                <p> <span> REPAIR SPRINKLER HEADS &nbsp; <FontAwesomeIcon icon={faTools}/>  </span> <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, massa vitae pretium vestibulum, augue massa luctus arcu, eget tristique felis velit sit amet ligula. Nullam quis tempor nunc. Morbi dignissim venenatis enim, id ornare turpis sagittis id. Cras mattis, libero sed porta luctus, est massa mollis augue, ut bibendum.</p>
                 
                <p> <span>  SPRING START UPS &nbsp;<FontAwesomeIcon icon={faSeedling}/></span> <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, massa vitae pretium vestibulum, augue massa luctus arcu, eget tristique felis velit sit amet ligula. Nullam quis tempor nunc. Morbi dignissim venenatis enim, id ornare turpis sagittis id. Cras mattis, libero sed porta luctus, est massa mollis augue, ut bibendum.</p>
                
                <p> <span> WINTERIZATIONS &nbsp; <FontAwesomeIcon icon={faSnowflake} /> </span>  <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, massa vitae pretium vestibulum, augue massa luctus arcu, eget tristique felis velit sit amet ligula. Nullam quis tempor nunc. Morbi dignissim venenatis enim, id ornare turpis sagittis id. Cras mattis, libero sed porta luctus, est massa mollis augue, ut bibendum.</p>
                
                <p> <span>  BACKFLOW TESTING &nbsp; <FontAwesomeIcon icon={faUndo}/> </span> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, massa vitae pretium vestibulum, augue massa luctus arcu, eget tristique felis velit sit amet ligula. Nullam quis tempor nunc. Morbi dignissim venenatis enim, id ornare turpis sagittis id. Cras mattis, libero sed porta luctus, est massa mollis augue, ut bibendum.</p>
                
           </div>

           <div style={{}}>
               <h2 style={{margin: " 70px 0px 10px 30px", fontSize: "2.5em", color: "#CAE277"}}> Drainage Systems </h2> <br/>
               <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi turpis, fringilla ac ultricies in, lacinia suscipit sem. Praesent condimentum diam cursus aliquam sodales. Maecenas sed leo in nisl fermentum varius. Pellentesque vitae libero dui. Duis non libero laoreet, lacinia mi mollis, ullamcorper metus. Nunc hendrerit iaculis sapien. Praesent vel mauris augue. Donec facilisis venenatis nibh vitae tincidunt. Sed sed scelerisque massa. Maecenas sem arcu, malesuada scelerisque orci vitae, rutrum tincidunt nisi. Praesent volutpat felis cursus accumsan mattis. Vestibulum tortor tellus, aliquam sit amet pretium sed, molestie sit amet magna. In blandit neque eget tortor vulputate sodales  </p>
           </div>
           
           <div>
                <button style={{border: `none`,borderRadius: "20px", padding: "10px 16px", color: "white", backgroundColor: "#F7A440", fontSize: "2em", fontFamily: `"Roboto", sans-serif`, marginBottom: "30px"}}> Get a FREE estimate NOW!</button>
           </div>
        </div>
    )
}