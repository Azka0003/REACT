// import { Component } from "react";//need to import react component for class
// class ClassBasedComponents extends Component {
//     render() {
//         return (
//             <div>
//                 <h4>Class based components</h4>
//             </div>
//         );
//     }
// }
// export default ClassBasedComponents;

// -----------------------------------------------------------------------------------------


//understand state in class based model
// import { Component } from "react";
// class ClassBasedComponents extends Component {

//     //state
//     state = {
//         showText: false,
//     };

//     // other way
//     // constructor(props)
//     // {
//     //     super(props);
//     //     this.state={
//     //         showText:false,
//     //     }
//     // }


//     handleClick = () => {
//         console.log('button cliked');
//         // not recommended as it will not rerender the react u are directly mutating a state
//         // this.state.showText=!this.state.showText
//         // there is a fuction setState use that to chnage the state

//        this.setState({
//          showText : !this.state.showText
//        })
//     }

//     render() {
//         console.log(this.state);

//         return (
//             <div>
//                {this.state.showText? <h4>Class based components</h4>:null}
//                 <button onClick={this.handleClick}>Toggle Text</button>
//             </div>
//         );
//     }
// }
// export default ClassBasedComponents;

//--------------------------------------------------------------------------------------------

// u can destructure it
// import { Component } from "react";
// class ClassBasedComponents extends Component {

//     state = {
//         showText: false,
//         chnageColor: false
//     };

//     handleClick = () => {
//         console.log('button clicked');

//         const { showText, chnageColor } = this.state;

//         this.setState({
//             showText: !showText,
//             chnageColor: !chnageColor
//         })
//     }

//     render() {
//         console.log(this.state);
//         const { showText } = this.state;
//         const { chnageColor } = this.state;

//         return (
//             <div>
//                 {showText ? <h4 style={{ color: chnageColor ? "red" : "black" }}>Class based components</h4> : null}
//                 <button onClick={this.handleClick}>Toggle Text</button>
//             </div>
//         );
//     }
// }
// export default ClassBasedComponents;


// -------------------------------------------------------------------------------------------

// // life cycle
// // componentDidMount() as the page load it will run first/component is mounted, setting state here will trigger re rendering
// // - when u want some side effect that happend as page loads api call etc

// import { Component } from "react";
// class ClassBasedComponents extends Component {
//     state = {
//         showText: false,
//         chnageColor: false
//     };

//     handleClick = () => {
//         console.log('button clicked');

//         const { showText, chnageColor } = this.state;

//         this.setState({
//             showText: !showText,
//             chnageColor: !chnageColor
//         })
//     }

//     // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
//     componentDidMount() {
//         console.log("this is called first time as page load");
//         //i want that class componet text color chnage to red as page loads

//         this.setState({
//             showText: !this.state.showText,
//             chnageColor: !this.state.chnageColor
//         })
//     }

//     // Called immediately after updating occurs. Not called for the initial render.
//     componentDidUpdate(prevProps, prevState) {//gives two parameter
//         console.log(prevProps, prevState)
//         //lets comapre the prev and current state
//         console.log(prevState,this.state)
//     }

//     render() {
//         console.log(this.state);
//         const { showText } = this.state;
//         const { chnageColor } = this.state;

//         return (
//             <div>
//                 {showText ? <h4 style={{ color: chnageColor ? "red" : "black" }}>Class based components</h4> : null}
//                 <button onClick={this.handleClick}>Toggle Text</button>
//             </div>
//         );
//     }
// }
// export default ClassBasedComponents;

//------------------------------------------------------------------------------------------

//now i want to display text only when counter reach to 10
import { Component } from "react";

class ClassBasedComponents extends Component {

    state = {
        showText: false,
        chnageColor: false,
        count: 0,
        changeCountStyle: false,
    };

    handleClick = () => {
        console.log('button clicked');
        const { showText, chnageColor } = this.state;
        this.setState({
            showText: !showText,
            chnageColor: !chnageColor
        })
    }

    handleCount = () => {
        const { count } = this.state

        this.setState({
            ...this.state,
            count: count + 1
        })
    }

    componentDidMount() {
        console.log("this is called first time as page load");
        this.setState({
            showText: !this.state.showText,
            chnageColor: !this.state.chnageColor
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
        console.log(prevState, this.state)

        if (prevState &&
            prevState.count !== this.state.count &&
            this.state.count === 10
        ) {
            this.setState({
                ...this.state,
                changeCountStyle: true
            })
        }
    }

    componentWillUnmount(){
        console.log("components is getting unmounted");
        
    }

    render() {
        console.log(this.state);
        const { showText, chnageColor, count, changeCountStyle } = this.state;
        console.log(changeCountStyle);
        
        return (
            <div>
                {showText ? <h4 style={{ color: chnageColor ? "red" : "black" }}>Class based components</h4> : null}
                <button onClick={this.handleClick}>Toggle Text</button>
                <button onClick={this.handleCount}>Increase Count Value</button>
                <h3 style={{ color: changeCountStyle? 'blue':"black",fontSize:changeCountStyle? '30px' : '12px' }}>Count is {count}</h3>
            </div>
        );
    }
}

export default ClassBasedComponents;