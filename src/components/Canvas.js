import React from "react"

    class Canvas extends React.Component {
      

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

      componentDidMount() {
        const canvas = this.refs.canvas
        canvas.width=600
        canvas.height=300
        const ctx = canvas.getContext("2d")
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0,0, canvas.width, canvas.height)
      }

      componentDidUpdate() {
        const arr = this.props.arr;
        const canvas = this.refs.canvas
        canvas.width=600
        canvas.height=300
        const ctx = canvas.getContext("2d")
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0,0, canvas.width, canvas.height)
        //ctx.fillRect(0,100,100,300)
        let i = 0;
        arr.forEach(e => {
          //console.log(canvas.height)
          ctx.fillStyle = "#000000";
          ctx.fillRect(i, canvas.height-canvas.height*e/arr.length, canvas.width/arr.length, canvas.height*e/arr.length)
          i += canvas.width/arr.length;
        }); 
        
      }

      render() {
          return(
            <div>
              <canvas ref="canvas" />
            </div>
          )
        }
      }
      export default Canvas