import React from "react";

const SectionThree = ()=>{
    
    return (
        <div className="s1">

            <div className="main-container s1-container">
             <h3>Some of My Past Projects</h3>

                <div className="post-wrapper">

                    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel" data-pause="hover">
                        <div className="carousel-inner">

                            <div className="carousel-item active container-fluid temp-container" data-interval="3000">
                                
                                <div className="post">
                                    <div className="card-container">
                                        <img className="thumbnail" src="https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80" alt=""/>
                                        <div className="post-preview">
                                            <h6 className="post-title">Daily Journal</h6>
                                            <p className="post-intro">Blog type website made with Node Js,Express,and Mongodb.</p>
                                            <a href="/post/daily-journal">Read More</a>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>

                            <div className="carousel-item  container-fluid temp-container" data-interval="3000">
                                
                                <div className="post">
                                    <div className="card-container">
                                        <img className="thumbnail" src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt=""/>
                                        <div className="post-preview">
                                            <h6 className="post-title">Todo</h6>
                                            <p className="post-intro">Todo application made with Node JS,Express,and MongoDB.</p>
                                            <a href="/post/todo">Read More</a>
                                        </div>
                                    </div>
                                    
                                </div>

                                
                            </div>

                            <div className="carousel-item  container-fluid temp-container" data-interval="3000">
                                
                                <div className="post">
                                    <div className="card-container">
                                        <img className="thumbnail" src="https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                                        <div className="post-preview">
                                            <h6 className="post-title">Chat App</h6>
                                            <p className="post-intro">Chat application made with Node Js and Socket.io.</p>
                                            <a href="/post/chat-app">Read More</a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="carousel-item  container-fluid temp-container" data-interval="3000">
                                
                                <div className="post">
                                    <div className="card-container">
                                        <img className="thumbnail" src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt=""/>
                                        <div className="post-preview">
                                            <h6 className="post-title">Devcamper-API</h6>
                                            <p className="post-intro">RESTful API created with Node.js, Express, and MongoDB</p>
                                            <a href="/post/devcamper">Read More</a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>


                        </div>

                        
                        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previouss</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    );

}

export default SectionThree;