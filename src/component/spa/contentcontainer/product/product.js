import React from 'react';
import axios from "axios";
import { createHashHistory } from 'history'
import { withRouter } from "react-router-dom";
import '../css/App.css';
import Search from '../Search/search';
import ProductDetail from './productdetail';
import { Container, Card } from 'react-bootstrap';

class Product extends React.Component {

    constructor(props){
        super(props)
        this.state={
            products:[],
            permanentproductList:[],
            deleteSuccess:false,
            myid:0,
            Stock:0,
            selectOpt:false
        }

       
    }
    


    intializeState=()=>{
        setTimeout(()=>{
            this.setState({deleteSuccess: false})
        }, 2000)
    }

    componentWillMount(){
        if(this.state.permanentproductList == 0)
        this.getAllProducts()
    }

    componentDidMount(){
        console.log("props");
        console.log(this.props)    
    }

    
    getAllProducts=()=>{
        axios.get('http://localhost:3000/allproducts')
                .then(response=>{
                    console.log(response);
                    console.log(response.data)
                    this.setState({products: response.data, permanentproductList: response.data})
                    console.log(this.state.products);
                }, error=>{
                    console.error(error);
                })
    }
    deleteProductWithId=(id)=>{
        console.log('delete product for received id: ' + id);
        axios.delete('http://localhost:3000/allproducts/' + id)
                .then(response=>{
                     console.log(response)
                     //show deleteSuccess message
                     this.setState({deleteSuccess: true})
                     this.getAllProducts()
                     //remove deleteSuccess message after 2000 millisecond
                     this.intializeState()
                }, error=>{
                    console.error(error)
                })
    }

    addStockWithId=(id)=>{
        console.log('add stock for received id: ' + id);
        axios.get('http://localhost:3000/allproducts/'+id)
        .then(response=>{
            console.log(parseInt(response.data.stock)+1)
            axios.patch('http://localhost:3000/allproducts/' + id,
            {
                'stock':parseInt(response.data.stock)+1}
            )
        
            // this.setState({since:parseInt(response.data.since)+1})
                     this.getAllProducts()
                    //  window.location.reload(false);
                    },error=>{
                        console.log(error.error)
                    })
     }

    subStockWithId=(id)=>{
                    console.log('sub stock for received id: ' + id);
                    axios.get('http://localhost:3000/allproducts/'+id)
                    .then(response=>{
                        console.log(parseInt(response.data.stock)+1)
                        axios.patch('http://localhost:3000/allproducts/' + id,
                        {
                            'stock':parseInt(response.data.stock)-1}
                        )
                    
                        // this.setState({since:parseInt(response.data.since)+1})
                                 this.getAllProducts()
                                //  window.location.reload(false);
                                },error=>{
                                    console.log(error.error)
                                })
     }

    search = (word) => {
        if (word === '') {
            this.setState({ products: this.state. permanentproductList })
        } else {
            var searchproductList = this.state.permanentproductList.filter(product => product.name.toLowerCase().startsWith(word.toLowerCase()))
            console.log(searchproductList)
            this.setState({  products: searchproductList })
        }
    }

    

 

    renderAllProducts=()=>{
        if (this.state.products.length === 0) {
            return(<h2 style={{color:"red",textAlign:"center"}}>  No Product Found !</h2>)
        } else {
        return this.state.products.map(product=>{
            return(
              
                    <ProductDetail
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        rating={product.rating}
                        description={product.description}
                        category={product.category}
                        img={product.image}
                        stock={product.stock}
                        deleteId={this.deleteProductWithId}
                        editId={this.editProductWithId}
                        addId={this.addStockWithId}
                        subId={this.subStockWithId}
                    >

                    </ProductDetail>
                
            )
        })
    }
}

    openAddProduct=()=>{
        
        // this.props.history.push('/addproduct')
        history.push('/addproduct');
        
    }

    editProductWithId=(id)=>{
        this.setState({myid: id})
        console.log('Edit product with myid: ' + this.myid);
        console.log('Edit product with id: ' + id);
        
       this.props.history.push({
                                    pathname: '/editproduct', 
                                    state: {myid: id}
                                    
                                })
    }
    getcategorysearch = (event) => {
        if (event.target.value !== '' && !this.state.selectOpt) {
            let filteredvalues = this.state.permanentproductList.filter((fproduct) => {
                return (
                    fproduct.category.includes(event.target.value)
                )
            })
            this.setState({
                products: filteredvalues,
                category: true,
                selectOpt: false
            })
        }
        else {
            this.setState({ category: false })
            this.getAllProducts()
        }
    }

    render() {
 
        return ( 
    <Container  >
      
               <div >
                    <Search search={this.search} />
                    <div style={{textAlign:"center",fontSize:"20px"}}>
                        <p className="filterclr">Filter by Category</p>
                        {!this.state.selectOpt &&
                            <select id="productcategory" onChange={this.getcategorysearch}>
                                <option id="productcategory"></option>
            
                                <option id="productcategory">Mobile </option>
                                <option id="productcategory">Laptop</option>
                                <option id="productcategory">Groceries</option>
                            </select>
                        }
                     
                    </div>
             

                        {this.renderAllProducts()}
                    
                    {this.state.deleteSuccess &&
                    <div>
                          <h3>Product deleted success!!!!</h3>  
                    </div>
                    }
                   
                      <button onClick={this.openAddProduct} className="buttonProduct">Need to Add New Product (Click here)</button>
                    <br></br>
                </div>
              
                </Container>
           
         );
    }
}
 
// export default Product;
export default withRouter(Product);
export const history = createHashHistory();