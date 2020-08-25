import React from 'react';
import axios from 'axios';


class EditProduct extends React.Component {
   
    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.state);
        //console.log(this.props.location.state.myid);
        this.state={
            name:'',
            price:0,
            id: 0,
            rating:0,
            stock:0,
            description:'',
            category: '',
            image:'',
            "validation": true,


        }

    }

    componentWillMount(){
        if(this.props.location.state !== undefined){
            axios.get('http://localhost:3000/allproducts/'+this.props.location.state.myid)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        name: response.data.name,
                        price:response.data.price,
                        id: response.data.id,
                        rating:response.data.rating,
                        stock:response.data.stock,
                        category: this.state.category,
                        description:response.data.description,
                        image:response.data.image
                    })
                }, error=>{
                    console.error(error);
                })
        }
    }

    getPrice=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({price: event.target.value})
        this.validationfn()
    }

    getRating=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({rating: event.target.value})
        this.validationfn()
    }

    getStock=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({stock: event.target.value})
        this.validationfn()
    }

    getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name: event.target.value})
        this.validationfn()

    }

    getDescription=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({description: event.target.value})
        this.validationfn()

    }

    getCategory = (event) => {
        this.setState({ category: event.target.value })
        this.validationfn()
    }

    getImage=(event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({image: event.target.value.substr(12)})
        this.validationfn()
    }

    
    editProduct=()=>{
        console.log('Edit product via axios and put')
        let productRequestBody = {
            "name": this.state.name,
            "price": this.state.price,
            "rating":this.state.rating,
            "stock":this.state.stock,
            "category":this.state.category,
            "description":this.state.description,
            "image":this.state.image
        }
        axios.put('http://localhost:3000/allproducts/'+this.state.id, productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.validationfn()
                    this.props.history.push('/products')
                }, error=>{
                    console.error(error);
                })
    }

    validationfn = () => {
        setTimeout(() => {
            console.log(this.state)
            if ( (this.state.name === "") || this.state.price === "" || this.state.rating ===""||this.state.image==="" || this.state.price <= 0 || this.state.stock <= 0 ||this.state.description === ''||this.state.category === ''  ) {
                console.log("fail")
                this.setState({ validation: true })
            } else {
                console.log("success")
                this.setState({ validation: false })
            }
        }, 10)


    }

    render() { 
        const buttonclr={
            backgroundColor:"green",
            color:"white",
            padding:'15px',
            // margin:'10px',
            border:'none',
            opacity: 0.9,
           
            
        } 
        if(this.props.location.state === undefined){
            return (
                <div>
                    <h1>Pl. go to from home page!!!! </h1>
                </div>
            )
        }
        return ( 
            <div>
                {/* <h1>Edit product with id:{this.props.location.state.myid}  </h1> */}
                <div className="contain">
                <h2 style={{color:"red"}}>Edit Product</h2>
                {this.state.validation && <h3 className="error">All the below details are required </h3>}
                <form className="container">
                    <b><label>Id: </label></b>
                    <input type="text" value={this.state.id} readOnly></input>
                    <br></br>
                    <br></br>
                    <b><label>Name: </label></b>
                    <input type='text' id="productname" value={this.state.name}  onChange={this.getName}></input>
                   
                    <br></br>
                    <br></br>
                    <b><label>Price: </label></b>
                    <input type='number' id="productprice" value={this.state.price}  onChange={this.getPrice}></input>
                    
                    <br></br>
                    <br></br>
                    <b><label>Rating: </label></b>
                    <input type='number' id="productrating" value={this.state.rating}  onChange={this.getRating}></input>
                  
                    <br></br>
                    <br></br>
                    <b><label>Description: </label></b>
                    <input type='text' id="productdescription" value={this.state.description}  onChange={this.getDescription}></input>

                    <br></br>
                    <br></br>
                    <span><label htmlFor="category">Category</label>
                                    <select  id="category" name="category" value={this.state.category} onChange={this.getCategory}>
                                        <option value=""></option>
                                        <option value="Mobile">Mobile</option>
                                        <option value="Laptop">Laptop</option>
                                        <option value="Groceries">Groceries</option>
                                    </select>
                    </span>
                    <br></br>
                    <br></br>
                    <b><label>Stock: </label></b>
                    <input type='number' id="productstock" value={this.state.stock}  onChange={this.getStock}></input>
                   
                    <br></br>
                    <br></br>
                    <b><label>Product Image: </label></b>
                    <input type="file" onChange={this.getImage} multiple accept='image/*' />
                    <br></br>
                    <br></br>
                    <button type="button" disabled={this.state.validation} onClick={this.editProduct} style={buttonclr} >Edit Product</button>
                    <br></br>
                    <br></br>
                  
                    
                </form>
            </div>
            </div>
         );
    }
}
 
export default EditProduct;