export default function Iframe(props){
    const {source, height, width, title} = this.props
    return (
        <div>          
       <iframe src={source} height={height} width={width} title={title}/>         
        </div>
    ) 
 }   