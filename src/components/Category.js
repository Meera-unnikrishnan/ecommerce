import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';


const Category = ()=>{

    const [button,setButton] = useState([]);
    const [products,setProducts] = useState([]);



    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then((data)=>{
            setButton(data);
            // console.log(data);

        });
    },[]);


    function productDetails(val)
    {
         console.log("this is", val);
        fetch(`https://dummyjson.com/products/category/${val}`)
        .then(res => res.json())
        .then((data)=>{

            setProducts(data.products);
            console.log(data.products);

           

        });
        
    }


    return(
        <div>
                {button.map((val,key)=>{
                    return(
                     
                        <input type="button" onClick={()=>productDetails(val)} key ={key} value={val}/>  
                       
                    )
                })}

                    <>
                      <h1>Products</h1>
                
                      <div className="container">
                
                      
                        <div className="row text-center">
                          {products.map((val, key) => {
                            return (
                              <div className="col-md-3 mt-5">
                                <div className="card" style={{height: '29rem'}} key={key}>
                                    <div style={{height:'auto'}}>
                                    <img src={val.thumbnail} className='card-img-top' alt=""/>
                                   </div>
                                  <div className="card-body" style={{height:'75px'}}>
                                  <p>{val.title}</p>
                                    <p style={{fontSize:'12px'}}>{val.description}</p>
                                    <p>{val.price}</p>
                                  </div>
                                  <div className="card-footer" style={{height:'55px'}}>
                                    <Button className="btn btn-primary">Buy Now</Button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
        </div>
    )


}

export default Category;